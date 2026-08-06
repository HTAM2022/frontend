"use client"

import { ShoppingCart } from "lucide-react"
import type { Product } from "@/types/commerce"
import { getOffersForProduct } from "@/data/offers"
import { formatKes } from "@/lib/money"
import { addToCartId } from "@/lib/event-id"
import { trackAddToCart } from "@/lib/tracking"
import { useCartStore } from "@/store/cart-store"
import { useCheckoutStore } from "@/store/checkout-store"
import { useOfferStore } from "@/store/offer-store"

interface StickyMobileCtaProps {
  product: Product
}

export function StickyMobileCta({ product }: StickyMobileCtaProps) {
  const selectedQty = useOfferStore((s) => s.getQuantity(product.id, product.defaultOfferQuantity))
  const setSelectedQty = useOfferStore((s) => s.setQuantity)
  const addItem = useCartStore((s) => s.addItem)
  const openCheckout = useCheckoutStore((s) => s.openCheckout)

  const productOffers = getOffersForProduct(product.basePriceKes)
  const selectedOffer = productOffers.find((o) => o.quantity === selectedQty) ?? productOffers[0]

  function handleAddToCart() {
    const eventId = addToCartId(product.slug)
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.englishName,
      quantity: selectedOffer.quantity,
      offerQuantity: selectedOffer.quantity,
      unitBundlePriceKes: selectedOffer.priceKes,
      totalPriceKes: selectedOffer.priceKes,
      source: "product_page",
      eventIds: { addToCart: eventId },
    })
    trackAddToCart(product.id, product.englishName, selectedOffer.priceKes, eventId)
    openCheckout()
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-[#E5E7EB] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] p-3 md:hidden">
      <div className="flex items-center gap-2 mb-2">
        {productOffers.map((offer) => (
          <button
            key={offer.quantity}
            onClick={() => setSelectedQty(product.id, offer.quantity as 1 | 2 | 3)}
            aria-pressed={selectedQty === offer.quantity}
            className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-all ${
              selectedQty === offer.quantity
                ? "bg-[#0F5C4A] text-white border-[#0F5C4A]"
                : "bg-[#E8F4EF]/40 text-[#4B5563] border-[#E5E7EB]"
            }`}
          >
            {offer.quantity} باك
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <div>
          <p className="text-[10px] text-[#4B5563] font-bold uppercase tracking-wider leading-none mb-0.5">
            المجموع
          </p>
          <p className="font-bold text-[#111827] text-sm">{formatKes(selectedOffer.priceKes)}</p>
        </div>
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-[#0F5C4A] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#073B31] transition-colors flex items-center justify-center gap-2 shadow-md"
        >
          <ShoppingCart className="w-4 h-4" />
إشتري الآن — الدفع عند التوصيل
        </button>
      </div>
    </div>
  )
}
