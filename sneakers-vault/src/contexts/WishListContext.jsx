import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext(null);
export const useWishlist = () => useContext(WishlistContext);

const LS_KEY = "sv_wishlist_v1";

export default function WishlistProvider({ children }) {
  const [ids, setIds] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem(LS_KEY)) ?? []); }
    catch { return new Set(); }
  });

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify([...ids]));
  }, [ids]);

  const has = (id) => ids.has(id);
  const add = (product) => setIds(prev => new Set(prev).add(product.id));
  const remove = (id) => setIds(prev => {
    const n = new Set(prev); n.delete(id); return n;
  });
  const toggle = (product) => has(product.id) ? remove(product.id) : add(product);
  const count = ids.size;

  return (
    <WishlistContext.Provider value={{ ids, has, add, remove, toggle, count }}>
      {children}
    </WishlistContext.Provider>
  );
}
