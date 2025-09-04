import { useState, useMemo } from "react";
import { products } from "../data/products";
import ProductGrid from "../components/ProductGrid";
import styles from "./ShopPages.module.css";

export default function Shop() {
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

  // === FILTRO ===
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // normalizzo: unisco category + tags (se esistono)
      const allTags = [
        p.category,
        ...(Array.isArray(p.tags) ? p.tags : []),
      ].filter(Boolean);

      const tagMatch =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => allTags.includes(tag));

      const brandMatch =
        selectedBrands.length === 0 || selectedBrands.includes(p.brand);

      return tagMatch && brandMatch;
    });
  }, [selectedTags, selectedBrands]);

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
