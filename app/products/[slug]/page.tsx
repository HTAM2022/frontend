import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CheckCircle, ShieldCheck, Truck, PhoneCall, Zap, Sun, BatteryCharging, Home, Store, Users, Wifi, Laptop, Briefcase, Package } from "lucide-react"
import { PRODUCTS } from "@/data/products"
import { getOffersForProduct } from "@/data/offers"
import { formatKes } from "@/lib/money"
import { ProductGallery } from "@/components/product/ProductGallery"
import { OfferSelector } from "@/components/product/OfferSelector"
import { StickyMobileCta } from "@/components/product/StickyMobileCta"
import { Faq } from "@/components/sections/Faq"
import { ProofPlaceholder } from "@/components/sections/ProofPlaceholder"
import { ProductStory } from "@/components/sections/ProductStory"
import { TrustStrip } from "@/components/sections/TrustStrip"
import type { Product } from "@/types/commerce"

const USE_CASE_ICONS: Record<string, React.ElementType> = {
  Home,
  Store,
  Users,
  Wifi,
  Laptop,
  Briefcase,
  Building2: Home,
  Stairs: Home,
  Zap,
  Sun,
  BatteryCharging,
  Package,
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = PRODUCTS.find((p) => p.slug === slug)
  if (!product) return { title: "Product Not Found | RafaTools" }

  return {
    title: `${product.englishName} | RafaTools – Power & Security Tools`,
    description: `${product.cardSubheading} Pay on delivery. COD orders confirmed by phone before dispatch.`,
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = PRODUCTS.find((p) => p.slug === slug) as Product | undefined

  if (!product) notFound()

  const productOffers = getOffersForProduct(product.basePriceKes)
  const baseOffer = productOffers[0]

  return (
    <>
      {/* 1. Product hero */}
      <section className="bg-white py-8 px-4 pb-28 md:pb-12 overflow-x-hidden">
        <div className="max-w-6xl mx-auto overflow-hidden">
          <div className="grid min-w-0 grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Gallery */}
            <div className="min-w-0">
              <ProductGallery
                productName={product.englishName}
                images={product.images}
              />
            </div>

            {/* Offer panel */}
            <div className="min-w-0 space-y-6">
              <div className="min-w-0">
                <p className="text-xs text-bodyGray font-medium mb-2 break-words">
                  <Link href="/collections" className="hover:text-emerald transition-colors">Shop</Link>
                  {" / "}
                  {product.englishName}
                </p>
                <p className="text-sm text-bodyGray italic mb-2 break-words">{product.swahiliName}</p>
                <h1 className="font-sora font-bold text-3xl md:text-4xl text-ink leading-tight mb-2 break-words">
                  {product.englishName}
                </h1>
                <p className="text-lg text-bodyGray font-medium break-words">{product.shortHeadline}</p>
              </div>

              {/* Price from */}
              <div className="flex flex-wrap items-baseline gap-2 bg-softMint/60 p-4 rounded-xl border border-emerald/10">
                <span className="text-sm text-bodyGray font-medium">from</span>
                <span className="text-3xl font-sora font-bold text-emerald">
                  {formatKes(baseOffer.priceKes)}
                </span>
                <span className="text-sm text-bodyGray font-medium">— paid on delivery</span>
              </div>

              {/* Top benefit bullets */}
              <ul className="space-y-3">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-base text-charcoal font-medium">
                    <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Offer selector — client component */}
              <OfferSelector product={product} />

              {/* Trust badges */}
              <div className="flex items-center justify-around pt-4 border-t border-border/70">
                <div className="flex flex-col items-center gap-1 text-center">
                  <Truck className="w-5 h-5 text-emerald" />
                  <span className="text-[10px] font-bold text-bodyGray uppercase">COD<br/>Delivery</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <PhoneCall className="w-5 h-5 text-emerald" />
                  <span className="text-[10px] font-bold text-bodyGray uppercase">Phone<br/>Confirm</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <ShieldCheck className="w-5 h-5 text-emerald" />
                  <span className="text-[10px] font-bold text-bodyGray uppercase">Pay<br/>On Arrival</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pain, Science & Authority Zigzag */}
      <ProductStory productName={product.englishName} />

      {/* 3. Benefits section */}
      <section className="bg-white py-20 px-4 overflow-x-hidden">
        <div className="max-w-4xl mx-auto overflow-hidden">
          <div className="text-center mb-12">
            <h2 className="font-sora font-bold text-3xl text-ink mb-3">
              What it does for you
            </h2>
            <p className="text-bodyGray">Real outcomes, not just specs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.benefits.map((b) => (
              <div
                key={b}
                className="bg-softMint/30 rounded-2xl border border-border p-6 text-center shadow-sm"
              >
                <CheckCircle className="w-8 h-8 text-emerald mx-auto mb-3" />
                <p className="font-sora font-semibold text-ink">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Specs table */}
      <section className="bg-cream py-16 px-4 border-t border-border overflow-x-hidden">
        <div className="max-w-3xl mx-auto overflow-hidden">
          <h2 className="font-sora font-bold text-3xl text-ink mb-8 text-center">
            Product Specifications
          </h2>
          <div className="border border-border rounded-2xl overflow-hidden bg-white shadow-sm">
            {product.specs.map((spec, idx) => (
              <div
                key={spec.label}
                className={`flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 text-sm gap-1 ${
                  idx % 2 === 0 ? "bg-white" : "bg-softMint/20"
                }`}
              >
                <span className="font-semibold text-charcoal sm:w-1/3">{spec.label}</span>
                <span className="text-bodyGray sm:text-right sm:w-2/3 leading-relaxed">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-bodyGray text-center mt-4">
            Specifications will be updated from supplier before launch.
          </p>
        </div>
      </section>

      {/* 5. Bundle value */}
      <section className="bg-white py-16 px-4 border-t border-border overflow-x-hidden">
        <div className="max-w-2xl mx-auto overflow-hidden">
          <div className="text-center mb-8">
            <h2 className="font-sora font-bold text-3xl text-ink mb-3">
              Choose the setup that matches your home or business
            </h2>
            <p className="text-bodyGray">
              Better value when you plan for multiple rooms, spots, or family needs.
            </p>
          </div>
          <OfferSelector product={product} />
        </div>
      </section>

      {/* 6. Use cases */}
      <section className="bg-cream py-16 px-4 border-t border-border overflow-x-hidden">
        <div className="max-w-4xl mx-auto overflow-hidden">
          <h2 className="font-sora font-bold text-3xl text-ink mb-8 text-center">
            Where it works
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.useCases.map((uc) => {
              const Icon = USE_CASE_ICONS[uc.icon] ?? Package
              return (
                <div
                  key={uc.label}
                  className="bg-white rounded-2xl border border-border p-5 text-center shadow-sm"
                >
                  <Icon className="w-8 h-8 text-emerald mx-auto mb-3" />
                  <p className="font-sora font-bold text-ink text-sm mb-1">{uc.label}</p>
                  <p className="text-xs text-bodyGray leading-relaxed">{uc.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. Social proof placeholder */}
      <ProofPlaceholder title="What Customers Are Saying" />

      {/* 8. FAQ */}
      <Faq faqs={product.faqs} title="Common Questions" />

      {/* Trust Strip before Final CTA */}
      <TrustStrip />

      {/* 9. Final CTA */}
      <section className="bg-emerald text-white py-20 px-4 overflow-x-hidden">
        <div className="max-w-3xl mx-auto text-center overflow-hidden">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
            <ShieldCheck className="w-4 h-4" />
            30-Day Risk-Free Warranty included
          </div>
          <h2 className="font-sora font-bold text-4xl mb-4">
            Be ready before the next blackout or dark night
          </h2>
          <p className="text-softMint/90 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
            Order today to secure your stock. Enter your name and phone number below. 
            Our team will call you to confirm your location before dispatch. 
            <strong className="text-warmGold block mt-2 text-xl"> You pay ONLY when the order arrives at your door.</strong>
          </p>
          <div className="bg-white/10 rounded-3xl p-6 md:p-8 inline-block w-full max-w-xl backdrop-blur-sm border border-white/20">
            <OfferSelector product={product} />
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <StickyMobileCta product={product} />
    </>
  )
}
