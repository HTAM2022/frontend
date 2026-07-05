"use client"

import { Plus, Zap, Sun, Battery } from "lucide-react"
import { useCartStore } from "@/store/cart-store"
import { formatKes } from "@/lib/money"
import { addToCartId } from "@/lib/event-id"
import { trackAddToCart } from "@/lib/tracking"

type Props = {
  productId: string
  slug: string
  name: string
  shortHeadline: string
  benefit: string
  priceKes: number
}

const ICONS: Record<string, React.FC<{ size?: number; className?: string }>> = {
  lamp: Zap,
  solar: Sun,
  powerstation: Battery,
}

export function CrossSellCard({ productId, slug, name, shortHeadline, benefit, priceKes }: Props) {
  const addItem = useCartStore((s) => s.addItem)

  const Icon = ICONS[productId] ?? Zap

  function handleAdd() {
    const eventId = addToCartId(slug)
    trackAddToCart(productId, name, priceKes, eventId)
    addItem({
      productId,
      slug,
      name,
      quantity: 1,
      offerQuantity: 1,
      unitBundlePriceKes: priceKes,
      totalPriceKes: priceKes,
      source: "cart_cross_sell",
      eventIds: { addToCart: eventId },
    })
  }

  return (
    <div className="flex items-center gap-3 py-3 border-b border-border last:border-b-0">
      {/* Icon placeholder */}
      <div className="shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-emerald to-softMint flex items-center justify-center">
        <Icon size={20} className="text-white" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-semibold text-ink text-sm leading-snug">{shortHeadline}</p>
        <p className="text-xs text-bodyGray mt-0.5 line-clamp-1">{benefit}</p>
        <p className="text-xs font-semibold text-emerald mt-1">{formatKes(priceKes)}</p>
      </div>

      <button
        onClick={handleAdd}
        className="shrink-0 flex items-center gap-1 bg-emerald text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-deepEmerald transition-colors"
        aria-label={`Add ${name} to order`}
      >
        <Plus size={13} />
        Add
      </button>
    </div>
  )
}
