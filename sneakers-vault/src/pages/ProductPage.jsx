import { useParams, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { products } from "../data/products";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishListContext";
import normalizeSizes from "../utils/sizes";
import SizePicker from "../components/SizePicker";
import styles from "./ProductPage.module.css";

const LABELS = { men: "Men", women: "Women", kids: "Kids" };

export default function ProductPage() {
  const { slug } = useParams();
  const p = products.find((x) => x.slug === slug);
  const sizes = normalizeSizes(p?.sizes);
  const needSize = sizes.length > 0;

  const { add: addToCart } = useCart();
  const { has, toggle } = useWishlist();

  const [size, setSize] = useState(null);
  const [msg, setMsg] = useState("");
  const msgTimerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(msgTimerRef.current);
  }, []);

  if (!p) {
    return (
      <section className={styles.page} style={{ padding: 16 }}>
        <h2>Prodotto non trovato</h2>
        <Link to="/shop">Torna al negozio</Link>
      </section>
    );
  }

  const groups = ["men", "women", "kids"].filter(
    (g) => Array.isArray(p.sizes?.[g]) && p.sizes[g].length > 0
  );

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (needSize && !size) {
      setMsg("Choose a size");
      clearTimeout(msgTimerRef.current);
      msgTimerRef.current = setTimeout(() => setMsg(""), 1800);
      return;
    }
    addToCart(p, 1, size || null);
    setMsg("Item added to cart");
    clearTimeout(msgTimerRef.current);
    msgTimerRef.current = setTimeout(() => setMsg(""), 1800);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(p);
  };

  return (
    <section className={styles.page}>
      <div className={styles.coverText}>
        <div className={styles.product}>
          <div className={styles.media}>
            <img className={styles.img} src={p.image} alt={p.title} />
          </div>

          <div className={styles.info}>
            <h1 className={styles.title}>{p.title}</h1>
            {groups.map((g) => (
              <div key={g} className={styles.sizeGroup}>
                <div className={styles.sizeGroupHeader}>
                  <span className={styles.sizeGroupLabel}>{LABELS[g]}</span>
                </div>

                <SizePicker
                  sizes={p.sizes[g]}
                  value={size?.group === g ? size.code : null}
                  onChange={(code) => setSize({ group: g, code })}
                />
              </div>
            ))}
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
                className={`${styles.addBtn} ${needSize && !size ? styles.addBtnDisabled : ""}`}
                aria-disabled={needSize && !size}
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
              {msg && (
                <div className={styles.alert} role="status" aria-live="polite">
                  {msg}
                </div>
              )}
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
      </div>
    </section>
  );
}
