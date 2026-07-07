import Link from "next/link"
import { SITE } from "@/data/site"

export function Footer() {
  return (
    <footer className="bg-deepEmerald text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-white font-sora font-bold text-base">R</span>
              </div>
              <div>
                <div className="font-sora font-bold text-white text-[15px]">RafaTools</div>
                <div className="text-white/60 text-[11px]">Power &amp; Safety Tools</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">{SITE.promise}</p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sora font-semibold text-white text-sm mb-4">Shop</h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/products/rechargeable-emergency-led-bulb"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  Emergency LED Bulb
                </Link>
              </li>
              <li>
                <Link
                  href="/products/solar-motion-security-light-1500lm"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  Solar Security Light
                </Link>
              </li>
              <li>
                <Link
                  href="/products/personal-safety-alarm-keychain"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  Personal Safety Alarm
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sora font-semibold text-white text-sm mb-4">Help</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-white/70 text-sm hover:text-white transition-colors">
                  About RafaTools
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-white/70 text-sm hover:text-white transition-colors">
                  Shipping &amp; Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-white/70 text-sm hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sora font-semibold text-white text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${SITE.supportEmail}`}
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  {SITE.supportEmail}
                </a>
              </li>
              {SITE.supportPhone && (
                <li>
                  <a
                    href={`tel:${SITE.supportPhone}`}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {SITE.supportPhone}
                  </a>
                </li>
              )}
              {SITE.supportWhatsapp && (
                <li>
                  <a
                    href={`https://wa.me/${SITE.supportWhatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    WhatsApp Support
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* COD Trust Message */}
        <div className="border-t border-white/10 pt-6 mb-4">
          <p className="text-center text-white/60 text-sm">
            <span className="text-warmGold font-semibold">100% Cash on Delivery</span> – You pay only
            when the order arrives at your door. No upfront payment required.
          </p>
        </div>

        <div className="text-center text-white/40 text-xs">
          &copy; {new Date().getFullYear()} RafaTools. All rights reserved. Nairobi, Kenya.
        </div>
      </div>
    </footer>
  )
}
