"use client"

import { useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/collections", label: "Boutique" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
]

type Props = {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <div
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 right-0 bg-white shadow-xl">
        <div className="flex items-center justify-between px-4 py-4 border-b border-border">
          <span className="font-sora font-bold text-emerald text-lg">RafaTools</span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-bodyGray hover:text-ink hover:bg-softMint transition-colors"
            aria-label="Fermer le menu"
          >
            <X size={22} />
          </button>
        </div>
        <nav className="py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="flex items-center px-6 py-4 text-ink font-medium text-base hover:bg-softMint hover:text-emerald transition-colors border-b border-border/50 last:border-b-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="px-6 py-4 bg-softMint">
          <p className="text-sm text-bodyGray">
            <span className="font-semibold text-emerald">100% COD</span> – Payez uniquement à la livraison.
          </p>
        </div>
      </div>
    </div>
  )
}
