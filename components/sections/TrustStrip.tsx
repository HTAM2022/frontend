import { Banknote, PhoneCall, MapPin, PackageCheck } from "lucide-react"

const TRUST_ITEMS = [
  {
    Icon: Banknote,
    title: "Paiement à la livraison",
    desc: "Aucun paiement à l'avance. Payez uniquement quand la commande arrive.",
  },
  {
    Icon: PhoneCall,
    title: "Confirmation par téléphone",
    desc: "Notre équipe appelle pour vérifier votre commande avant l'envoi. Aucune surprise.",
  },
  {
    Icon: MapPin,
    title: "Livraison partout au Maroc",
    desc: "Nous livrons dans tout le Maroc. Couverture confirmée lors de l'appel.",
  },
  {
    Icon: PackageCheck,
    title: "Packs avantageux",
    desc: "Commandez 2 ou 3 pièces et économisez par unité. Idéal pour toute la famille.",
  },
]

export function TrustStrip() {
  return (
    <section className="bg-white border-y border-border py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_ITEMS.map(({ Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-softMint flex items-center justify-center">
                <Icon size={22} className="text-emerald" />
              </div>
              <div>
                <h3 className="font-sora font-semibold text-ink text-sm mb-1">{title}</h3>
                <p className="text-bodyGray text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
