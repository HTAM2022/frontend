"use client"

import { useEffect, useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { SITE } from "@/data/site"

const DEFAULT_MESSAGE =
  "السلام. عندي سؤال على الباك ديال الآلات — بغيت نطلب."

export function WhatsAppFloat() {
  const [showBubble, setShowBubble] = useState(false)
  const [dismissedBubble, setDismissedBubble] = useState(false)

  useEffect(() => {
    if (dismissedBubble) return
    const timer = setTimeout(() => setShowBubble(true), 6000)
    return () => clearTimeout(timer)
  }, [dismissedBubble])

  const whatsappNumber = (SITE.supportWhatsapp || "").replace(/[^0-9]/g, "")
  if (!whatsappNumber) return null

  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`

  return (
    <div className="fixed bottom-24 md:bottom-6 left-4 z-40 flex flex-col items-start gap-2">
      {showBubble && !dismissedBubble && (
        <div className="relative bg-white rounded-2xl shadow-2xl border border-border p-3 pr-8 max-w-[240px] animate-in slide-in-from-bottom-2 fade-in-0 duration-300">
          <button
            onClick={() => setDismissedBubble(true)}
            aria-label="إغلاق"
            className="absolute top-1.5 left-1.5 p-1 rounded-full text-bodyGray hover:bg-softMint"
          >
            <X size={12} />
          </button>
          <p className="text-xs text-ink leading-snug font-medium">
            👋 سلام! شي سؤال؟ سوّلنا فـ واتساب — كنجاوبو بسرعة.
          </p>
        </div>
      )}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا فـ واتساب"
        onClick={() => setDismissedBubble(true)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20BA5A] transition-all hover:scale-110 active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle className="w-7 h-7 relative z-10" strokeWidth={2.2} />
      </a>
    </div>
  )
}
