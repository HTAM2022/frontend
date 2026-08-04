import Link from "next/link"
import { CheckCircle2, Zap, Shield, Lightbulb, Sun, BellRing } from "lucide-react"

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-cream to-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-softMint text-emerald text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <Shield size={12} />
              Éclairage &amp; Sécurité au Maroc
            </div>

            <h1 className="font-sora font-bold text-ink text-4xl md:text-5xl leading-tight mb-5">
              Restez prêt quand la coupure arrive. Restez en sécurité quand la nuit tombe.
            </h1>

            <p className="text-bodyGray text-lg mb-6 leading-relaxed">
              Éclairage de secours, sécurité solaire et alarmes personnelles pour les foyers,
              boutiques et familles au Maroc. Commande en ligne, confirmation par téléphone,
              paiement à la livraison.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Aucun paiement à l'avance – 100% paiement à la livraison",
                "Notre équipe vous appelle pour confirmer avant l'envoi",
                "Les packs réduisent le prix par pièce",
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald shrink-0" />
                  <span className="text-bodyGray">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/collections"
                className="inline-flex items-center justify-center gap-2 bg-emerald text-white font-sora font-bold text-base px-7 py-4 rounded-xl hover:bg-deepEmerald transition-colors"
              >
                <Zap size={18} />
                Voir tous les produits
              </Link>
              <Link
                href="#cod-process"
                className="inline-flex items-center justify-center font-semibold text-emerald text-base px-7 py-4 rounded-xl border border-emerald hover:bg-softMint transition-colors"
              >
                Comment ça marche
              </Link>
            </div>
          </div>

          {/* Hero visual placeholder */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald to-deepEmerald flex flex-col items-center justify-center overflow-hidden shadow-xl">
                <div className="grid grid-cols-3 gap-3 p-6 w-full">
                  {[
                    { Icon: Lightbulb, label: "Ampoule Urgence" },
                    { Icon: Sun, label: "Sécurité Solaire" },
                    { Icon: BellRing, label: "Alarme Personnelle" },
                  ].map(({ Icon, label }, i) => (
                    <div
                      key={i}
                      className="bg-white/10 rounded-xl p-4 flex flex-col items-center gap-2"
                    >
                      <Icon size={24} className="text-warmGold" />
                      <span className="text-white text-xs text-center font-medium">{label}</span>
                    </div>
                  ))}
                </div>
                <div className="px-6 pb-6 w-full text-center">
                  <p className="text-white/80 text-sm">
                    3 produits. 1 mission : votre maison éclairée, sécurisée, votre famille protégée.
                  </p>
                </div>
              </div>

              {/* Floating COD badge */}
              <div className="absolute -bottom-4 -left-4 bg-warmGold text-white rounded-xl px-4 py-3 shadow-lg">
                <p className="font-sora font-bold text-sm">100% COD</p>
                <p className="text-white/80 text-xs">Payer à la livraison</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
