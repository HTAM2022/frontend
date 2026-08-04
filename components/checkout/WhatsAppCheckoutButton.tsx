"use client"

import { MessageCircle } from "lucide-react"
import { SITE } from "@/data/site"
import type { CartItem } from "@/types/commerce"

type Props = {
  items?: CartItem[]
  total?: number
  variant?: "cart" | "checkout"
}

function buildMessage(items?: CartItem[], total?: number): string {
  if (!items || items.length === 0) {
    return "السلام. عندي سؤال على الباك ديال الآلات — بغيت نطلب."
  }
  const lines = items.map(
    (i) => `• ${i.name} × ${i.offerQuantity}`,
  )
  const totalLine = total ? `\nالمجموع: ${total.toLocaleString("fr-MA")} DH` : ""
  return `السلام. بغيت نطلب هاذ الباك بالدفع عند التوصيل:\n\n${lines.join(
    "\n",
  )}${totalLine}\n\nممكن تساعدني نكمل الطلبية؟`
}

export function WhatsAppCheckoutButton({ items, total, variant = "cart" }: Props) {
  const whatsappNumber = (SITE.supportWhatsapp || "").replace(/[^0-9]/g, "")
  if (!whatsappNumber) return null

  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    buildMessage(items, total),
  )}`

  const label =
    variant === "checkout"
      ? "اطلب عبر واتساب بدلا من ذلك"
      : "اطلب عبر واتساب"

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-cairo font-bold text-base py-3.5 rounded-xl hover:bg-[#20BA5A] transition-colors active:scale-[0.98] shadow-md"
    >
      <MessageCircle className="w-5 h-5" strokeWidth={2.4} />
      {label}
    </a>
  )
}
