import styles from "./ShopPages.module.css";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";

export default function WomenProducts() {
  const women = products.filter(
    (p) => p.category === "women" || p.tags?.includes("women")
  );

  return (
    <section className={styles.section}>
      <div className={styles.coverTxt}>
        <h2 className={styles.title}>Women</h2>
        <ProductGrid items={women} />
      </div>
    </section>
  );
}
