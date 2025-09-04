import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { useWishlist } from "../contexts/WishListContext";

export default function ProductCard({ p }) {
  const { has, toggle: addToWishlist } =
    useWishlist();

  if(!p) return null;

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToWishlist(p);
  };

  return (
    <article className={styles.card}>
      {/* Rendi cliccabili solo immagine e titolo, NON tutta la card */}
      <Link to={`/product/${p.slug || p.id}`} className={styles.media}>
        <div className={styles.thumb}>
          <img className={styles.img} src={p.image} alt={p.title} />
          {p.hoverImage && (
            <img
              className={styles.imgHover}
              src={p.hoverImage}
              alt={`${p.title} alt`}
            />
          )}
        </div>
      </Link>

      <div className={styles.row}>
        <Link to={`/product/${p.slug}`} className={styles.title}>
          <h3>{p.title}</h3>
        </Link>
        <span className={styles.price}>€ {p.price.toFixed(2)}</span>
      </div>

      <div className={styles.cardIcons}>
        <button
          type="button"
          className={styles.iconBtn}
          onClick={handleWishlist}
          aria-label="Add to wishlist"
          title="Add to wishlist"
        >
          <i
            className={`fa-solid fa-heart ${
              has(p.id) ? styles.heartOn : styles.heartOff
            }`}
          />
        </button>
      </div>
    </article>
  );
}
