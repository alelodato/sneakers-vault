// src/components/SearchBar.jsx
import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [params] = useSearchParams();
  const visible = params.get("search") === "1";
  const navigate = useNavigate();

  // opzioni brand dal tuo dataset
  const brands = useMemo(
    () => Array.from(new Set(products.map(p => p.brand))).sort(),
    []
  );

  // stato locale (prefill da query se presenti)
  const [q, setQ] = useState(params.get("q") ?? "");
  const [tag, setTag] = useState(params.get("tag") ?? "");
  const [brand, setBrand] = useState(params.get("brand") ?? "");

  // chiudi overlay
  const close = () => {
    params.delete("search");
    navigate({ pathname: "/", search: params.toString() }, { replace: true });
  };

  // submit -> vai su /shop con i query param
  const onSubmit = (e) => {
    e.preventDefault();
    const sp = new URLSearchParams();
    if (q.trim()) sp.set("q", q.trim());
    if (tag) sp.set("tag", tag);
    if (brand) sp.set("brand", brand);
    navigate({ pathname: "/shop", search: sp.toString() });
  };

  if (!visible) return null;

  return (
    <div className={styles.backdrop} onClick={close}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.searchHeader}>Search products</h3>
          <button className={styles.close} onClick={close} aria-label="Close">×</button>
        </div>

        <form onSubmit={onSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Search by title…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />

          <div className={styles.row}>
            <label >
              <h3 className={styles.tag}>Item Type</h3>
              <select value={tag} onChange={(e) => setTag(e.target.value)}>
                <option value="">All</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
              </select>
            </label>

            <label>
              <h3 className={styles.tag}>Brand</h3>
              <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                <option value="">All</option>
                {brands.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </label>
          </div>

          <button type="submit" className={styles.submit}>Search</button>
        </form>
      </div>
    </div>
  );
}
