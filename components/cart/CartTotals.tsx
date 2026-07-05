import { formatKes } from "@/lib/money"

type Props = {
  total: number
  items: { totalPriceKes: number; offerQuantity: number }[]
}

export function CartTotals({ total, items }: Props) {
  const totalQuantity = items.reduce((s, i) => s + i.offerQuantity, 0)
  const fullPrice = items.reduce((s, i) => s + i.offerQuantity * 6836, 0)
  const savings = fullPrice - total

  return (
    <div className="space-y-2 py-4 border-t border-border">
      {savings > 0 && (
        <div className="flex justify-between text-sm">
          <span className="text-bodyGray">
            Full price ({totalQuantity} {totalQuantity === 1 ? "piece" : "pieces"})
          </span>
          <span className="text-bodyGray line-through">{formatKes(fullPrice)}</span>
        </div>
      )}
      {savings > 0 && (
        <div className="flex justify-between text-sm">
          <span className="text-emerald font-medium">Bundle savings</span>
          <span className="text-emerald font-semibold">-{formatKes(savings)}</span>
        </div>
      )}
      <div className="flex justify-between items-center pt-1">
        <span className="font-sora font-bold text-ink text-base">Total</span>
        <span className="font-sora font-bold text-ink text-xl">{formatKes(total)}</span>
      </div>
      <p className="text-xs text-bodyGray">You pay on delivery. No upfront payment.</p>
    </div>
  )
}
