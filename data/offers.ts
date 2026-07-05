export const OFFERS = [
  { quantity: 1 as const, priceKes: 6836, badge: "Starter", label: "1 Piece", savingsKes: 0 },
  { quantity: 2 as const, priceKes: 9584, badge: "Most Practical", label: "2 Pieces", savingsKes: 4088 },
  { quantity: 3 as const, priceKes: 11989, badge: "Best Value", label: "3 Pieces", savingsKes: 8519 },
] as const

export type Offer = (typeof OFFERS)[number]

export const OFFER_SAVINGS = {
  1: 0,
  2: 4088,
  3: 8519,
} as const

export function getOffersForProduct(_basePriceKes?: number) {
  return OFFERS.map((o) => ({
    ...o,
    perPieceKes: Math.round(o.priceKes / o.quantity),
  }))
}

export function getOffer(quantity: 1 | 2 | 3) {
  return OFFERS.find((o) => o.quantity === quantity) ?? OFFERS[0]
}

export function getPerPiecePrice(quantity: 1 | 2 | 3, total: number): number {
  return Math.round(total / quantity)
}

export function formatKes(amount: number): string {
  return `KES ${amount.toLocaleString("en-KE")}`
}
