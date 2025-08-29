import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";

export default function ProductCard({ p }) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  return (
    <article className={styles.card}>
      <Link to={`/product/${p.slug}`}>
        <div className={styles.thumb}>
          <img className={styles.img} src={p.image} alt={p.title} />
          {p.hoverImage && (
            <img className={styles.imgHover} src={p.hoverImage} alt={`${p.title} alt`} />
          )}
        </div>
        <div className={styles.row}>
          <h3 className={styles.title}>{p.title}</h3>
          <span className={styles.price}>€ {p.price.toFixed(2)}</span>
        </div>
        <div className={styles.brand}>{p.brand}</div>
        <div className={styles.cardIcons}>
        <i class="fa-solid fa-cart-shopping" onClick={() => addToCart(p)}></i>
        <i class="fa-regular fa-heart" onClick={() => addToWishlist(p)}></i>
        </div>
      </Link>
    </article>
  );
}
