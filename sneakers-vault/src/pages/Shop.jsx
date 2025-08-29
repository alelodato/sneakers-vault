import { useCart } from "../contexts/CartContext";

export default function Cart() {
  const { items, inc, dec, remove, clear, totalPrice } = useCart();

  if (!items.length) return <section style={{padding:16}}><h2>Cart</h2><p>Il carrello è vuoto.</p></section>;

  return (
    <section style={{padding:16}}>
      <h2>Cart</h2>
      <ul style={{listStyle:"none", padding:0, display:"grid", gap:12}}>
        {items.map(({ id, product, qty }) => {
          const price = product.discount ? product.price - (product.price * product.discount)/100 : product.price;
          return (
            <li key={id} style={{display:"grid", gridTemplateColumns:"80px 1fr auto", gap:12, alignItems:"center", background:"#222", padding:12, borderRadius:8}}>
              <img src={product.image} alt={product.title} style={{width:80, height:80, objectFit:"cover", borderRadius:6}} />
              <div>
                <div style={{fontWeight:600}}>{product.title}</div>
                <div>€ {price.toFixed(2)}</div>
              </div>
              <div style={{display:"flex", alignItems:"center", gap:8}}>
                <button onClick={() => dec(id)}>-</button>
                <span>{qty}</span>
                <button onClick={() => inc(id)}>+</button>
                <button onClick={() => remove(id)}>Remove</button>
              </div>
            </li>
          );
        })}
      </ul>

      <div style={{marginTop:16, display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <strong>Total: € {totalPrice.toFixed(2)}</strong>
        <div style={{display:"flex", gap:8}}>
          <button onClick={clear}>Clear cart</button>
          <button>Checkout</button>
        </div>
      </div>
    </section>
  );
}
