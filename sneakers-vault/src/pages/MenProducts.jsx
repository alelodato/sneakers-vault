import styles from "./ShopPages.module.css";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";

export default function Men() {
  const men = products.filter(
    (p) => p.category === "men" || p.tags?.includes("men")
  );

  return (
    <section className={styles.section}>
      <div className={styles.coverTxt}>
        <h2 className={styles.title}>Men</h2>
        <ProductGrid items={men} />
      </div>
    </section>
  );
}
