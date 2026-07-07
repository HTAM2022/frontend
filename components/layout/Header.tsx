"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingCart, Menu } from "lucide-react"
import { useCartStore } from "@/store/cart-store"
import { MobileMenu } from "./MobileMenu"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const items = useCartStore((s) => s.items)
  const openDrawer = useCartStore((s) => s.openDrawer)

  const itemCount = items.reduce((sum, i) => sum + i.offerQuantity, 0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-30 bg-white transition-shadow duration-200 ${
          scrolled ? "shadow-md" : "shadow-sm border-b border-border"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-full bg-emerald flex items-center justify-center">
              <span className="text-white font-sora font-bold text-base leading-none">R</span>
            </div>
            <div className="leading-tight">
              <div className="font-sora font-bold text-ink text-[15px]">RafaTools</div>
              <div className="text-bodyGray text-[11px] leading-none">Power &amp; Safety Tools</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-bodyGray hover:text-emerald transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={openDrawer}
              className="relative p-2.5 rounded-lg hover:bg-softMint transition-colors"
              aria-label={`Open cart, ${itemCount} items`}
            >
              <ShoppingCart size={22} className="text-ink" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-emerald text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2.5 rounded-lg hover:bg-softMint transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} className="text-ink" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
