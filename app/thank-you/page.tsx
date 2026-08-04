"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle2, Phone, Package, Loader2, AlertCircle } from "lucide-react"
import { getOrder } from "@/lib/api"
import { formatKes } from "@/lib/money"
import { SITE } from "@/data/site"
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
      setError("ما لقيناش رقم الطلبية.")
      return
    }
    ;(getOrder(orderId) as Promise<OrderResponse>)
      .then((o) => setOrder(o))
      .catch((err) => setError(err instanceof Error ? err.message : "الطلبية غير موجودة."))
      .finally(() => setLoading(false))
  }, [orderId])

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-[#4B5563]">
          <Loader2 size={32} className="animate-spin text-[#0F5C4A]" />
          <p className="text-sm">كنجيبو الطلبية ديالك…</p>
        </div>
      </div>
    )
  }

  if (error || !order) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <AlertCircle size={40} className="text-[#F5B84B] mx-auto mb-4" />
          <h1 className="font-bold text-[#111827] text-2xl mb-2">الطلبية غير موجودة</h1>
          <p className="text-[#4B5563] text-sm mb-6">
            {error ?? "ما لقيناش الطلبية ديالك. عافاك تواصل معنا."}
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/collections"
              className="block w-full bg-[#0F5C4A] text-white font-bold text-base py-4 rounded-xl hover:bg-[#073B31] transition-colors text-center"
            >
              كمل التسوق
            </Link>
            <a
              href={`mailto:${SITE.supportEmail}`}
              className="block w-full text-center border border-[#E5E7EB] text-[#4B5563] font-medium py-4 rounded-xl hover:bg-[#E8F4EF] transition-colors text-sm"
            >
              تواصل مع الدعم
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gradient-to-b from-[#E8F4EF] to-white py-14 border-b border-[#E5E7EB]">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-[#0F5C4A]/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={36} className="text-[#0F5C4A]" />
          </div>
          <h1 className="font-bold text-[#111827] text-3xl mb-2">
            توصلات الطلبية ديالك مزيان
          </h1>
          <p className="text-[#4B5563] text-base">
            شكرا، <span className="font-semibold text-[#111827]">{order.customer.name}</span>.
            الفريق ديالنا غادي يعيط ليك باش يأكد الطلبية قبل الشحن.
          </p>
          <div className="inline-block mt-4 bg-white border border-[#E5E7EB] rounded-xl px-5 py-2">
            <span className="text-xs text-[#4B5563]">رقم الطلبية: </span>
            <span className="font-mono font-semibold text-[#111827] text-sm">
              {order.public_order_id}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-xl mx-auto px-4 space-y-6">
          <div className="bg-[#E8F4EF]/50 rounded-xl border border-[#0F5C4A]/20 p-5">
            <h2 className="font-semibold text-[#111827] text-base mb-4">ملخص الطلبية</h2>
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
              <span className="font-bold text-[#111827]">المجموع</span>
              <span className="font-bold text-[#0F5C4A]">{formatKes(order.total_kes)}</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 space-y-3">
            <h2 className="font-semibold text-[#111827] text-base">المعلومات ديالك</h2>
            <div className="flex justify-between text-sm">
              <span className="text-[#4B5563]">الاسم</span>
              <span className="font-medium text-[#111827]">{order.customer.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#4B5563]">التيليفون</span>
              <span className="font-medium text-[#111827]">{order.customer.phone_e164}</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 space-y-4">
            <h2 className="font-semibold text-[#111827] text-base">الخطوات الجاية</h2>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E8F4EF] flex items-center justify-center shrink-0">
                <Phone size={15} className="text-[#0F5C4A]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#111827]">عيطة التأكيد</p>
                <p className="text-xs text-[#4B5563] mt-0.5">
                  الفريق ديالنا غادي يعيط ليك باش يأكد تفاصيل الطلبية قبل الشحن. خلي التيليفون معاك.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E8F4EF] flex items-center justify-center shrink-0">
                <Package size={15} className="text-[#0F5C4A]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#111827]">الشحن والتوصيل</p>
                <p className="text-xs text-[#4B5563] mt-0.5">
                  من بعد التأكيد، كنسيفطو الطلبية. كتخلص غير ملي كتوصلك. بلا خلاص من قبل.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="/collections"
              className="block w-full bg-[#0F5C4A] text-white font-bold text-base py-4 rounded-xl hover:bg-[#073B31] transition-colors text-center"
            >
              كمل التسوق
            </Link>
            <a
              href={`mailto:${SITE.supportEmail}`}
              className="block w-full text-center border border-[#E5E7EB] text-[#4B5563] font-medium py-4 rounded-xl hover:bg-[#E8F4EF] transition-colors text-sm"
            >
              الدعم — {SITE.supportEmail}
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
