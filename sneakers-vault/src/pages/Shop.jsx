import { useState, useMemo } from "react";
import { products } from "../data/products";
import { useSearchParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import styles from "./ShopPages.module.css";

export default function Shop() {
  const [searchParams] = useSearchParams();

  const qParam = (searchParams.get("q") ?? "").toLowerCase();

  const paramTags = (searchParams.get("tag") ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const paramBrands = (searchParams.get("brand") ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]); // ["men","women","kids"]
  const [selectedBrands, setSelectedBrands] = useState([]); // ["Nike","Adidas",...]

  const toggleFilter = () => setShowFilters((v) => !v);

  const handleTagChange = (tag) =>
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  const handleBrandChange = (brand) =>
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );

  // === FILTER ===
  const tagsToApply = selectedTags.length ? selectedTags : paramTags;
  const brandsToApply = selectedBrands.length ? selectedBrands : paramBrands;
  const filteredProducts = products.filter((p) => {
  const titleMatch =
    !qParam || p.title.toLowerCase().includes(qParam);

  const tagMatch =
    tagsToApply.length === 0 || tagsToApply.some(t => p.tags?.includes(t));

  const brandMatch =
    brandsToApply.length === 0 || brandsToApply.includes(p.brand);

  return titleMatch && tagMatch && brandMatch;
});

  // brand unici per i checkbox
  const brands = useMemo(
    () => [...new Set(products.map((p) => p.brand).filter(Boolean))],
    []
  );

  return (
    <section className={styles.section}>
      <div className={styles.coverTxt}>
        <div className={styles.header}>
          <button
            className={styles.filterBtn}
            onClick={toggleFilter}
            aria-label="Open filters"
          >
            <i className="fa fa-filter" />
          </button>
          <h2 className={styles.title}>Shop The Vault</h2>
        </div>

        {showFilters && (
          <div className={styles.filters}>
            <h3>Tags</h3>
            {["men", "women", "kids"].map((tag) => (
              <label key={tag}>
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleTagChange(tag)}
                />
                {tag}
              </label>
            ))}

            <h3>Brands</h3>
            {brands.map((brand) => (
              <label key={brand}>
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
                {brand}
              </label>
            ))}
          </div>
        )}

        {/* QUI: passa l’array direttamente a ProductGrid */}
        <div className={styles.grid}>
          <ProductGrid items={filteredProducts} />
        </div>
      </div>
    </section>
  );
}
