import ProductCard from "./ProductCard";

export default function ProductGrid({ items }) {
  if (!items?.length) return <p>Nessun prodotto trovato.</p>;
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 16
    }}>
      {items.map(p => <ProductCard key={p.id} p={p} />)}
    </div>
  );
}
