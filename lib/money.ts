// Currency helpers for Morocco (MAD / Dirham).
// Function name kept as `formatKes` for backwards compatibility across the codebase.
export function formatMad(amount: number): string {
  return `${amount.toLocaleString("fr-MA")} DH`
}

// Backwards-compatible alias — outputs Moroccan Dirham.
export const formatKes = formatMad

export function perPiecePrice(total: number, qty: number): number {
  return Math.round(total / qty)
}
