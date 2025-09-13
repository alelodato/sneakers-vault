import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import styles from "./Checkout.module.css";
import { useTranslation } from 'react-i18next';


function getFinalPrice(p) {
  return p.discount ? p.price * (1 - p.discount / 100) : p.price;
}

const fmt = (n) =>
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
    n
  );

export default function Checkout() {
  const { t } = useTranslation();
  const [selectedDelivery, setSelectedDelivery] = useState("standard");
  const { items } = useCart(); // items: [{ key, product, qty, size }]
  const cartIsEmpty = !items || items.length === 0;

  // === FORM STATE ===
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [slot, setSlot] = useState("");
  const deliveryFee = selectedDelivery === "nextday" ? 10 : 0;

  const slots = ["09:00-12:00", "12:00-15:00", "15:00-18:00"];

  // === TOTALE ===
  const subtotal = useMemo(
    () =>
      (items || []).reduce(
        (acc, { product, qty }) => acc + getFinalPrice(product) * qty,
        0
      ),
    [items]
  );
  const total = subtotal + deliveryFee;

  // === VALIDATION ===
  const formOk =
    !cartIsEmpty &&
    fullName.trim() &&
    email.trim() &&
    address.trim() &&
    city.trim() &&
    zip.trim() &&
    slot;

  // === CHECKOUT STRIPE ===
  const handlePay = async () => {
    if (!formOk) return;

    const payload = {
      items: items.map(({ product, qty, size }) => ({
        name: product.title,
        price: getFinalPrice(product),
        quantity: qty,
        image: product.image,
        size,
      })),
      delivery: {
        type: selectedDelivery,
        fee: selectedDelivery === "express" ? 10 : 0,
      },
      meta: {
        fullName,
        email,
        address,
        city,
        zip,
        slot,
      },
    };
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Checkout error");
      }

      const { url } = await res.json();
      window.location.href = url; // redirect to Stripe
    } catch (err) {
      console.error(err);
      alert("There's been a problem redirecting you. Try later.");
    }
  };

  if (cartIsEmpty) {
    return (
      <section className={styles.section}>
        <div className={styles.coverTxt}>
          <h2>{t('checkout.empty')}</h2>
          <Link to="/shop" className={styles.link}>
            {t('checkout.back')}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.coverText}>
        <div className={styles.layout}>
          <div className={styles.col}>
            <h2 className={styles.title}>{t('checkout.summary')}</h2>

            <div className={styles.card}>
              <h3>{t('checkout.infos')}</h3>
              <div className={styles.grid2}>
                <label>
                  {t('checkout.name')}
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label>
                  {t('checkout.phone')}
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
                <label>
                  {t('checkout.postal')}
                  <input value={zip} onChange={(e) => setZip(e.target.value)} />
                </label>
                <label className={styles.span2}>
                  {t('checkout.address')}
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </label>
                <label className={styles.span2}>
                  {t('checkout.city')}
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </label>
              </div>
            </div>

            <div className={styles.card}>
              <h3>{t('checkout.delivery')}</h3>
              <div className={styles.grid2}>
                <label>
                  {t('checkout.time')}
                  <select
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                  >
                    <option value="">
                      {t('checkout.time2')}
                    </option>
                    {slots.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>

                <fieldset className={styles.span2}>
                  <legend>{t('checkout.options')}</legend>
                  <label className={styles.radio}>
                    <input
                      type="radio"
                      name="delivery"
                      value="standard"
                      checked={selectedDelivery === "standard"}
                      onChange={(e) => setSelectedDelivery(e.target.value)}
                    />
                    <span>{t('checkout.standard')}</span>
                  </label>
                  <label className={styles.radio}>
                    <input
                      type="radio"
                      name="delivery"
                      value="nextday"
                      checked={selectedDelivery === "nextday"}
                      onChange={(e) => setSelectedDelivery(e.target.value)}
                    />
                    <span>{t('checkout.express')} ( + {fmt(10)} )</span>
                  </label>
                </fieldset>
              </div>
            </div>
          </div>

          {/* CART SUMMARY */}
          <aside className={styles.col}>
            <div className={styles.card}>
              <h3>Cart</h3>
              <ul className={styles.list}>
                {items.map(({ key, product, qty, size }) => (
                  <li key={key} className={styles.row}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className={styles.thumb}
                    />
                    <div className={styles.info}>
                      <div className={styles.name}>{product.title}</div>
                      {size ? (
                        <div className={styles.meta}>
                          Size:{" "}
                          {typeof size === "string"
                            ? size
                            : size.code || size.us}
                        </div>
                      ) : null}
                      <div className={styles.meta}>Qty: {qty}</div>
                    </div>
                    <div className={styles.price}>
                      {fmt(getFinalPrice(product) * qty)}
                    </div>
                  </li>
                ))}
              </ul>

              <div className={styles.totals}>
                <div>
                  <span>{t('checkout.subtotal')}</span>
                  <strong>{fmt(subtotal)}</strong>
                </div>
                <div>
                  <span>{t('checkout.delivery')}</span>
                  <strong>{fmt(deliveryFee)}</strong>
                </div>
                <div className={styles.grand}>
                  <span>{t('checkout.total')}</span>
                  <strong>{fmt(total)}</strong>
                </div>
              </div>

              <button
                className={styles.payBtn}
                disabled={!formOk}
                onClick={handlePay}
                aria-disabled={!formOk}
                title={!formOk ? "Fill all form fields" : "Pay with Stripe"}
              >
                {t('checkout.payment')}
              </button>

              <p className={styles.note}>{t('checkout.payment2')}</p>

              <Link className={styles.back} to="/cart">
                {t('checkout.back2')}
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
