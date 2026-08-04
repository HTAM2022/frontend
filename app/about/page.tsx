import type { Metadata } from "next"
import { CheckCircle2, Shield, Banknote, Phone } from "lucide-react"
import { SITE } from "@/data/site"

export const metadata: Metadata = {
  title: "À propos de RafaTools – Éclairage & Sécurité au Maroc",
  description:
    "RafaTools vend des produits pratiques d'éclairage de secours, sécurité solaire et alarmes personnelles pour les foyers marocains. Paiement à la livraison uniquement.",
}

const QUALITY_POINTS = [
  "Produits choisis pour les vraies conditions marocaines — coupures fréquentes et besoins de sécurité extérieure",
  "Vérification des fournisseurs avant publication des fiches produits",
  "Certifications de sécurité (CE / RoHS) affichées quand confirmées",
  "Aucun faux avis ni promesse trompeuse — uniquement des informations honnêtes",
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream to-white py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-sora font-bold text-ink text-4xl mb-4">À propos de RafaTools</h1>
          <p className="text-bodyGray text-lg leading-relaxed">
            {SITE.promise} Nous existons pour aider les foyers, boutiques et familles marocaines à
            rester prêts face aux coupures de courant, aux failles de sécurité nocturne et aux
            risques de sécurité personnelle.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-sora font-bold text-ink text-2xl mb-4">Notre Mission</h2>
          <p className="text-bodyGray leading-relaxed mb-4">
            Les coupures de courant arrivent sans prévenir au Maroc. Les cours sombres et les portails
            non éclairés créent des failles de sécurité la nuit. Et les femmes qui rentrent du travail
            ne devraient jamais se sentir vulnérables. La plupart des familles n'ont pas de plan de
            secours parce qu'elles pensent que c'est cher ou compliqué à commander.
          </p>
          <p className="text-bodyGray leading-relaxed mb-4">
            RafaTools rend simple et sûr le fait de commander de l'éclairage de secours, de la sécurité
            solaire et des produits de sécurité personnelle — sans aucun paiement à l'avance. Nous
            utilisons le paiement à la livraison parce que nous pensons que les clients doivent voir et
            recevoir leur commande avant de payer.
          </p>
          <p className="text-bodyGray leading-relaxed">
            Chaque commande est confirmée par téléphone avant l'expédition. Nous vous appelons pour
            vérifier votre nom, votre numéro et les détails de votre commande. Aucune surprise.
          </p>
        </div>
      </section>

      {/* COD Explanation */}
      <section className="bg-softMint py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-sora font-bold text-ink text-2xl mb-6">Comment fonctionne le paiement à la livraison</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                Icon: Banknote,
                title: "Aucun paiement à l'avance",
                desc: "Vous payez uniquement quand la commande arrive à votre porte. Aucun paiement en ligne, aucun virement.",
              },
              {
                Icon: Phone,
                title: "Vérification par téléphone",
                desc: "Notre équipe appelle chaque client avant l'expédition. Cela confirme votre commande et évite les mauvaises livraisons.",
              },
              {
                Icon: Shield,
                title: "Sans risque",
                desc: "Comme vous payez à la livraison, commander est sans risque. Si quelque chose ne va pas, vous pouvez refuser à la porte.",
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-border p-5">
                <div className="w-10 h-10 rounded-lg bg-softMint flex items-center justify-center mb-3">
                  <Icon size={18} className="text-emerald" />
                </div>
                <h3 className="font-sora font-semibold text-ink text-sm mb-2">{title}</h3>
                <p className="text-bodyGray text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality standards */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-sora font-bold text-ink text-2xl mb-6">Nos Standards de Qualité</h2>
          <ul className="space-y-3">
            {QUALITY_POINTS.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald mt-0.5 shrink-0" />
                <span className="text-bodyGray leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact prompt */}
      <section className="bg-charcoal text-white py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-sora font-bold text-2xl mb-3">Des questions ?</h2>
          <p className="text-white/70 mb-5">
            Contactez-nous à{" "}
            <a href={`mailto:${SITE.supportEmail}`} className="text-warmGold underline">
              {SITE.supportEmail}
            </a>
            . Notre équipe est disponible avant et après votre commande.
          </p>
        </div>
      </section>
    </div>
  )
}
