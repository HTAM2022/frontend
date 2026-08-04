import { formatKes } from "@/lib/money"

type Props = {
  total: number
  items: { totalPriceKes: number; offerQuantity: number }[]
}

export function CartTotals({ total, items }: Props) {
  const totalQuantity = items.reduce((s, i) => s + i.offerQuantity, 0)

  return (
    <div className="space-y-2 py-4 border-t border-border">
      <div className="flex justify-between text-sm">
        <span className="text-bodyGray">
          {totalQuantity} {totalQuantity === 1 ? "باك" : "باكات"}
        </span>
        <span className="text-bodyGray">{formatKes(total)}</span>
      </div>
      <div className="flex justify-between items-center pt-1">
        <span className="font-cairo font-bold text-ink text-base">المجموع</span>
        <span className="font-cairo font-bold text-ink text-xl">{formatKes(total)}</span>
      </div>
      <p className="text-xs text-bodyGray">الدفع عند التوصيل. بلا خلاص من قبل.</p>
    </div>
  )
}
