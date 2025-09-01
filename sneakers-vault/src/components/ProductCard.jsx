import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishListContext";
import SizePicker from "./SizePicker";

export default function ProductCard({ p }) {
  const { add: addToCart /* o addToCart */ } = useCart();
  const { toggle: addToWishlist /* o addToWishlist, has */ } = useWishlist();

  const [size, setSize] = useState(null);
  const [msg, setMsg] = useState("");

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!size) { setMsg("Seleziona la taglia"); return; }
    setMsg("");
    // se il tuo CartContext usa add(product, qty, size):
    addToCart(p, 1, size);
  };

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
            <img className={styles.imgHover} src={p.hoverImage} alt={`${p.title} alt`} />
          )}
        </div>
      </Link>

      <div className={styles.row}>
        <Link to={`/product/${p.slug || p.id}`} className={styles.title}>
          <h3>{p.title}</h3>
        </Link>
        <span className={styles.price}>€ {p.price.toFixed(2)}</span>
      </div>

      {/* SIZE PICKER: disegna le pill e aggiorna "size" */}
      {Array.isArray(p.sizes) && p.sizes.length > 0 && (
        <>
          <SizePicker sizes={p.sizes} value={size} onChange={setSize} />
          {msg && <div className={styles.error}>{msg}</div>}
        </>
      )}

      <div className={styles.cardIcons}>
        <button type="button" className="fa-solid fa-cart-shopping" onClick={handleAddToCart} />
        <button type="button" className="fa-regular fa-heart" onClick={handleWishlist} />
      </div>
    </article>
  );
}
