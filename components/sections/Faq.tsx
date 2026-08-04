"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/components/ui/cn"

type FaqItem = { q: string; a: string }

type Props = {
  faqs: FaqItem[]
  title?: string
}

export function Faq({ faqs, title = "Questions fréquentes" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="font-sora font-bold text-ink text-3xl mb-8 text-center">{title}</h2>

        <div className="divide-y divide-border border border-border rounded-2xl overflow-hidden">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i}>
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-softMint/50 transition-colors"
                >
                  <span className="font-medium text-ink text-sm pr-4">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "shrink-0 text-bodyGray transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 bg-softMint/30">
                    <p className="text-bodyGray text-sm leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
