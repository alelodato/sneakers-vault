import { useState, useMemo } from "react";
import { products } from "../data/products";
import { useSearchParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import styles from "./ShopPages.module.css";

export default function Shop() {
  const TAG_OPTIONS = ["men", "women", "kids", "sale", "new"];
  const TAG_LABELS = {
    men: "Men",
    women: "Women",
    kids: "Kids",
    sale: "On sale",
    new: "New arrivals",
  };

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
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const toggleFilter = () => setShowFilters((v) => !v);

  const handleTagChange = (tag) =>
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  const handleBrandChange = (brand) =>
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );

  const handleSizeChange = (sizeCode) => {
    setSelectedSizes(
      (prev) =>
        prev.includes(sizeCode)
          ? prev.filter((s) => s !== sizeCode) // se già selezionata, la rimuove
          : [...prev, sizeCode] // altrimenti la aggiunge
    );
  };

  // === FILTER ===
  const tagsToApply = selectedTags.length ? selectedTags : paramTags;
  const brandsToApply = selectedBrands.length ? selectedBrands : paramBrands;
  const filteredProducts = products.filter((p) => {
    const titleMatch = !qParam || p.title.toLowerCase().includes(qParam);

    const tagMatch =
      tagsToApply.length === 0 || tagsToApply.some((t) => p.tags?.includes(t));

    const brandMatch =
      brandsToApply.length === 0 || brandsToApply.includes(p.brand);

    const colorMatch =
      selectedColors.length === 0 ||
      selectedColors.some((c) => p.colors?.includes(c));

    const sizeMatch =
      selectedSizes.length === 0 ||
      Object.values(p.sizes || {}).some((group) =>
        group.some((s) => selectedSizes.includes(s.code))
      );

    return titleMatch && tagMatch && brandMatch && colorMatch && sizeMatch;
  });

  // brand unici per i checkbox
  const brands = useMemo(
    () => [...new Set(products.map((p) => p.brand).filter(Boolean))],
    []
  );

  const colors = useMemo(
    () => [...new Set(products.flatMap((p) => p.colors || []))],
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
            <h3>Item Type</h3>
            {TAG_OPTIONS.map((tag) => (
              <label key={tag}>
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleTagChange(tag)}
                />
                {TAG_LABELS[tag]}
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
            <h3>Colors</h3>
            {colors.map((color) => (
              <label key={color}>
                <input
                  type="checkbox"
                  checked={selectedColors.includes(color)}
                  onChange={() =>
                    setSelectedColors((prev) =>
                      prev.includes(color)
                        ? prev.filter((c) => c !== color)
                        : [...prev, color]
                    )
                  }
                />
                {color}
              </label>
            ))}
            <h3>Sizes</h3>
            {["men", "women", "kids"].map((group) => (
              <div key={group}>
                <h4>{group.charAt(0).toUpperCase() + group.slice(1)}</h4>
                {[
                  ...new Set(
                    products
                      .flatMap((p) => p.sizes?.[group] || [])
                      .map((s) => s.code)
                  ),
                ].map((sizeCode) => (
                  <label key={sizeCode}>
                    <input
                      type="checkbox"
                      checked={selectedSizes.includes(sizeCode)}
                      onChange={() => handleSizeChange(sizeCode)}
                    />
                    {sizeCode}
                  </label>
                ))}
              </div>
            ))}
          </div>
        )}

        <div className={styles.grid}>
          <ProductGrid items={filteredProducts} />
        </div>
      </div>
    </section>
  );
}
