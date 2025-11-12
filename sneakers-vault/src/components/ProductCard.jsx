import { Link } from "react-router-dom";
import { useWishlist } from "../contexts/WishListContext";
import { hasDiscount, discountedPrice } from "../utils/priceUtils";

export default function ProductCard({ p }) {
  const { has, toggle } = useWishlist();
  if (!p) return null;

  const isFav = has(p.id);
  const isNew = p.tags?.includes("new");
  const onSale = p.tags?.includes("sale") || hasDiscount(p);

  const finalPrice = hasDiscount(p) ? discountedPrice(p) : p.price;
  const discountPct =
    hasDiscount(p) && p.price
      ? Math.round(((p.price - finalPrice) / p.price) * 100)
      : null;

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(p);
  };

  return (
    <article
      className="
        group relative h-full rounded-2xl border border-slate-200 bg-white
        shadow-sm hover:shadow-lg transition-shadow
        overflow-hidden flex flex-col
      "
    >
      {/* Media */}
      <Link to={`/product/${p.slug || p.id}`} className="block">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50">
          {/* main image */}
          <img
            src={p.image}
            alt={p.title}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            loading="lazy"
          />
          {/* hover image (fallback to the same) */}
          <img
            src={p.hoverImage || p.image}
            alt={`${p.title} alt`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            loading="lazy"
          />

          {/* Top-left badges */}
          <div className="absolute left-3 top-3 flex gap-2">
            {onSale && (
              <span className="rounded-full bg-red-600/90 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
                {discountPct ? `-${discountPct}%` : "SALE"}
              </span>
            )}
            {isNew && (
              <span className="rounded-full bg-emerald-600/90 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
                NEW
              </span>
            )}
          </div>

          {/* Wishlist button */}
          <button
            onClick={handleWishlist}
            aria-label={isFav ? "Remove from wishlist" : "Add to wishlist"}
            title={isFav ? "Remove from wishlist" : "Add to wishlist"}
            className="
              absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full
              bg-white/90 text-slate-800 shadow ring-1 ring-slate-200
              hover:bg-white hover:scale-105 transition
            "
          >
            <i className={`fa-solid fa-heart ${isFav ? "text-rose-600" : "text-slate-400"}`} />
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        {/* Brand + title */}
        <div className="min-h-[2.5rem]">
          {p.brand && (
            <p className="text-[11px] uppercase tracking-wide text-slate-500">
              {p.brand}
            </p>
          )}
          <Link
            to={`/product/${p.slug || p.id}`}
            className="line-clamp-2 text-base font-semibold text-slate-900 hover:underline"
          >
            {p.title}
          </Link>
        </div>

        {/* Colors preview (se disponibili) */}
        {Array.isArray(p.colors) && p.colors.length > 0 && (
          <div className="mt-1 flex flex-wrap items-center gap-1.5">
            {p.colors.slice(0, 4).map((c) => (
              <span
                key={c}
                title={c}
                className="h-4 w-4 rounded-full ring-1 ring-slate-200"
                style={{ background: c }}
              />
            ))}
            {p.colors.length > 4 && (
              <span className="ml-1 text-xs text-slate-500">
                +{p.colors.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="mt-auto flex items-baseline gap-2">
          {hasDiscount(p) ? (
            <>
              <span className="text-sm text-slate-400 line-through">
                €{Number(p.price).toLocaleString("it-IT")}
              </span>
              <span className="text-lg font-bold text-slate-900">
                €{Number(finalPrice).toLocaleString("it-IT")}
              </span>
            </>
          ) : (
            <span className="text-lg font-bold text-slate-900">
              €{Number(finalPrice).toLocaleString("it-IT")}
            </span>
          )}
        </div>

        {/* CTA row */}
        <div className="mt-3 flex gap-2">
          <Link
            to={`/product/${p.slug || p.id}`}
            className="
              inline-flex flex-1 items-center justify-center rounded-lg
              border border-slate-300 bg-white px-3 py-2 text-sm font-medium
              text-slate-900 hover:bg-slate-50
            "
          >
            Dettagli
          </Link>
          <button
            type="button"
            onClick={handleWishlist}
            className="
              hidden md:inline-flex items-center justify-center rounded-lg
              bg-slate-900 px-3 py-2 text-sm font-semibold text-white
              hover:bg-black
            "
          >
            {isFav ? "Saved" : "Wishlist"}
          </button>
        </div>
      </div>
    </article>
  );
}
