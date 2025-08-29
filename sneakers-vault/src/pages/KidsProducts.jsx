import styles from "./ShopPages.module.css";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";

export default function KidsProducts() {
  const kids = products.filter(
    p => p.category === "kids" || p.tags?.includes("kids")
  );

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Kids</h2>
      <ProductGrid items={kids} />
    </section>
  );
}
