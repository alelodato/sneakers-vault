import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishListContext";
import normalizeSizes from "../utils/sizes";
import SizePicker from "../components/SizePicker";
import styles from "./ProductPage.module.css";

export default function ProductPage() {
  const { slug } = useParams();
  const p = products.find(x => x.slug === slug);
  const sizes = normalizeSizes(p?.sizes);
  const needSize = sizes.length > 0;

  const { add: addToCart } = useCart();
  const { has, toggle } = useWishlist();

  const [size, setSize] = useState(null);
  const [msg, setMsg] = useState("");

  if (!p) {
    return (
      <section className={styles.page} style={{ padding: 16 }}>
        <h2>Prodotto non trovato</h2>
        <Link to="/shop">Torna al negozio</Link>
      </section>
    );
  }

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (needSize && !size) {
      setMsg("Scegli una taglia");
      return;
    }
    setMsg("");
    addToCart(p, 1, size || null);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(p);
  };

  return (
    <section className={styles.page}>
      <div className={styles.coverText}>
        <div className={styles.media}>
          <img className={styles.img} src={p.image} alt={p.title} />
        </div>

        <div className={styles.info}>
          <h1 className={styles.title}>{p.title}</h1>
          {needSize && (
            <>
              <SizePicker sizes={sizes} value={size} onChange={setSize} />
              {msg && <div className={styles.error}>{msg}</div>}
            </>
          )}
          <div className={styles.priceRow}>
            <span className={styles.price}>
              €{" "}
              {(p.discount
                ? p.price * (1 - p.discount / 100)
                : p.price
              ).toFixed(2)}
            </span>
          </div>
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.iconBtn}
              onClick={handleAddToCart}
              aria-label="Add to cart"
            >
              <i className="fa-solid fa-cart-shopping" />
            </button>

            <button
              type="button"
              className={styles.iconBtn}
              onClick={handleWishlist}
              aria-label="Add to wishlist"
            >
              <i
                className={`fa-solid fa-heart ${
                  has(p.id) ? styles.heartOn : styles.heartOff
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
