import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import ProductGrid from "../components/ProductGrid";

// ---- Costanti base ----
const TAG_OPTIONS = ["men", "women", "kids", "sale", "new"];
const TAG_LABELS = {
  men: "Men",
  women: "Women",
  kids: "Kids",
  sale: "On sale",
  new: "New arrivals",
};

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Query (ricerca per titolo)
  const qParam = (searchParams.get("q") ?? "").toLowerCase();

  // Prefill da URL per tag e brand
  const paramTags = (searchParams.get("tag") ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const paramBrands = (searchParams.get("brand") ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  // --- UI state ---
  const [showFilters, setShowFilters] = useState(false); // drawer mobile

  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  // Evita di sovrascrivere scelte utente quando sincronizzi da URL
  const tagsTouchedRef = useRef(false);
  const brandsTouchedRef = useRef(false);

  const hasActiveFilters =
    selectedTags.length > 0 ||
    selectedBrands.length > 0 ||
    selectedColors.length > 0 ||
    selectedSizes.length > 0 ||
    !!searchParams.get("tag") ||
    !!searchParams.get("brand") ||
    !!searchParams.get("color") ||
    !!searchParams.get("size");

  // Opzioni dinamiche
  const brands = useMemo(
    () => [...new Set(products.map((p) => p.brand).filter(Boolean))].sort(),
    []
  );

  const colors = useMemo(
    () => [...new Set(products.flatMap((p) => p.colors || []))].sort(),
    []
  );

  const sizeCodesByGroup = useMemo(() => {
    const groups = ["men", "women", "kids"];
    const out = {};
    groups.forEach((g) => {
      out[g] = [
        ...new Set(
          products
            .flatMap((p) => p.sizes?.[g] || [])
            .map((s) => s.code)
        ),
      ];
    });
    return out;
  }, []);

  // --- Handlers ---
  const toggleFilterDrawer = () => setShowFilters((v) => !v);

  const handleTagChange = (tag) => {
    tagsTouchedRef.current = true;
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleBrandChange = (brand) => {
    brandsTouchedRef.current = true;
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleSizeChange = (code) => {
    setSelectedSizes((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  const clearAll = () => {
    setSelectedTags([]);
    setSelectedBrands([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    tagsTouchedRef.current = false;
    brandsTouchedRef.current = false;
    setSearchParams((prev) => {
      const p = new URLSearchParams(prev);
      p.delete("tag");
      p.delete("brand");
      p.delete("color");
      p.delete("size");
      return p;
    });
  };

  // --- FILTER ---
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

  // --- URL -> STATE (solo se non toccato a mano) ---
  useEffect(() => {
    if (!tagsTouchedRef.current) {
      setSelectedTags((prev) => {
        const same =
          prev.length === paramTags.length &&
          prev.every((t) => paramTags.includes(t));
        return same ? prev : paramTags;
      });
    }
    if (!brandsTouchedRef.current) {
      setSelectedBrands((prev) => {
        const same =
          prev.length === paramBrands.length &&
          prev.every((b) => paramBrands.includes(b));
        return same ? prev : paramBrands;
      });
    }
  }, [paramTags, paramBrands]);

  // --- STATE -> URL ---
  useEffect(() => {
    setSearchParams((prev) => {
      const p = new URLSearchParams(prev);
      if (selectedTags.length) p.set("tag", selectedTags.join(","));
      else p.delete("tag");
      if (selectedBrands.length) p.set("brand", selectedBrands.join(","));
      else p.delete("brand");
      if (selectedColors.length) p.set("color", selectedColors.join(","));
      else p.delete("color");
      if (selectedSizes.length) p.set("size", selectedSizes.join(","));
      else p.delete("size");
      return p;
    });
  }, [selectedTags, selectedBrands, selectedColors, selectedSizes, setSearchParams]);

  // --- componenti interni (accordion voce filtro) ---
  const Section = ({ title, children }) => (
    <details className="group rounded-xl border border-slate-200 bg-white open:shadow-sm">
      <summary className="flex cursor-pointer items-center justify-between px-4 py-3">
        <span className="font-medium text-slate-900">{title}</span>
        <svg
          className="h-4 w-4 transition-transform group-open:rotate-180"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
        </svg>
      </summary>
      <div className="px-4 pb-4">{children}</div>
    </details>
  );

  // ---- UI ----
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Header/cover pulito */}
      <section className="bg-gradient-to-b from-slate-100 to-transparent">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            {/* Bottone filtri per mobile */}
            <button
              onClick={toggleFilterDrawer}
              className="inline-flex lg:hidden items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
              aria-label="Apri filtri"
            >
              <i className="fa fa-filter" />
              Filtri
              {hasActiveFilters ? (
                <span className="ml-1 rounded-md bg-slate-900 px-1.5 py-0.5 text-xs font-semibold text-white">
                  •
                </span>
              ) : null}
            </button>

            <h1 className="font-heading text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Shop
            </h1>
          </div>
          {hasActiveFilters && (
            <button
              onClick={clearAll}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100"
            >
              Pulisci tutto
            </button>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Sidebar filtri (desktop) */}
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold tracking-wide text-slate-700">
                  FILTRI
                </h2>
                {hasActiveFilters && (
                  <button
                    onClick={clearAll}
                    className="text-xs font-medium text-slate-600 hover:text-slate-900"
                  >
                    Pulisci
                  </button>
                )}
              </div>

              <Section title="Item Type">
                <div className="space-y-2">
                  {TAG_OPTIONS.map((tag) => (
                    <label key={tag} className="flex items-center gap-2 text-sm text-slate-700">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                        checked={selectedTags.includes(tag)}
                        onChange={() => handleTagChange(tag)}
                      />
                      {TAG_LABELS[tag]}
                    </label>
                  ))}
                </div>
              </Section>

              <Section title="Brand">
                <div className="grid grid-cols-2 gap-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center gap-2 text-sm text-slate-700">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                      />
                      {brand}
                    </label>
                  ))}
                </div>
              </Section>

              <Section title="Colori">
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => {
                    const active = selectedColors.includes(color);
                    return (
                      <button
                        key={color}
                        type="button"
                        onClick={() => handleColorChange(color)}
                        className={`rounded-full border px-3 py-1 text-xs ${
                          active
                            ? "border-slate-900 bg-slate-900 text-white"
                            : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                        }`}
                        title={color}
                      >
                        {color}
                      </button>
                    );
                  })}
                </div>
              </Section>

              <Section title="Taglie">
                <div className="space-y-3">
                  {["men", "women", "kids"].map((group) => (
                    <div key={group}>
                      <h4 className="mb-2 text-xs font-semibold uppercase text-slate-500">
                        {group}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {sizeCodesByGroup[group].map((code) => {
                          const active = selectedSizes.includes(code);
                          return (
                            <button
                              key={code}
                              type="button"
                              onClick={() => handleSizeChange(code)}
                              className={`rounded-md border px-2.5 py-1 text-xs ${
                                active
                                  ? "border-slate-900 bg-slate-900 text-white"
                                  : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                              }`}
                              title={`Size ${code}`}
                            >
                              {code}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            </div>
          </aside>

          {/* Drawer filtri (mobile) */}
          {showFilters && (
            <div
              className="fixed inset-0 z-50 lg:hidden"
              role="dialog"
              aria-modal="true"
            >
              <div
                className="absolute inset-0 bg-black/40"
                onClick={toggleFilterDrawer}
              />
              <div className="absolute inset-y-0 left-0 w-[85%] max-w-sm bg-white p-4 shadow-xl">
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700">
                    FILTRI
                  </h2>
                  <button
                    onClick={toggleFilterDrawer}
                    className="rounded-md p-2 text-slate-500 hover:bg-slate-100"
                    aria-label="Chiudi filtri"
                  >
                    <i className="fa-solid fa-x" />
                  </button>
                </div>

                <div className="space-y-4 overflow-y-auto pb-8">
                  <Section title="Item Type">
                    <div className="space-y-2">
                      {TAG_OPTIONS.map((tag) => (
                        <label key={tag} className="flex items-center gap-2 text-sm text-slate-700">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                            checked={selectedTags.includes(tag)}
                            onChange={() => handleTagChange(tag)}
                          />
                          {TAG_LABELS[tag]}
                        </label>
                      ))}
                    </div>
                  </Section>

                  <Section title="Brand">
                    <div className="grid grid-cols-2 gap-2">
                      {brands.map((brand) => (
                        <label key={brand} className="flex items-center gap-2 text-sm text-slate-700">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleBrandChange(brand)}
                          />
                          {brand}
                        </label>
                      ))}
                    </div>
                  </Section>

                  <Section title="Colori">
                    <div className="flex flex-wrap gap-2">
                      {colors.map((color) => {
                        const active = selectedColors.includes(color);
                        return (
                          <button
                            key={color}
                            type="button"
                            onClick={() => handleColorChange(color)}
                            className={`rounded-full border px-3 py-1 text-xs ${
                              active
                                ? "border-slate-900 bg-slate-900 text-white"
                                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                            }`}
                            title={color}
                          >
                            {color}
                          </button>
                        );
                      })}
                    </div>
                  </Section>

                  <Section title="Taglie">
                    <div className="space-y-3">
                      {["men", "women", "kids"].map((group) => (
                        <div key={group}>
                          <h4 className="mb-2 text-xs font-semibold uppercase text-slate-500">
                            {group}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {sizeCodesByGroup[group].map((code) => {
                              const active = selectedSizes.includes(code);
                              return (
                                <button
                                  key={code}
                                  type="button"
                                  onClick={() => handleSizeChange(code)}
                                  className={`rounded-md border px-2.5 py-1 text-xs ${
                                    active
                                      ? "border-slate-900 bg-slate-900 text-white"
                                      : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                                  }`}
                                  title={`Size ${code}`}
                                >
                                  {code}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Section>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={clearAll}
                    disabled={!hasActiveFilters}
                    className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-600 disabled:opacity-40"
                  >
                    Pulisci tutto
                  </button>
                  <button
                    onClick={toggleFilterDrawer}
                    className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
                  >
                    Mostra risultati
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Lista prodotti */}
          <div className="lg:col-span-9">
            {/* Contatore risultati */}
            <div className="mb-4 text-sm text-slate-600">
              {filteredProducts.length} prodotti
              {hasActiveFilters ? " — filtri attivi" : ""}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-3 sm:p-4">
              <ProductGrid items={filteredProducts} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
