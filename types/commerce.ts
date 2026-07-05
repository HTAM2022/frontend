export type Product = {
  id: string
  slug: string
  swahiliName: string
  englishName: string
  shortHeadline: string
  cardSubheading: string
  primaryEmotion: string
  basePriceKes: number
  images: string[]
  specs: { label: string; value: string }[]
  bundleLabels: Record<1 | 2 | 3, string>
  crossSellPriority: string[]
  defaultOfferQuantity: 1 | 2 | 3
  benefits: string[]
  useCases: { icon: string; label: string; text: string }[]
  faqs: { q: string; a: string }[]
}

export type CartItem = {
  cartItemId: string
  productId: string
  slug: string
  name: string
  quantity: number
  offerQuantity: 1 | 2 | 3
  unitBundlePriceKes: number
  totalPriceKes: number
  source: "product_page" | "cart_cross_sell" | "upsell"
  addedAt: string
  eventIds: { addToCart: string }
}

export type Attribution = {
  utmSource: string
  utmMedium: string
  utmCampaign: string
  utmContent: string
  utmTerm: string
  fbclid: string
  ttclid: string
  scCid: string
  landingPageUrl: string
  referrer: string
  firstSeenAt: string
}

export type OrderResponse = {
  public_order_id: string
  status: string
  currency: string
  total_kes: number
  customer: { name: string; phone_e164: string }
  items: { product_slug: string; product_name: string; quantity: number; line_total_kes: number }[]
  recommended_upsell?: { product_slug: string; product_name: string; price_kes: number } | null
}
