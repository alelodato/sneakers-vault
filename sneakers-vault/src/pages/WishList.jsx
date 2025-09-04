import { useWishlist } from "../contexts/WishListContext";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import styles from "../pages/WishList.module.css";

export default function Wishlist() {
  const { ids, count } = useWishlist();
  const liked = products.filter((p) => ids.has(p.id));

  if (!count)
    return (
      <section className={styles.wishlistSection}>
        <div className={styles.coverText}>
          <h2 className={styles.wishlistTitle}>Wishlist</h2>
          <p className={styles.empty}>Your wishlist is empty.</p>
        </div>
      </section>
    );

  return (
    <section className={styles.wishlistSection}>
      <div className={styles.coverText}>
        <h2 className={styles.wishlistTitle}>Wishlist</h2>
        <div
          className={styles.cardDisplay}
        >
          {liked.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
