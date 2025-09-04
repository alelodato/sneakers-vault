import styles from "./ShopPages.module.css";
import { products } from "../data/products";
import ProductGrid from "../components/ProductGrid";

export default function Shop() {
  const items = products;

  return (
    <section className={styles.section}>
      <div className={styles.coverTxt}>
        <h2 className={styles.title}>All Our Items</h2>
        <ProductGrid items={items} />
      </div>
    </section>
  );
}