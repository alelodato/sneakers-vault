import ProductCard from "./ProductCard";
import styles from "../components/ProductGrid.module.css";

export default function ProductGrid({ items }) {
  if (!items?.length) return <p className={styles.noProduct}>No item found.</p>;
  return (
    <div className="grid grid-cols-1 gap-6 mx-4 sm:mx-6 md:mx-0 ">
      {items.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </div>
  );
}
