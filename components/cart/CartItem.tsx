"use client"

import { X } from "lucide-react"
import { useCartStore } from "@/store/cart-store"
import { formatKes } from "@/lib/money"

type Props = {
  cartItemId: string
  name: string
  offerQuantity: number
  totalPriceKes: number
  bundleLabel?: string
}

export function CartItemRow({ cartItemId, name, offerQuantity, totalPriceKes, bundleLabel }: Props) {
  const removeItem = useCartStore((s) => s.removeItem)

  return (
    <div className="flex items-start gap-3 py-3">
      <div className="shrink-0 w-10 h-10 rounded-lg bg-softMint flex items-center justify-center">
        <span className="font-cairo font-bold text-emerald text-base leading-none">{offerQuantity}</span>
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-medium text-ink text-sm leading-snug truncate">{name}</p>
        {bundleLabel && <p className="text-xs text-bodyGray mt-0.5">{bundleLabel}</p>}
        <p className="text-xs text-bodyGray mt-0.5">
          {offerQuantity} {offerQuantity === 1 ? "باك" : "باكات"}
        </p>
      </div>

      <div className="flex flex-col items-end gap-1 shrink-0">
        <span className="font-semibold text-ink text-sm">{formatKes(totalPriceKes)}</span>
        <button
          onClick={() => removeItem(cartItemId)}
          className="text-bodyGray hover:text-red-500 transition-colors"
          aria-label="حذف المنتج"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  )
}
