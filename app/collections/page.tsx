import type { Metadata } from "next"
import { ShieldCheck, Package, Banknote } from "lucide-react"
import { ProductCard } from "@/components/product/ProductCard"
import { PRODUCTS } from "@/data/products"
import { Faq } from "@/components/sections/Faq"
import { HOME_FAQS } from "@/data/site"

export const metadata: Metadata = {
  title: "Shop All Products – RafaTools | Kenya",
  description:
    "Browse RafaTools backup power and security lighting products. Order online, pay on delivery.",
}

const FILTER_CHIPS = ["All Products", "Power Backup", "Security Lighting", "Bundles"]

export default function CollectionsPage() {
  return (
    <>
      {/* Collection hero */}
      <section className="bg-gradient-to-b from-cream to-white py-12 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-sora font-bold text-ink text-4xl mb-3">All Products</h1>
          <p className="text-bodyGray text-base max-w-lg mx-auto">
            Backup power and outdoor security tools for Kenyan homes, shops, salons, and workspaces.
            Cash on Delivery only.
          </p>
        </div>
      </section>

      {/* Filter chips – UI only, no filter logic in v1 */}
      <section className="bg-white border-b border-border py-4 sticky top-16 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {FILTER_CHIPS.map((chip, i) => (
              <button
                key={chip}
                className={`shrink-0 text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                  i === 0
                    ? "bg-emerald text-white border-emerald"
                    : "bg-white text-bodyGray border-border hover:border-emerald hover:text-emerald"
                }`}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bundle explainer */}
      <section className="bg-softMint py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-sora font-bold text-ink text-2xl mb-4">
            Order 2 or 3 and Save More
          </h2>
          <p className="text-bodyGray text-base mb-6 leading-relaxed">
            Each product has bundle options. The 2-piece and 3-piece bundles offer a lower price per
            unit. Perfect if you need coverage for multiple rooms, a compound, or a home and shop.
          </p>
          <div className="inline-flex items-center gap-2 bg-white border border-border rounded-xl px-5 py-3">
            <Package size={18} className="text-emerald" />
            <span className="text-ink text-sm font-medium">
              2 pieces: KES 9,584 &nbsp;|&nbsp; 3 pieces: KES 11,989
            </span>
          </div>
        </div>
      </section>

      {/* COD trust block */}
      <section className="bg-deepEmerald text-white py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { Icon: Banknote, text: "Pay only when the order arrives. No upfront payment." },
              { Icon: ShieldCheck, text: "Our team calls before dispatch to confirm your order." },
              { Icon: Package, text: "Bundle options available for better value per piece." },
            ].map(({ Icon, text }, i) => (
              <div key={i} className="flex items-start gap-3">
                <Icon size={20} className="text-warmGold shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq faqs={HOME_FAQS} title="Common Questions" />
    </>
  )
}
