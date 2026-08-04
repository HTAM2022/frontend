import { formatKes } from "@/lib/money"

const SINGLE_PIECE_PRICE_MAD = 299

type Props = {
  total: number
  items: { totalPriceKes: number; offerQuantity: number }[]
}

export function CartTotals({ total, items }: Props) {
  const totalQuantity = items.reduce((s, i) => s + i.offerQuantity, 0)
  const fullPrice = items.reduce((s, i) => s + i.offerQuantity * SINGLE_PIECE_PRICE_MAD, 0)
  const savings = fullPrice - total

  return (
    <div className="space-y-2 py-4 border-t border-border">
      {savings > 0 && (
        <div className="flex justify-between text-sm">
          <span className="text-bodyGray">
            Prix unitaire ({totalQuantity} {totalQuantity === 1 ? "pièce" : "pièces"})
          </span>
          <span className="text-bodyGray line-through">{formatKes(fullPrice)}</span>
        </div>
      )}
      {savings > 0 && (
        <div className="flex justify-between text-sm">
          <span className="text-emerald font-medium">Économies pack</span>
          <span className="text-emerald font-semibold">-{formatKes(savings)}</span>
        </div>
      )}
      <div className="flex justify-between items-center pt-1">
        <span className="font-sora font-bold text-ink text-base">Total</span>
        <span className="font-sora font-bold text-ink text-xl">{formatKes(total)}</span>
      </div>
      <p className="text-xs text-bodyGray">Paiement à la livraison. Aucun paiement à l’avance.</p>
    </div>
  )
}
