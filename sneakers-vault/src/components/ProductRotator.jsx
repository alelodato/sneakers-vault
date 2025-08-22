import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductRotator.module.css";

export default function ProductRotator({ products, interval = 4000 }) {
  const [start, setStart] = useState(0); // indice di partenza del gruppo da 3
  const len = products.length;

  // auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      setStart((s) => (s + 3) % len);
    }, interval);
    return () => clearInterval(id);
  }, [len, interval]);

  const current = [
    products[start % len],
    products[(start + 1) % len],
    products[(start + 2) % len],
  ];

  const prev = () => setStart((s) => (s - 3 + len) % len);
  const next = () => setStart((s) => (s + 3) % len);

  return (
    <div className={styles.wrap}>
      <div className={styles.row}>
        {current.map((p) => p && <ProductCard key={p.id} p={p} />)}
      </div>
      <div className={styles.controls}>
        <button className={styles.ctrl} onClick={prev}>◀</button>
        <button className={styles.ctrl} onClick={next}>▶</button>
      </div>
    </div>
  );
}
