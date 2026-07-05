import type { Metadata } from "next"
import { Zap, Shield, Clock, Building2 } from "lucide-react"
import { Hero } from "@/components/sections/Hero"
import { TrustStrip } from "@/components/sections/TrustStrip"
import { CodProcess } from "@/components/sections/CodProcess"
import { ProofPlaceholder } from "@/components/sections/ProofPlaceholder"
import { Faq } from "@/components/sections/Faq"
import { ProductCard } from "@/components/product/ProductCard"
import { PRODUCTS } from "@/data/products"
import { HOME_FAQS } from "@/data/site"

export const metadata: Metadata = {
  title: "RafaTools – Stay Ready for Blackouts and Night Security | Kenya",
  description:
    "Backup power lamps, solar security lights, and portable power stations for Kenyan homes and shops. COD – pay on delivery.",
}

const WHY_REASONS = [
  {
    Icon: Zap,
    title: "Purpose-built for Kenya",
    desc: "Products chosen for Kenyan power conditions, blackout frequency, and outdoor security needs.",
  },
  {
    Icon: Shield,
    title: "Safe ordering – no risk",
    desc: "100% Cash on Delivery. You only pay when the order is in your hands.",
  },
  {
    Icon: Clock,
    title: "Confirmed before dispatch",
    desc: "Our team calls every customer before sending. No guesswork, no wrong deliveries.",
  },
  {
    Icon: Building2,
    title: "Home and business ready",
    desc: "Solutions that work for bedrooms, kitchens, shop counters, compounds, and salons.",
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />

      {/* Problem agitation */}
      <section className="bg-charcoal text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-sora font-bold text-2xl md:text-3xl mb-5 leading-snug">
            Stima goes without warning. Security gaps happen at night.
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-6">
            When power cuts happen, you are left in the dark – literally. Children can&apos;t finish
            homework. Shops lose customers. Work stops mid-meeting. And at night, dark gates and
            compounds are a security risk.
          </p>
          <p className="text-white/90 font-semibold text-base">
            RafaTools exists to solve these two problems with products that are affordable, practical,
            and available on Cash on Delivery.
          </p>
        </div>
      </section>

      {/* Product collection */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-sora font-bold text-ink text-3xl mb-3">Our Products</h2>
            <p className="text-bodyGray text-base max-w-lg mx-auto">
              Three focused solutions for power backup and outdoor security.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why RafaTools */}
      <section className="bg-softMint py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-sora font-bold text-ink text-3xl mb-3">Why RafaTools</h2>
            <p className="text-bodyGray text-base">
              Practical, honest, and built for Kenyan conditions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_REASONS.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-border p-6 flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-softMint flex items-center justify-center">
                  <Icon size={20} className="text-emerald" />
                </div>
                <div>
                  <h3 className="font-sora font-semibold text-ink text-sm mb-1">{title}</h3>
                  <p className="text-bodyGray text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProofPlaceholder />
      <CodProcess />
      <Faq faqs={HOME_FAQS} />
    </>
  )
}
