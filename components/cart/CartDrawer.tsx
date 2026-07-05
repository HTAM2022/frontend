"use client"

import { useEffect, useRef } from "react"
import { X, ShoppingCart, ShieldCheck, Phone, Package } from "lucide-react"
import { useCartStore } from "@/store/cart-store"
import { useCheckoutStore } from "@/store/checkout-store"
import { getCrossSells, PRODUCTS } from "@/data/products"
import { CartItemRow } from "./CartItem"
import { CartTotals } from "./CartTotals"
import { CrossSellCard } from "./CrossSellCard"
import { CheckoutModal } from "@/components/checkout/CheckoutModal"
import { UpsellModal } from "@/components/checkout/UpsellModal"
import { initiateCheckoutId } from "@/lib/event-id"
import { trackInitiateCheckout } from "@/lib/tracking"

export function CartDrawer() {
  const items = useCartStore((s) => s.items)
  const isOpen = useCartStore((s) => s.isDrawerOpen)
  const closeDrawer = useCartStore((s) => s.closeDrawer)
  const total = useCartStore((s) => s.total)
  const openCheckout = useCheckoutStore((s) => s.openCheckout)
  const isCheckoutOpen = useCheckoutStore((s) => s.isCheckoutOpen)
  const isUpsellOpen = useCheckoutStore((s) => s.isUpsellOpen)
  const drawerRef = useRef<HTMLDivElement>(null)

  const cartProductIds = items.map((i) => i.productId)

  // Build cross-sells from all cart items, deduped
  const crossSellIds = new Set<string>()
  const crossSells: (typeof PRODUCTS)[number][] = []
  for (const item of items) {
    const suggests = getCrossSells(item.productId, cartProductIds)
    for (const p of suggests) {
      if (p && !crossSellIds.has(p.id)) {
        crossSellIds.add(p.id)
        crossSells.push(p)
      }
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  function handleCheckout() {
    const eventId = initiateCheckoutId()
    trackInitiateCheckout(total(), eventId)
    closeDrawer()
    openCheckout()
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm"
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed top-0 right-0 h-full z-50 bg-white flex flex-col transition-transform duration-300 ease-in-out w-full sm:w-[420px] shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border shrink-0">
          <div className="flex items-center gap-2">
            <ShoppingCart size={18} className="text-emerald" />
            <h2 className="font-sora font-bold text-ink text-base">Your Preparedness Cart</h2>
          </div>
          <button
            onClick={closeDrawer}
            className="p-2 rounded-lg hover:bg-softMint transition-colors text-bodyGray hover:text-ink"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-softMint flex items-center justify-center mb-4">
                <ShoppingCart size={28} className="text-emerald" />
              </div>
              <p className="font-sora font-semibold text-ink text-base mb-2">Your cart is empty</p>
              <p className="text-sm text-bodyGray max-w-[240px]">
                Choose a backup or security product to get started.
              </p>
            </div>
          ) : (
            <>
              {/* Cart items */}
              <div className="divide-y divide-border">
                {items.map((item) => {
                  const product = PRODUCTS.find((p) => p.id === item.productId)
                  const bundleLabel = product
                    ? product.bundleLabels[item.offerQuantity as 1 | 2 | 3]
                    : undefined
                  return (
                    <CartItemRow
                      key={item.cartItemId}
                      cartItemId={item.cartItemId}
                      name={item.name}
                      offerQuantity={item.offerQuantity}
                      totalPriceKes={item.totalPriceKes}
                      bundleLabel={bundleLabel}
                    />
                  )
                })}
              </div>

              {/* Cross-sells */}
              {crossSells.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs font-semibold text-bodyGray uppercase tracking-wider mb-1">
                    Complete your setup
                  </p>
                  <div>
                    {crossSells.map((p) => (
                      <CrossSellCard
                        key={p.id}
                        productId={p.id}
                        slug={p.slug}
                        name={p.englishName}
                        shortHeadline={p.shortHeadline}
                        benefit={p.benefits[0]}
                        priceKes={p.basePriceKes}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Totals */}
              <CartTotals total={total()} items={items} />
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="shrink-0 px-5 pb-6 pt-4 border-t border-border bg-white">
            <button
              onClick={handleCheckout}
              className="w-full bg-emerald text-white font-sora font-bold text-base py-4 rounded-xl hover:bg-deepEmerald transition-colors active:scale-[0.98]"
            >
              Continue To COD Checkout
            </button>

            {/* Trust badges */}
            <div className="flex items-center justify-between mt-4 gap-2">
              <div className="flex items-center gap-1.5 text-bodyGray">
                <ShieldCheck size={14} className="text-emerald shrink-0" />
                <span className="text-xs">COD</span>
              </div>
              <div className="flex items-center gap-1.5 text-bodyGray">
                <Phone size={14} className="text-emerald shrink-0" />
                <span className="text-xs">Phone Confirm</span>
              </div>
              <div className="flex items-center gap-1.5 text-bodyGray">
                <Package size={14} className="text-emerald shrink-0" />
                <span className="text-xs">Bundle Value</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {isCheckoutOpen && <CheckoutModal />}
      {isUpsellOpen && <UpsellModal />}
    </>
  )
}
