import type { Metadata } from "next"
import { Truck, MapPin, PhoneCall, Clock, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Livraison | RafaTools",
  description: "Livraison rapide partout au Maroc. Paiement UNIQUEMENT à la réception. Livraison en 24-48h dans les grandes villes et 3-5 jours ailleurs.",
}

export default function ShippingPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-softMint py-16 md:py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-white mb-6 shadow-sm">
            <Truck size={32} className="text-emerald" />
          </div>
          <h1 className="font-sora font-bold text-ink text-4xl md:text-5xl leading-tight mb-4">
            Livraison
          </h1>
          <p className="text-bodyGray text-lg leading-relaxed max-w-2xl mx-auto">
            Livraison rapide et fiable partout au Maroc.
            <strong className="text-emerald block mt-2">Toujours 100% paiement à la livraison.</strong>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Timeline Section */}
          <div className="space-y-6">
            <h2 className="font-sora font-bold text-3xl text-ink">Délais de Livraison</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cream border border-border p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-warmGold" size={24} />
                  <h3 className="font-sora font-bold text-ink text-xl">Grandes Villes</h3>
                </div>
                <div className="inline-block bg-white text-emerald font-bold px-3 py-1 rounded-full text-sm mb-4 border border-emerald/20">
                  24 à 48 heures
                </div>
                <ul className="space-y-2 text-bodyGray">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald" /> Casablanca</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald" /> Rabat</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald" /> Marrakech</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald" /> Fès</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald" /> Tanger</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald" /> Agadir</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald" /> Meknès</li>
                </ul>
              </div>

              <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-charcoal" size={24} />
                  <h3 className="font-sora font-bold text-ink text-xl">Autres Villes</h3>
                </div>
                <div className="inline-block bg-softMint text-charcoal font-bold px-3 py-1 rounded-full text-sm mb-4 border border-emerald/20">
                  3 à 5 jours ouvrables
                </div>
                <p className="text-bodyGray leading-relaxed">
                  Nous travaillons avec des transporteurs fiables pour que votre colis vous parvienne
                  partout au Maroc. Notre équipe vous indiquera le transporteur exact et le point de
                  retrait pour votre ville lors de l’appel de confirmation.
                </p>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="space-y-8">
            <h2 className="font-sora font-bold text-3xl text-ink text-center">Comment ça marche</h2>
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 flex justify-end">
                    <div className="bg-white border border-border p-6 rounded-2xl w-full md:max-w-sm relative z-10 shadow-sm">
                      <h4 className="font-sora font-bold text-ink text-lg mb-2">1. Passez votre commande</h4>
                      <p className="text-bodyGray text-sm">Entrez votre nom et numéro de téléphone sur notre site. Aucune information de paiement demandée.</p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-emerald rounded-full border-4 border-white items-center justify-center text-white font-bold z-20">1</div>
                  <div className="md:w-1/2" />
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2" />
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-emerald rounded-full border-4 border-white items-center justify-center text-white font-bold z-20">2</div>
                  <div className="md:w-1/2 flex justify-start">
                    <div className="bg-white border border-border p-6 rounded-2xl w-full md:max-w-sm relative z-10 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <PhoneCall size={18} className="text-emerald" />
                        <h4 className="font-sora font-bold text-ink text-lg">Confirmation par téléphone</h4>
                      </div>
                      <p className="text-bodyGray text-sm">Notre équipe vous appelle dans les 24 heures pour confirmer votre adresse exacte et votre disponibilité.</p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 flex justify-end">
                    <div className="bg-white border border-border p-6 rounded-2xl w-full md:max-w-sm relative z-10 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock size={18} className="text-emerald" />
                        <h4 className="font-sora font-bold text-ink text-lg">Expédition</h4>
                      </div>
                      <p className="text-bodyGray text-sm">Votre commande est emballée et remise à nos livreurs (Casablanca / Rabat) ou à un transporteur partenaire (autres villes).</p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-emerald rounded-full border-4 border-white items-center justify-center text-white font-bold z-20">3</div>
                  <div className="md:w-1/2" />
                </div>

                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2" />
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-emerald rounded-full border-4 border-white items-center justify-center text-white font-bold z-20">4</div>
                  <div className="md:w-1/2 flex justify-start">
                    <div className="bg-cream border border-warmGold/30 p-6 rounded-2xl w-full md:max-w-sm relative z-10 shadow-sm">
                      <h4 className="font-sora font-bold text-ink text-lg mb-2 text-emerald">Payez à la réception</h4>
                      <p className="text-bodyGray text-sm">Vous inspectez le colis. Une fois satisfait, vous payez le livreur en espèces. 100% sans risque.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact / Help block */}
          <div className="bg-softMint/50 rounded-2xl p-8 text-center mt-12 border border-border">
            <h3 className="font-sora font-bold text-xl text-ink mb-3">Des questions sur votre livraison ?</h3>
            <p className="text-bodyGray mb-6">Notre équipe est là pour vous aider à suivre votre commande.</p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-emerald text-white px-6 py-3 rounded-xl font-bold hover:bg-deepEmerald transition-colors"
            >
              Contacter le support
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}
