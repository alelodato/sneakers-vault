import styles from "./ShopPages.module.css";
import { products } from "../data/products";
import ProductGrid from "../components/ProductGrid";

export default function New() {
  const newArrivals = products.filter(
    (p) => p.category === "new" || p.tags?.includes("new")
  );

  return (
    <section className={styles.section}>
      <div className={styles.coverTxt}>
        <h2 className={styles.title}>NEW ARRIVALS</h2>
        <ProductGrid items={newArrivals} />
      </div>
    </section>
  );
}