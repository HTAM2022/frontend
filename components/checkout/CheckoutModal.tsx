"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import * as Dialog from "@radix-ui/react-dialog"
import { X, ShieldCheck, Loader2 } from "lucide-react"
import { useCartStore } from "@/store/cart-store"
import { useCheckoutStore } from "@/store/checkout-store"
import { useAttributionStore } from "@/store/attribution-store"
import { formatKes } from "@/lib/money"
import { normalizePhone, isValidKenyanPhone } from "@/lib/phone"
import { initiateCheckoutId, purchaseId } from "@/lib/event-id"
import { trackInitiateCheckout, trackPurchase } from "@/lib/tracking"
import { createOrder } from "@/lib/api"
import { PhoneField } from "./PhoneField"
import { WhatsAppCheckoutButton } from "./WhatsAppCheckoutButton"
import type { OrderResponse } from "@/types/commerce"
import { cn } from "@/lib/utils"

const schema = z.object({
  fullName: z.string().min(2, "دخل الاسم الكامل.").max(100, "الاسم طويل بزاف"),
  city: z.string().min(2, "دخل المدينة ديالك.").max(100, "اسم المدينة طويل"),
  phone: z
    .string()
    .min(9, "دخل رقم مغربي صحيح، مثلا 0612345678 ولا +212612345678.")
    .refine((v) => isValidKenyanPhone(normalizePhone(v)), {
      message: "دخل رقم مغربي صحيح، مثلا 0612345678 ولا +212612345678.",
    }),
})

type FormValues = z.infer<typeof schema>

