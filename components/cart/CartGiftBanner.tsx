"use client"

import Image from "next/image"
import { Gift, Check } from "lucide-react"
import type { CartItem } from "@/types/commerce"
import {
  FREE_GIFT,
  computeTotalPieces,
  isGiftUnlocked,
  piecesNeededForGift,
} from "@/data/free-gift"

type Props = {
  items: CartItem[]
}

export function CartGiftBanner({ items }: Props) {
  const totalPieces = computeTotalPieces(items)
  const unlocked = isGiftUnlocked(items)
  const needed = piecesNeededForGift(items)
  const progressPct = Math.min(100, (totalPieces / FREE_GIFT.minPieces) * 100)

  if (unlocked) {
    return (
      <div className="mt-4 rounded-2xl border-2 border-warmGold bg-cream p-4 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="relative shrink-0 w-16 h-16 rounded-xl bg-white border border-warmGold/40 overflow-hidden">
            <Image
              src={FREE_GIFT.image}
              alt={FREE_GIFT.name}
              fill
              sizes="64px"
              className="object-contain p-1"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 mb-1">
              <Check size={14} className="text-emerald shrink-0" />
              <span className="text-xs font-bold text-emerald uppercase tracking-wide">
                Cadeau débloqué
              </span>
            </div>
            <p className="font-sora font-bold text-ink text-sm leading-tight">
              🎁 {FREE_GIFT.name}
            </p>
            <p className="text-xs text-bodyGray mt-0.5 line-clamp-2">
              {FREE_GIFT.tagline}
            </p>
            <p className="text-xs text-warmGold font-semibold mt-1">
              Ajouté à votre colis — valeur {FREE_GIFT.valueKes.toLocaleString("fr-MA")} DH
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-4 rounded-2xl border border-warmGold/40 bg-cream/70 p-4">
      <div className="flex items-start gap-3">
        <div className="relative shrink-0 w-16 h-16 rounded-xl bg-white border border-warmGold/30 overflow-hidden opacity-70">
          <Image
            src={FREE_GIFT.image}
            alt={FREE_GIFT.name}
            fill
            sizes="64px"
            className="object-contain p-1"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 mb-1">
            <Gift size={14} className="text-warmGold shrink-0" />
            <span className="text-xs font-bold text-warmGold uppercase tracking-wide">
              Débloquez le cadeau
            </span>
          </div>
          <p className="font-sora font-semibold text-ink text-sm leading-tight">
            Ajoutez {needed} pièce{needed === 1 ? "" : "s"} de plus pour recevoir {FREE_GIFT.name} GRATUIT
          </p>
          <p className="text-xs text-bodyGray mt-0.5">
            Valeur {FREE_GIFT.valueKes.toLocaleString("fr-MA")} DH — offert à partir de 4 pièces
          </p>
          <div className="mt-2 w-full h-1.5 bg-white/70 rounded-full overflow-hidden border border-warmGold/20">
            <div
              className="h-full bg-warmGold transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <p className="text-[10px] text-bodyGray mt-1 font-medium">
            {totalPieces} / {FREE_GIFT.minPieces} pièces
          </p>
        </div>
      </div>
    </div>
  )
}
