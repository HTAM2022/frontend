// Free gift disabled for tool packs (already high AOV).
// Kept as no-op stubs so existing UI code compiles without changes.

export const FREE_GIFT = {
  name: "",
  tagline: "",
  image: "/images/products/gift-camping-lamp.png",
  valueKes: 0,
  minPieces: 999,
} as const

export function computeTotalPieces(items: { offerQuantity: number }[]): number {
  return items.reduce((sum, i) => sum + (i.offerQuantity ?? 1), 0)
}

export function isGiftUnlocked(_items: { offerQuantity: number }[]): boolean {
  return false
}

export function piecesNeededForGift(_items: { offerQuantity: number }[]): number {
  return FREE_GIFT.minPieces
}
