import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { createCheckoutSession } from "../utils/checkoutUtils";
import styles from "../pages/Cart.module.css";
import { useTranslation } from 'react-i18next';

export default function Cart() {
  const { t } = useTranslation();
  const { items, inc, dec, remove, clear, totalPrice } = useCart();

  if (!items.length)
    return (
      <section className={styles.cartSection}>
        <div className={styles.coverText}>
          <h2>{t('cart.title')}</h2>
          <p className={styles.empty}>{t('cart.empty')}</p>
        </div>
      </section>
    );

  return (
    <section className={styles.cartSection}>
      <div className={styles.coverText}>
        <h2>{t('cart.title')}</h2>
        <ul className={styles.cartList}>
          {items.map(({ key, product, qty, size }) => {
            const price = product.discount
              ? product.price - (product.price * product.discount) / 100
              : product.price;
            return (
              <li key={key} className={styles.cartItem}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={styles.cartImage}
                />
                <div>
                  <div className={styles.cartTitleItem}>{product.title}</div>
                  {size && (
                    <div className={styles.size}>
                      {t('cart.size')} {typeof size === "string" ? size : size.code ?? ""}
                    </div>
                  )}
                  <div className={styles.cartPrice}>€ {price.toFixed(2)}</div>
                </div>
                <div className={styles.cartActions}>
                  <button className={styles.cartBtn} onClick={() => dec(key)}>
                    -
                  </button>
                  <span className={styles.itemQuantity}>{qty}</span>
                  <button className={styles.cartBtn} onClick={() => inc(key)}>
                    +
                  </button>
                  <button
                    className={styles.removeBtn}
                    onClick={() => remove(key)}
                  >
                    {t('cart.remove')}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <div className={styles.priceClearCheckout}>
          <strong className={styles.price}>
            {t('cart.total')} {totalPrice.toFixed(2)}
          </strong>
          <div style={{ display: "flex", gap: 8 }}>
            <button className={styles.clearCheckoutBtn} onClick={clear}>
              {t('cart.clear')}
            </button>
            <Link to="/checkout" className={styles.link}>
              <button
                className={styles.clearCheckoutBtn}
                onClick={() =>
                  createCheckoutSession(
                    items.map(({ product, qty, size }) => ({
                      price_data: {
                        currency: "eur",
                        product_data: {
                          name: `${product.title} - Size: ${size}`,
                        },
                        unit_amount:
                          Math.round(
                            product.discount
                              ? product.price -
                                  (product.price * product.discount) / 100
                              : product.price
                          ) * 100,
                      },
                      quantity: qty,
                    }))
                  )
                }
              >
                {t('cart.checkout')}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
