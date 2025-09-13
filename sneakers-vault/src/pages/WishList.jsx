import { useWishlist } from "../contexts/WishListContext";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import styles from "../pages/WishList.module.css";
import { useTranslation } from 'react-i18next';

export default function Wishlist() {
  const { t } = useTranslation();
  const { ids, count } = useWishlist();
  const liked = products.filter((p) => ids.has(p.id));

  if (!count)
    return (
      <section className={styles.wishlistSection}>
        <div className={styles.coverText}>
          <h2 className={styles.wishlistTitle}>Wishlist</h2>
          <p className={styles.empty}>{t('wishlist.empty')}</p>
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
