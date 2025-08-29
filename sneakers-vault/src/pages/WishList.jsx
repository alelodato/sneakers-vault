import { useWishlist } from "../contexts/WishListContext";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const { ids, count } = useWishlist();
  const liked = products.filter(p => ids.has(p.id));

  if (!count) return <section style={{padding:16}}><h2>Wishlist</h2><p>Nessun prodotto nei preferiti.</p></section>;

  return (
    <section style={{padding:16}}>
      <h2>Wishlist</h2>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3, minmax(0,1fr))", gap:16}}>
        {liked.map(p => <ProductCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}
