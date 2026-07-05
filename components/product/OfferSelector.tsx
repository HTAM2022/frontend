"use client"

import { Check } from "lucide-react"
import type { Product } from "@/types/commerce"
import { getOffersForProduct } from "@/data/offers"
import { formatKes } from "@/lib/money"
import { addToCartId } from "@/lib/event-id"
import { trackAddToCart } from "@/lib/tracking"
import { useCartStore } from "@/store/cart-store"
import { useOfferStore } from "@/store/offer-store"
import { cn } from "@/lib/utils"

interface OfferSelectorProps {
  product: Product
}

export function OfferSelector({ product }: OfferSelectorProps) {
  const selectedQty = useOfferStore((s) => s.getQuantity(product.id, product.defaultOfferQuantity))
  const setSelectedQty = useOfferStore((s) => s.setQuantity)
  const addItem = useCartStore((s) => s.addItem)
  const openDrawer = useCartStore((s) => s.openDrawer)

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
    openDrawer()
  }

  return (
    <div className="space-y-5 text-left">
      <p className="text-sm font-semibold text-charcoal">Choose your bundle:</p>

      {/* Offer cards */}
      <div className="space-y-3">
        {productOffers.map((offer) => {
          const isSelected = offer.quantity === selectedQty
          const bundleLabel =
            product.bundleLabels[offer.quantity as 1 | 2 | 3] ?? offer.label

          return (
            <button
              key={offer.quantity}
              onClick={() => setSelectedQty(product.id, offer.quantity as 1 | 2 | 3)}
              className={cn(
                "w-full text-left border rounded-2xl p-4 transition-all duration-200 relative overflow-hidden",
                isSelected
                  ? "border-emerald bg-softMint/60 ring-2 ring-emerald shadow-sm"
                  : "border-border bg-white hover:border-emerald/50 hover:bg-softMint/20",
              )}
              aria-pressed={isSelected}
            >
              {isSelected && (
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald" />
              )}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  {/* Radio indicator */}
                  <div
                    className={cn(
                      "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors",
                      isSelected ? "border-emerald bg-emerald" : "border-border",
                    )}
                  >
                    {isSelected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="font-bold text-sm text-ink">
                        {offer.label} — {bundleLabel}
                      </span>
                    </div>
                    <p className="text-xs text-bodyGray font-medium">
                      {formatKes(offer.perPieceKes)} per piece
                    </p>
                    {offer.savingsKes > 0 && (
                      <p className="text-xs font-bold text-emerald mt-1 bg-emerald/10 inline-block px-2 py-0.5 rounded-md">
                        Save {formatKes(offer.savingsKes)}
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-right flex-shrink-0 flex flex-col items-end">
                  <p className="font-bold text-ink text-lg leading-none mb-1.5">
                    {formatKes(offer.priceKes)}
                  </p>
                  <span
                    className={cn(
                      "text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider",
                      offer.badge === "Best Value"
                        ? "bg-emerald text-white"
                        : offer.badge === "Most Practical"
                          ? "bg-warmGold text-white"
                          : "bg-border text-bodyGray",
                    )}
                  >
                    {offer.badge}
                  </span>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* COD trust note */}
      <p className="text-xs text-bodyGray text-center">
        Pay ONLY when your order arrives. We confirm by phone before dispatch.
      </p>

      {/* CTA */}
      <div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-emerald text-white py-4 px-4 rounded-xl font-bold text-lg hover:bg-deepEmerald transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          Add Selected Offer — Pay On Delivery
        </button>
      </div>
    </div>
  )
}
