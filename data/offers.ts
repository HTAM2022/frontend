// Morocco DTC pricing in MAD. Field name `priceKes` kept for backwards compatibility
// across the codebase — it now represents Moroccan Dirham.
//
// Per-product pricing for tool packs: since each pack has a different base price,
// we compute tier pricing dynamically from the product's base price using
// standard bundle multipliers (5% off at qty 2, 7% off at qty 3).

const TIER_MULTIPLIERS = {
  1: { multiplier: 1.0, badge: "1 باك", label: "1 باك" },
  2: { multiplier: 1.9, badge: "الأكثر طلبا", label: "2 باك (خصم 5%)" },
  3: { multiplier: 2.8, badge: "أحسن ثمن", label: "3 باكات (خصم 7%)" },
} as const

function roundToTen(n: number): number {
  return Math.round(n / 10) * 10
}

export type Offer = {
  quantity: 1 | 2 | 3
  priceKes: number
  badge: string
  label: string
  savingsKes: number
  perPieceKes: number
}

export function getOffersForProduct(basePriceMad: number = 990): Offer[] {
  return ([1, 2, 3] as const).map((q) => {
    const tier = TIER_MULTIPLIERS[q]
    const total = roundToTen(basePriceMad * tier.multiplier)
    const noDiscount = basePriceMad * q
    return {
      quantity: q,
      priceKes: total,
      perPieceKes: Math.round(total / q),
      badge: tier.badge,
      label: tier.label,
      savingsKes: Math.max(0, noDiscount - total),
    }
  })
}

// Backwards-compatibility: return the pack_dewalt_2 tiers by default.
export const OFFERS = getOffersForProduct(990)

export const OFFER_SAVINGS = {
  1: 0,
  2: OFFERS[1].savingsKes,
  3: OFFERS[2].savingsKes,
} as const

export function getOffer(quantity: 1 | 2 | 3, basePriceMad: number = 990): Offer {
  const offers = getOffersForProduct(basePriceMad)
  return offers.find((o) => o.quantity === quantity) ?? offers[0]
}

export function getPerPiecePrice(quantity: 1 | 2 | 3, total: number): number {
  return Math.round(total / quantity)
}

export function formatKes(amount: number): string {
  return `${amount.toLocaleString("fr-MA")} DH`
}
