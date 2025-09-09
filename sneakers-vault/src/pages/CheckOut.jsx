import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext"; // <-- dove hai il context
import styles from "./Checkout.module.css";        // opzionale, vedi snippet CSS sotto

// util per calcolare il prezzo scontato
function getFinalPrice(p) {
  return p.discount ? p.price * (1 - p.discount / 100) : p.price;
}
// util per formattare €
const fmt = (n) =>
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
    n
  );

// genera i prossimi 10 giorni (escludendo ieri)
function nextDays(n = 10) {
  const out = [];
  const base = new Date();
  for (let i = 1; i <= n; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    out.push(d.toISOString().slice(0, 10)); // yyyy-mm-dd
  }
  return out;
}

export default function Checkout() {
  const navigate = useNavigate();
  const { items } = useCart(); // items: [{ key, product, qty, size }]
  const cartIsEmpty = !items || items.length === 0;

  // === FORM STATE ===
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [delivery, setDelivery] = useState("standard"); // standard | nextday
  const deliveryFee = delivery === "nextday" ? 10 : 0;

  const slots = ["09:00-12:00", "12:00-15:00", "15:00-18:00"];
  const dates = nextDays(10);

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

  // === VALIDAZIONE BASE ===
  const formOk =
    !cartIsEmpty &&
    fullName.trim() &&
    email.trim() &&
    address.trim() &&
    city.trim() &&
    zip.trim() &&
    date &&
    slot;

  // === CHECKOUT STRIPE ===
  const handlePay = async () => {
    if (!formOk) return;

    // payload verso la tua /api/checkout
    const payload = {
      items: items.map(({ product, qty, size }) => ({
        name: product.title,
        price: getFinalPrice(product),
        quantity: qty,
        image: product.image,
        size, // {code, us, ...} oppure stringa -> lato API lo gestisci come preferisci
      })),
      deliveryFee,
      meta: {
        fullName,
        email,
        phone,
        address,
        city,
        zip,
        date,
        slot,
        delivery,
      },
    };

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Checkout error");
      }
      const { url } = await res.json();
      window.location.href = url; // redireziona a Stripe Checkout
    } catch (err) {
      console.error(err);
      alert("There's been a problem while trying to process your payment. Try later.");
    }
  };

  if (cartIsEmpty) {
    return (
      <section className={styles.section}>
        <div className={styles.coverTxt}>
          <h2>Your Cart is Empty</h2>
          <Link to="/shop">Back to Shop page</Link>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
        <div className={styles.coverText}>
      <div className={styles.layout}>
        {/* COLONNA SINISTRA: FORM */}
        <div className={styles.col}>
          <h2 className={styles.title}>Order Summary</h2>

          <div className={styles.card}>
            <h3>Shipping Infos</h3>
            <div className={styles.grid2}>
              <label>
                Full Name
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
                Telefono (opz.)
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              <label>
                Postal Code
                <input value={zip} onChange={(e) => setZip(e.target.value)} />
              </label>
              <label className={styles.span2}>
                Address
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>
              <label className={styles.span2}>
                City
                <input value={city} onChange={(e) => setCity(e.target.value)} />
              </label>
            </div>
          </div>

          <div className={styles.card}>
            <h3>Delivery</h3>
            <div className={styles.grid2}>
              <label>
                Date
                <select value={date} onChange={(e) => setDate(e.target.value)}>
                  <option value="">Choose a date</option>
                  {dates.map((d) => (
                    <option key={d} value={d}>
                      {new Date(d).toLocaleDateString("it-IT", {
                        weekday: "long",
                        day: "2-digit",
                        month: "2-digit",
                      })}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Time
                <select value={slot} onChange={(e) => setSlot(e.target.value)}>
                  <option value="">Choose a time for your delivery</option>
                  {slots.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>

              <fieldset className={styles.span2}>
                <legend>Delivery Method</legend>
                <label className={styles.radio}>
                  <input
                    type="radio"
                    name="delivery"
                    value="standard"
                    checked={delivery === "standard"}
                    onChange={(e) => setDelivery(e.target.value)}
                  />
                  <span>Standard (Free, 2–4 gg)</span>
                </label>
                <label className={styles.radio}>
                  <input
                    type="radio"
                    name="delivery"
                    value="nextday"
                    checked={delivery === "nextday"}
                    onChange={(e) => setDelivery(e.target.value)}
                  />
                  <span>Express ( + {fmt(10)} )</span>
                </label>
              </fieldset>
            </div>
          </div>
        </div>

        {/* COLONNA DESTRA: RIEPILOGO CARRELLO */}
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
                        {typeof size === "string" ? size : size.code || size.us}
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
                <span>Subtotal</span>
                <strong>{fmt(subtotal)}</strong>
              </div>
              <div>
                <span>Delivery</span>
                <strong>{fmt(deliveryFee)}</strong>
              </div>
              <div className={styles.grand}>
                <span>Total</span>
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
              Go To Payment
            </button>

            <p className={styles.note}>
              Payment with Strip (Test mode).
            </p>

            <Link className={styles.back} to="/cart">
              ← Back to Cart
            </Link>
          </div>
        </aside>
      </div>
      </div>
    </section>
  );
}
