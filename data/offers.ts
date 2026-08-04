// Morocco DTC pricing in MAD. Field name `priceKes` kept for backwards compatibility
// across the codebase — it now represents Moroccan Dirham.
export const OFFERS = [
  { quantity: 1 as const, priceKes: 299, badge: "Découverte", label: "1 Pièce", savingsKes: 0 },
  { quantity: 2 as const, priceKes: 499, badge: "Le Plus Pratique", label: "2 Pièces", savingsKes: 99 },
  { quantity: 3 as const, priceKes: 699, badge: "Meilleure Offre", label: "3 Pièces", savingsKes: 198 },
] as const

export type Offer = (typeof OFFERS)[number]

export const OFFER_SAVINGS = {
  1: 0,
  2: 99,
  3: 198,
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
  return `${amount.toLocaleString("fr-MA")} DH`
}
