"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import * as Dialog from "@radix-ui/react-dialog"
import { X, Zap, Loader2 } from "lucide-react"
import { useCheckoutStore } from "@/store/checkout-store"
import { submitUpsell } from "@/lib/api"
import { formatKes } from "@/lib/money"

const COUNTDOWN_SECONDS = 15

export function UpsellModal() {
  const router = useRouter()
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS)
  const [isProcessing, setIsProcessing] = useState(false)
  const [actionTaken, setActionTaken] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const isOpen = useCheckoutStore((s) => s.isUpsellOpen)
  const closeUpsell = useCheckoutStore((s) => s.closeUpsell)
  const currentOrderId = useCheckoutStore((s) => s.currentOrderId)
  const upsellProduct = useCheckoutStore((s) => s.upsellProduct)

  function clearTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  useEffect(() => {
    if (!isOpen) {
      clearTimer()
      setSecondsLeft(COUNTDOWN_SECONDS)
      setActionTaken(false)
      return
    }

    timerRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearTimer()
          return 0
        }
        return s - 1
      })
    }, 1000)

    return clearTimer
  }, [isOpen])

  useEffect(() => {
    if (secondsLeft === 0 && !actionTaken && isOpen) {
      void handleSkip(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft])

  async function handleAccept() {
    if (!currentOrderId || isProcessing || actionTaken) return
    setActionTaken(true)
    clearTimer()
    setIsProcessing(true)
    try {
      await submitUpsell(currentOrderId, {
        product_slug: upsellProduct?.slug ?? "",
        accepted: true,
        event_ids: {
          meta_purchase: `upsell_${currentOrderId}_${crypto.randomUUID()}`,
          tiktok_complete_payment: `upsell_${currentOrderId}_${crypto.randomUUID()}`,
          snap_purchase: `upsell_${currentOrderId}_${crypto.randomUUID()}`,
        },
      })
    } catch {
      // best-effort
    } finally {
      setIsProcessing(false)
      closeUpsell()
      router.push(`/thank-you?order=${currentOrderId}`)
    }
  }

  async function handleSkip(fromTimer = false) {
    if (!currentOrderId || isProcessing) return
    if (!fromTimer && actionTaken) return
    if (!fromTimer) setActionTaken(true)
    clearTimer()
    setIsProcessing(true)
    try {
      await submitUpsell(currentOrderId, {
        product_slug: "",
        accepted: false,
        event_ids: {},
      })
    } catch {
      // best-effort
    } finally {
      setIsProcessing(false)
      closeUpsell()
      router.push(`/thank-you?order=${currentOrderId}`)
    }
  }

  const progressPercent = ((COUNTDOWN_SECONDS - secondsLeft) / COUNTDOWN_SECONDS) * 100

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open && !isProcessing) void handleSkip()
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-md bg-white rounded-2xl shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          {/* Progress bar */}
          <div className="h-1.5 bg-[#E5E7EB] rounded-t-2xl overflow-hidden">
            <div
              className="h-full bg-[#D99A29] transition-all duration-1000 ease-linear"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="p-6">
            {/* Timer badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 bg-[#D99A29]/10 text-[#D99A29] px-3 py-1.5 rounded-full">
                <Zap className="w-3.5 h-3.5" />
                <span className="text-sm font-bold">{secondsLeft}s remaining</span>
              </div>
              <button
                onClick={() => void handleSkip()}
                disabled={isProcessing}
                className="p-1.5 text-[#4B5563] hover:text-[#111827] transition-colors rounded-lg"
                aria-label="Skip upsell"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Product image placeholder */}
            <div className="w-full h-36 bg-[#E8F4EF] rounded-xl flex items-center justify-center mb-4">
              <div className="text-center">
                <Zap className="w-10 h-10 text-[#0F5C4A] opacity-30 mx-auto mb-1" />
                <span className="text-xs text-[#4B5563] opacity-70">
                  {upsellProduct?.name ?? "Add-on item"}
                </span>
              </div>
            </div>

            <Dialog.Title className="font-bold text-xl text-[#111827] mb-2 leading-tight">
              Add one more protection item before we confirm your delivery
            </Dialog.Title>

            <Dialog.Description className="text-sm text-[#4B5563] mb-4 leading-relaxed">
              Since your order is COD, you can add this to the same delivery now. No extra form.
              Our team will confirm everything by phone.
            </Dialog.Description>

            {upsellProduct && (
              <div className="bg-[#E8F4EF] rounded-xl p-3 mb-4">
                <p className="font-semibold text-[#111827] text-sm">{upsellProduct.name}</p>
                <p className="text-[#0F5C4A] font-bold mt-1">
                  {formatKes(upsellProduct.priceKes)} — one-time add-on price
                </p>
              </div>
            )}

            <div className="space-y-2">
              <button
                onClick={() => void handleAccept()}
                disabled={isProcessing || actionTaken}
                className="w-full bg-[#0F5C4A] text-white py-3.5 rounded-xl font-bold text-base hover:bg-[#073B31] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  `Yes, Add It For ${upsellProduct ? formatKes(upsellProduct.priceKes) : "KES 6,836"}`
                )}
              </button>

              <button
                onClick={() => void handleSkip()}
                disabled={isProcessing}
                className="w-full py-2.5 text-sm text-[#4B5563] hover:text-[#111827] transition-colors"
              >
                No thanks, continue to confirmation
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
