import styles from "./ShopPages.module.css";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";

export default function Trend() {
  const trending = products.filter(
    (p) => p.category === "hot" || p.tags?.includes("hot")
  );

  return (
    <section className={styles.section}>
      <div className={styles.coverTxt}>
        <h2 className={styles.title}>🔥HOTTEST ON THE MARKET🔥</h2>
        <ProductGrid items={trending} />
      </div>
    </section>
  );
}