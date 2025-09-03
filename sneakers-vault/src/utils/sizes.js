function normalizeSizes(sizes) {
    if (!sizes) return [];
    if (Array.isArray(sizes)) return sizes;
    if (typeof sizes === "object") {
        return Object.values(sizes).flatMap(v => Array.isArray(v) ? v : [v]);
    }
    return [];
}

export default normalizeSizes