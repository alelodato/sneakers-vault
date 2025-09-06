export const hasDiscount = (p) => Number(p?.discount) > 0;

export const discountedPrice = (p) =>
  hasDiscount(p) ? Number((p.price * (1 - Number(p.discount) / 100)).toFixed(2)) : p.price;
