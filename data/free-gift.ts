export const FREE_GIFT = {
  name: "Lampe Camping Solaire + Ventilateur",
  tagline: "Lampe LED pliable solaire avec 4 ventilateurs, IP65, rechargeable USB",
  image: "/images/products/gift-camping-lamp.png",
  valueKes: 199,
  minPieces: 4,
} as const

export function computeTotalPieces(items: { offerQuantity: number }[]): number {
  return items.reduce((sum, i) => sum + (i.offerQuantity ?? 1), 0)
}

export function isGiftUnlocked(items: { offerQuantity: number }[]): boolean {
  return computeTotalPieces(items) >= FREE_GIFT.minPieces
}

export function piecesNeededForGift(items: { offerQuantity: number }[]): number {
  return Math.max(0, FREE_GIFT.minPieces - computeTotalPieces(items))
}
