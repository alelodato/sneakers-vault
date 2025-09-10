import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { createCheckoutSession } from "../utils/checkoutUtils";
import styles from "../pages/Cart.module.css";

export default function Cart() {
  const { items, inc, dec, remove, clear, totalPrice } = useCart();

  if (!items.length)
    return (
      <section className={styles.cartSection}>
        <div className={styles.coverText}>
          <h2>Cart</h2>
          <p className={styles.empty}>The cart is empty.</p>
        </div>
      </section>
    );

  return (
    <section className={styles.cartSection}>
      <div className={styles.coverText}>
        <h2>Cart</h2>
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
                      Size: {typeof size === "string" ? size : size.code ?? ""}
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
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <div className={styles.priceClearCheckout}>
          <strong className={styles.price}>
            Total: € {totalPrice.toFixed(2)}
          </strong>
          <div style={{ display: "flex", gap: 8 }}>
            <button className={styles.clearCheckoutBtn} onClick={clear}>
              Clear cart
            </button>
            <Link to="/checkout" className={styles.link}>
            <button
              className={styles.clearCheckoutBtn}
              onClick={() =>
                createCheckoutSession(
                  items.map(({ key, product, qty, size }) => ({
                    id: key,
                    name: product.title,
                    price: product.discount
                      ? product.price - (product.price * product.discount) / 100
                      : product.price,
                    quantity: qty,
                    image: product.image,
                    size,
                  }))
                )
              }
            >
              Checkout
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
