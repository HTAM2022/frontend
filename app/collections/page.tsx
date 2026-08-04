import type { Metadata } from "next"
import { ShieldCheck, Package, Banknote } from "lucide-react"
import { ProductCard } from "@/components/product/ProductCard"
import { PRODUCTS } from "@/data/products"
import { Faq } from "@/components/sections/Faq"
import { HOME_FAQS } from "@/data/site"

export const metadata: Metadata = {
  title: "Boutique – RafaTools | Maroc",
  description:
    "Découvrez les produits RafaTools : éclairage de secours, sécurité solaire et alarmes personnelles. Commande en ligne, paiement à la livraison.",
}

const FILTER_CHIPS = ["Tous les produits", "Éclairage de secours", "Sécurité extérieure", "Packs"]

export default function CollectionsPage() {
  return (
    <>
      {/* Collection hero */}
      <section className="bg-gradient-to-b from-cream to-white py-12 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-sora font-bold text-ink text-4xl mb-3">Tous les produits</h1>
          <p className="text-bodyGray text-base max-w-lg mx-auto">
            Éclairage de secours et outils de sécurité extérieure pour foyers, boutiques, salons et
            espaces de travail au Maroc. Paiement à la livraison uniquement.
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
            Commandez 2 ou 3 et économisez plus
          </h2>
          <p className="text-bodyGray text-base mb-6 leading-relaxed">
            Chaque produit propose des packs. Les packs de 2 et 3 pièces offrent un meilleur prix par
            unité. Idéal pour couvrir plusieurs pièces, une cour, ou une maison et une boutique.
          </p>
          <div className="inline-flex items-center gap-2 bg-white border border-border rounded-xl px-5 py-3">
            <Package size={18} className="text-emerald" />
            <span className="text-ink text-sm font-medium">
              Pack 2 pièces : 499 DH &nbsp;|&nbsp; Pack 3 pièces : 699 DH
            </span>
          </div>
        </div>
      </section>

      {/* COD trust block */}
      <section className="bg-deepEmerald text-white py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { Icon: Banknote, text: "Payez uniquement quand la commande arrive. Aucun paiement à l'avance." },
              { Icon: ShieldCheck, text: "Notre équipe appelle avant l'expédition pour confirmer votre commande." },
              { Icon: Package, text: "Packs disponibles pour un meilleur prix par pièce." },
            ].map(({ Icon, text }, i) => (
              <div key={i} className="flex items-start gap-3">
                <Icon size={20} className="text-warmGold shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq faqs={HOME_FAQS} title="Questions fréquentes" />
    </>
  )
}
