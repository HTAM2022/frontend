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
  title: "RafaTools – Ampoules de Secours, Éclairage Solaire & Alarmes Personnelles | Maroc",
  description:
    "Ampoules LED rechargeables, projecteurs solaires 1500LM et alarmes personnelles 130dB pour les foyers marocains. Paiement à la livraison.",
}

const WHY_REASONS = [
  {
    Icon: Zap,
    title: "Conçus pour le Maroc",
    desc: "Produits sélectionnés pour les coupures ONEE, les besoins de sécurité nocturne et les réalités du terrain marocain.",
  },
  {
    Icon: Shield,
    title: "Commande sans risque",
    desc: "100% paiement à la livraison. Vous ne payez que lorsque la commande est entre vos mains.",
  },
  {
    Icon: Clock,
    title: "Confirmé avant expédition",
    desc: "Notre équipe appelle chaque client avant l'envoi. Aucune erreur, aucune fausse livraison.",
  },
  {
    Icon: Building2,
    title: "Maison, boutique et famille",
    desc: "Solutions pour chambres, comptoirs de boutique, cours, salons — et pour les femmes qui rentrent le soir.",
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
            Le courant coupe sans prévenir. Les cours restent dans le noir. Et rentrer seul(e) le soir n'est pas toujours sûr.
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-6">
            Quand le courant coupe, vous restez dans le noir – littéralement. Les enfants ne peuvent
            pas finir leurs devoirs. Les boutiques perdent des clients. La nuit, un portail sombre
            invite les problèmes, et aucune femme rentrant du travail ne devrait se sentir seule.
          </p>
          <p className="text-white/90 font-semibold text-base">
            RafaTools résout ces trois problèmes avec des produits pratiques, abordables et
            disponibles en paiement à la livraison.
          </p>
        </div>
      </section>

      {/* Product collection */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-sora font-bold text-ink text-3xl mb-3">Nos Produits</h2>
            <p className="text-bodyGray text-base max-w-lg mx-auto">
              Trois solutions ciblées : coupures de courant, sécurité de la maison et sécurité personnelle.
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
            <h2 className="font-sora font-bold text-ink text-3xl mb-3">Pourquoi RafaTools</h2>
            <p className="text-bodyGray text-base">
              Pratique, honnête et conçu pour la vie quotidienne au Maroc.
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
