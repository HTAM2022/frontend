"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Phone, Package, Loader2, AlertCircle } from "lucide-react"
import { getOrder } from "@/lib/api"
import { formatKes } from "@/lib/money"
import { SITE } from "@/data/site"
import { FREE_GIFT } from "@/data/free-gift"
import type { OrderResponse } from "@/types/commerce"

function ThankYouContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("order")
  const [order, setOrder] = useState<OrderResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!orderId) {
      setLoading(false)
      setError("Aucun numéro de commande trouvé.")
      return
    }
    ;(getOrder(orderId) as Promise<OrderResponse>)
      .then((o) => setOrder(o))
      .catch((err) => setError(err instanceof Error ? err.message : "Commande introuvable."))
      .finally(() => setLoading(false))
  }, [orderId])

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-[#4B5563]">
          <Loader2 size={32} className="animate-spin text-[#0F5C4A]" />
          <p className="text-sm">Chargement de votre commande…</p>
        </div>
      </div>
    )
  }

  if (error || !order) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <AlertCircle size={40} className="text-[#F5B84B] mx-auto mb-4" />
          <h1 className="font-bold text-[#111827] text-2xl mb-2">Commande introuvable</h1>
          <p className="text-[#4B5563] text-sm mb-6">
            {error ?? "Nous n'avons pas trouvé votre commande. Veuillez contacter le support."}
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/collections"
              className="block w-full bg-[#0F5C4A] text-white font-bold text-base py-4 rounded-xl hover:bg-[#073B31] transition-colors text-center"
            >
              Continuer les achats
            </Link>
            <a
              href={`mailto:${SITE.supportEmail}`}
              className="block w-full text-center border border-[#E5E7EB] text-[#4B5563] font-medium py-4 rounded-xl hover:bg-[#E8F4EF] transition-colors text-sm"
            >
              Contacter le support
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Confirmation header */}
      <section className="bg-gradient-to-b from-[#E8F4EF] to-white py-14 border-b border-[#E5E7EB]">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-[#0F5C4A]/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={36} className="text-[#0F5C4A]" />
          </div>
          <h1 className="font-bold text-[#111827] text-3xl mb-2">
            Votre commande RafaTools a bien été reçue
          </h1>
          <p className="text-[#4B5563] text-base">
            Merci, <span className="font-semibold text-[#111827]">{order.customer.name}</span>.
            Notre équipe vous appellera pour confirmer votre commande avant l'expédition.
          </p>
          <div className="inline-block mt-4 bg-white border border-[#E5E7EB] rounded-xl px-5 py-2">
            <span className="text-xs text-[#4B5563]">N° de commande : </span>
            <span className="font-mono font-semibold text-[#111827] text-sm">
              {order.public_order_id}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-xl mx-auto px-4 space-y-6">
          {/* Order summary */}
          <div className="bg-[#E8F4EF]/50 rounded-xl border border-[#0F5C4A]/20 p-5">
            <h2 className="font-semibold text-[#111827] text-base mb-4">Récapitulatif</h2>
            <div className="space-y-2 mb-4">
              {order.items.map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-[#111827]">
                    {item.product_name}{" "}
                    <span className="text-[#4B5563]">×{item.quantity}</span>
                  </span>
                  <span className="font-semibold text-[#111827]">
                    {formatKes(item.line_total_kes)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-[#0F5C4A]/20 pt-3 flex justify-between">
              <span className="font-bold text-[#111827]">Total</span>
              <span className="font-bold text-[#0F5C4A]">{formatKes(order.total_kes)}</span>
            </div>
          </div>

          {/* Free gift confirmation (if 4+ pieces total) */}
          {order.items.reduce((sum, i) => sum + i.quantity, 0) >= FREE_GIFT.minPieces && (
            <div className="bg-cream border-2 border-warmGold rounded-xl p-5 shadow-sm">
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
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-warmGold uppercase tracking-wide mb-1">
                    🎁 Cadeau inclus
                  </p>
                  <p className="font-semibold text-[#111827] text-sm">{FREE_GIFT.name}</p>
                  <p className="text-xs text-[#4B5563] mt-0.5">{FREE_GIFT.tagline}</p>
                  <p className="text-xs text-warmGold font-semibold mt-1">
                    Valeur {FREE_GIFT.valueKes.toLocaleString("fr-MA")} DH — emballé avec votre commande
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Customer details */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 space-y-3">
            <h2 className="font-semibold text-[#111827] text-base">Vos coordonnées</h2>
            <div className="flex justify-between text-sm">
              <span className="text-[#4B5563]">Nom</span>
              <span className="font-medium text-[#111827]">{order.customer.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#4B5563]">Téléphone</span>
              <span className="font-medium text-[#111827]">{order.customer.phone_e164}</span>
            </div>
          </div>

          {/* Trust/confirmation copy */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 space-y-4">
            <h2 className="font-semibold text-[#111827] text-base">Prochaines étapes</h2>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E8F4EF] flex items-center justify-center shrink-0">
                <Phone size={15} className="text-[#0F5C4A]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#111827]">Appel de confirmation</p>
                <p className="text-xs text-[#4B5563] mt-0.5">
                  Notre équipe vous appellera pour confirmer les détails de votre commande avant
                  l'expédition. Gardez votre téléphone disponible.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E8F4EF] flex items-center justify-center shrink-0">
                <Package size={15} className="text-[#0F5C4A]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#111827]">Expédition et livraison</p>
                <p className="text-xs text-[#4B5563] mt-0.5">
                  Une fois confirmée, nous expédions votre commande. Vous payez uniquement à la
                  livraison. Aucun paiement requis maintenant.
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <Link
              href="/collections"
              className="block w-full bg-[#0F5C4A] text-white font-bold text-base py-4 rounded-xl hover:bg-[#073B31] transition-colors text-center"
            >
              Continuer les achats
            </Link>
            <a
              href={`mailto:${SITE.supportEmail}`}
              className="block w-full text-center border border-[#E5E7EB] text-[#4B5563] font-medium py-4 rounded-xl hover:bg-[#E8F4EF] transition-colors text-sm"
            >
              Support — {SITE.supportEmail}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader2 size={32} className="animate-spin text-[#0F5C4A]" />
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  )
}