export function CheckoutModal() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const items = useCartStore((s) => s.items)
  const clearCart = useCartStore((s) => s.clearCart)
  const cartTotal = useCartStore((s) => s.total())

  const isOpen = useCheckoutStore((s) => s.isCheckoutOpen)
  const closeCheckout = useCheckoutStore((s) => s.closeCheckout)
  const setCurrentOrderId = useCheckoutStore((s) => s.setCurrentOrderId)
  const setUpsellProduct = useCheckoutStore((s) => s.setUpsellProduct)
  const openUpsell = useCheckoutStore((s) => s.openUpsell)

  const attribution = useAttributionStore((s) => s.attribution)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const normalizedPhone = normalizePhone(values.phone)
      const attemptId = crypto.randomUUID()
      const icEventId = initiateCheckoutId()
      const purchaseEventId = purchaseId(attemptId)

      trackInitiateCheckout(cartTotal, icEventId)

      const orderItems = items.map((item) => ({
        product_id: item.productId,
        product_slug: item.slug,
        offer_quantity: item.offerQuantity,
        source: item.source,
      }))

      const payload = {
        customer: {
          name: values.fullName.trim(),
          city: values.city.trim(),
          phone: normalizedPhone,
        },
        items: orderItems,
        attribution: {
          landing_page_url: attribution.landingPageUrl,
          referrer: attribution.referrer,
          utm_source: attribution.utmSource,
          utm_medium: attribution.utmMedium,
          utm_campaign: attribution.utmCampaign,
          utm_content: attribution.utmContent,
          utm_term: attribution.utmTerm,
          fbclid: attribution.fbclid,
          ttclid: attribution.ttclid,
          sc_click_id: attribution.scCid,
        },
        event_ids: {
          meta_purchase: purchaseEventId,
          tiktok_complete_payment: purchaseEventId,
          snap_purchase: purchaseEventId,
          initiate_checkout: icEventId,
        },
        order_attempt_id: attemptId,
      }

      const response = (await createOrder(payload)) as OrderResponse

      const productIds = items.map((i) => i.productId)
      trackPurchase(productIds, cartTotal, items.length, purchaseEventId, response.public_order_id)

      setCurrentOrderId(response.public_order_id)

      if (response.recommended_upsell) {
        setUpsellProduct({
          slug: response.recommended_upsell.product_slug,
          name: response.recommended_upsell.product_name,
          priceKes: response.recommended_upsell.price_kes,
        })
      } else {
        setUpsellProduct(null)
      }

      clearCart()
      reset()
      closeCheckout()
      openUpsell()
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "وقع شي مشكل. عاود جرب."
      setSubmitError(message.length > 150 ? "ما تمكناش نسيفطو الطلبية. عاود جرب." : message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) closeCheckout()
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <Dialog.Content
          className={cn(
              "fixed z-50 bg-white w-full overflow-hidden",
            "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "sm:w-full sm:max-w-lg rounded-2xl max-h-[92vh]",
            "flex flex-col",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          )}
        >
          <div className="flex flex-col items-center justify-center px-5 py-5 border-b border-[#E5E7EB] flex-shrink-0 relative">
            <div className="text-center">
              <Dialog.Title className="font-bold text-xl text-[#111827]">
                أكد الطلبية ديالك
              </Dialog.Title>
              <Dialog.Description className="text-sm text-[#4B5563] mt-1">
                الاسم والتيليفون فقط. بلا خلاص من قبل.
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                className="absolute right-4 top-4 p-2 text-[#4B5563] hover:text-[#111827] transition-colors rounded-lg bg-gray-100 hover:bg-gray-200"
                aria-label="Close checkout"
              >
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          <div className="overflow-y-auto flex-1 px-5 py-4 space-y-5">
            {/* Order summary */}
            {items.length > 0 && (
              <div className="bg-[#E8F4EF] rounded-xl p-4 space-y-2">
                <p className="text-xs font-semibold text-[#0F5C4A] uppercase tracking-wider">
                  ملخص الطلبية
                </p>
                {items.map((item) => (
                  <div
                    key={item.cartItemId}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-[#1F2937] line-clamp-1 flex-1">
                      {item.name}{" "}
                      <span className="text-[#4B5563] text-xs">×{item.offerQuantity}</span>
                    </span>
                    <span className="font-semibold text-[#111827] ml-2">
                      {formatKes(item.totalPriceKes)}
                    </span>
                  </div>
                ))}
                <div className="border-t border-[#0F5C4A]/20 pt-2 flex items-center justify-between font-bold text-[#111827]">
                  <span>المجموع</span>
                  <span className="text-[#0F5C4A]">{formatKes(cartTotal)}</span>
                </div>
              </div>
            )}

            {/* Trust message */}
            <div className="flex items-center gap-3 text-sm text-[#4B5563] bg-[#FFF8ED] rounded-xl p-4 text-center border border-[#FDE68A]/50">
              <ShieldCheck className="w-6 h-6 text-[#0F5C4A] flex-shrink-0" />
              <span className="leading-snug">
                عمر الاسم والرقم ديال التيليفون. غادي نعيطو ليك باش نأكدو قبل الشحن.
                <strong className="text-[#0F5C4A] block mt-1">كتخلص غير ملي كتوصلك الطلبية.</strong>
              </span>
            </div>

            {/* Form */}
            <form id="checkout-form" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="fullName" className="text-sm font-medium text-[#1F2937] block">
                  الاسم الكامل
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="مثال: يوسف العمراني"
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border text-[#111827] placeholder:text-[#4B5563]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5C4A] transition",
                    errors.fullName
                      ? "border-red-400 focus:ring-red-400"
                      : "border-[#E5E7EB] focus:border-[#0F5C4A]",
                  )}
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <p role="alert" className="text-xs text-red-500">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label htmlFor="city" className="text-sm font-medium text-[#1F2937] block">
                  المدينة
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="مثال: الدار البيضاء، الرباط، مراكش"
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border text-[#111827] placeholder:text-[#4B5563]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5C4A] transition",
                    errors.city
                      ? "border-red-400 focus:ring-red-400"
                      : "border-[#E5E7EB] focus:border-[#0F5C4A]",
                  )}
                  {...register("city")}
                />
                {errors.city && (
                  <p role="alert" className="text-xs text-red-500">
                    {errors.city.message}
                  </p>
                )}
              </div>

              <PhoneField error={errors.phone?.message} {...register("phone")} />

              {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                  <p className="text-sm text-red-600">{submitError}</p>
                </div>
              )}
            </form>
          </div>

          <div className="flex-shrink-0 px-5 pb-6 pt-4 border-t border-[#E5E7EB]">
            <button
              type="submit"
              form="checkout-form"
              disabled={isSubmitting}
              className="w-full bg-[#0F5C4A] text-white py-4 px-4 rounded-xl font-bold text-lg hover:bg-[#073B31] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  كنسيفطو...
                </>
              ) : (
                "أكد الطلبية — الدفع عند التوصيل"
              )}
            </button>
            <p className="text-sm text-[#4B5563] text-center mt-3 font-medium">
              الفريق ديالنا غادي يعيط ليك باش يأكد قبل الشحن.
            </p>

            <div className="mt-4">
              <div className="flex items-center gap-2 my-2">
                <div className="flex-1 h-px bg-[#E5E7EB]" />
                <span className="text-[10px] text-[#4B5563] font-semibold uppercase tracking-wider">ولا</span>
                <div className="flex-1 h-px bg-[#E5E7EB]" />
              </div>
              <WhatsAppCheckoutButton items={items} total={cartTotal} variant="checkout" />
              <p className="text-[11px] text-[#4B5563] text-center mt-2">
                محتار؟ سوّل الفريق ديالنا مباشرة فـ واتساب
              </p>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
