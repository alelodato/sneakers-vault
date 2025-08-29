import styles from "./ShopPages.module.css";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";

export default function OnSale() {
  const onSale = products.filter(
    (p) => p.category === "sale" || p.tags?.includes("sale")
  );

  return (
    <section className={styles.section}>
      <div className={styles.coverTxt}>
        <h2 className={styles.title}>ITEMS ON SALE (UP TO 70%)</h2>
        <ProductGrid items={onSale} />
      </div>
    </section>
  );
}