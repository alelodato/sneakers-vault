import { useParams, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { products } from "../data/products";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishListContext";
import normalizeSizes from "../utils/sizes";
import SizePicker from "../components/SizePicker";
import { hasDiscount, discountedPrice } from "../utils/priceUtils";

const LABELS = { men: "Men", women: "Women", kids: "Kids" };

export default function ProductPage() {
  const { slug } = useParams();
  const p = products.find((x) => x.slug === slug);

  const sizes = normalizeSizes(p?.sizes);
  const needSize = sizes.length > 0;

  const { add: addToCart } = useCart();
  const { has, toggle } = useWishlist();

  const [size, setSize] = useState(null);
  const [msg, setMsg] = useState("");
  const msgTimerRef = useRef(null);

  useEffect(() => () => clearTimeout(msgTimerRef.current), []);

  if (!p) {
    return (
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl">Prodotto non trovato</h2>
          <Link to="/shop" className="mt-4 inline-block underline">Torna al negozio</Link>
        </div>
      </section>
    );
  }

  const groups = ["men", "women", "kids"].filter(
    (g) => Array.isArray(p.sizes?.[g]) && p.sizes[g].length > 0
  );

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (needSize && !size) {
      setMsg("Choose a size");
      clearTimeout(msgTimerRef.current);
      msgTimerRef.current = setTimeout(() => setMsg(""), 1600);
      return;
    }
    addToCart(p, 1, size || null);
    setMsg("Item added to cart");
    clearTimeout(msgTimerRef.current);
    msgTimerRef.current = setTimeout(() => setMsg(""), 1600);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    toggle(p);
  };

  return (
    <section className="py-8 md:py-12 bg-ui-bg">
      <div className="mx-auto max-w-7xl px-4">
        {/* BREADCRUMB */}
        <nav className="mb-4 text-sm text-ui-muted">
          <Link to="/shop" className="hover:underline">Shop</Link>
          <span className="mx-2">/</span>
          <span className="opacity-80">{p.title}</span>
        </nav>

        {/* GRID 5/7 — niente card gigante */}
        <div className="grid gap-8 md:grid-cols-12 items-start">
          {/* IMAGE SIDE (5) */}
          <div className="md:col-span-5">
            <div className="rounded-xl border border-ui-border bg-white shadow-sm overflow-hidden">
              <div className="aspect-square">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* INFO SIDE (7) */}
          <div className="md:col-span-7">
            <h1 className="font-heading text-2xl md:text-3xl text-white mb-2">
              {p.title}
            </h1>

            {/* Prezzo */}
            <div className="mb-4 flex items-baseline gap-3">
              {hasDiscount(p) ? (
                <>
                  <span className="text-xl font-semibold text-brand-200 line-through/70">
                    €{p.price}
                  </span>
                  <span className="text-2xl font-bold text-brand-100">
                    €{discountedPrice(p)}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold text-brand-100">€{p.price}</span>
              )}
            </div>

            {/* SIZE PICKER */}
            {groups.map((g) => (
              <div key={g} className="mb-4">
                <div className="mb-2 text-sm font-medium text-white/80">{LABELS[g]}</div>
                <SizePicker
                  sizes={p.sizes[g]}
                  value={size?.group === g ? size.code : null}
                  onChange={(code) => setSize({ group: g, code })}
                />
              </div>
            ))}

            {/* ACTIONS */}
            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={needSize && !size}
                className={`inline-flex h-11 items-center justify-center rounded-full px-6 font-medium transition
                  ${needSize && !size
                    ? "bg-ui-ink/20 text-white/40 cursor-not-allowed"
                    : "bg-brand-500 hover:bg-brand-600 text-[#0b111b]"}`
                }
              >
                Add to cart
              </button>

              <button
                type="button"
                onClick={handleWishlist}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ui-border/60 bg-white hover:bg-slate-50 transition"
                aria-label="Add to wishlist"
                title="Add to wishlist"
              >
                <i
                  className={`fa-solid fa-heart text-[18px] ${has(p.id) ? "text-brand-800" : "text-slate-800"}`}
                />
              </button>
            </div>

            {msg && (
              <div className="mt-3 text-sm text-white/80" role="status" aria-live="polite">
                {msg}
              </div>
            )}

            {/* META */}
            <div className="mt-8 text-sm text-white/70">
              {p.tags?.length > 0 && (
                <p>
                  Categorie:{" "}
                  {p.tags.map((t, i) => (
                    <span key={t}>
                      <Link to={`/shop?tag=${t}`} className="underline hover:no-underline">{t}</Link>
                      {i < p.tags.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
