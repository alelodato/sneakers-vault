import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
export const useCart = () => useContext(CartContext);

const LS_KEY = "sv_cart_v1";

export default function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) ?? []; }
    catch { return []; }
  });
  useEffect(() => { localStorage.setItem(LS_KEY, JSON.stringify(items)); }, [items]);

  const add = (product, qty = 1) => {
    setItems(prev => {
      const i = prev.findIndex(x => x.id === product.id);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + qty };
        return next;
      }
      return [...prev, { id: product.id, qty, product }];
    });
  };
  const remove = (id) => setItems(prev => prev.filter(x => x.id !== id));
  const inc = (id) => setItems(prev => prev.map(x => x.id === id ? { ...x, qty: x.qty + 1 } : x));
  const dec = (id) => setItems(prev => prev.map(x => x.id === id ? { ...x, qty: Math.max(1, x.qty - 1) } : x));
  const clear = () => setItems([]);

  const totals = useMemo(() => {
    const totalQty = items.reduce((s, x) => s + x.qty, 0);
    const totalPrice = items.reduce((s, x) => {
      const p = x.product;
      const price = p.discount ? p.price - (p.price * p.discount) / 100 : p.price;
      return s + price * x.qty;
    }, 0);
    return { totalQty, totalPrice };
  }, [items]);

  const value = { items, add, remove, inc, dec, clear, ...totals };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
