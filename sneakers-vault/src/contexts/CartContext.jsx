import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
export const useCart = () => useContext(CartContext);

const LS_KEY = "sv_cart_v1";
const keyOf = (productId, size) => (size ? `${productId}__${size}` : `${productId}`);

export default function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
      // MIGRAZIONE: vecchio formato -> aggiungi key/size
      return raw.map((x) => ({
        key: x.key ?? keyOf(x.id, x.size ?? null),
        id: x.id,
        size: x.size ?? null,
        qty: x.qty ?? 1,
        product: x.product,
      }));
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(items));
  }, [items]);

  const add = (product, qty = 1, size = null) => {
    const key = `${product.id}__$size || "nosize"}`;
    setItems((prev) => {
      const i = prev.findIndex((x) => x.key === key);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + qty };
        return next;
      }
      return [...prev, { key, id: product.id, size, qty, product }];
    });
  };

  const remove = (key) =>
    setItems((prev) => prev.filter((x) => x.key !== key));

  const inc = (key) =>
    setItems((prev) =>
      prev.map((x) => (x.key === key ? { ...x, qty: x.qty + 1 } : x))
    );

  const dec = (key) =>
    setItems((prev) =>
      prev.map((x) =>
        x.key === key ? { ...x, qty: Math.max(1, x.qty - 1) } : x
      )
    );

  const clear = () => setItems([]);

  const totals = useMemo(() => {
    const totalQty = items.reduce((s, x) => s + x.qty, 0);
    const totalPrice = items.reduce((s, x) => {
      const p = x.product;
      const unit = p.discount ? p.price - (p.price * p.discount) / 100 : p.price;
      return s + unit * x.qty;
    }, 0);
    return { totalQty, totalPrice };
  }, [items]);

  const value = { items, add, remove, inc, dec, clear, ...totals };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
