import ProductCard from "./ProductCard";
import styles from "../components/ProductGrid.module.css"

export default function ProductGrid({ items }) {
  if (!items?.length) return <p>Nessun prodotto trovato.</p>;
  return (
    <div className={styles.grid}>
      {items.map(p => <ProductCard key={p.id} p={p} />)}
    </div>
  );
}
