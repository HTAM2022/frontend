"use client"

import { useState } from "react"
import { Mail, Phone, CheckCircle2 } from "lucide-react"
import { SITE } from "@/data/site"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", message: "" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-white min-h-[60vh]">
      <section className="bg-gradient-to-b from-cream to-white py-14 border-b border-border">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="font-sora font-bold text-ink text-4xl mb-3">Contact</h1>
          <p className="text-bodyGray text-base">
            Une question sur une commande ou un produit ? Nous sommes là pour vous aider.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-2xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Form */}
            <div>
              <h2 className="font-sora font-semibold text-ink text-xl mb-5">Envoyer un message</h2>

              {submitted ? (
                <div className="bg-softMint border border-emerald/30 rounded-xl p-6 flex flex-col items-center text-center gap-3">
                  <CheckCircle2 size={40} className="text-emerald" />
                  <p className="font-sora font-bold text-ink text-lg">Message reçu</p>
                  <p className="text-bodyGray text-sm">
                    Merci de nous avoir contactés. Notre équipe vous répondra depuis{" "}
                    <span className="font-semibold">{SITE.supportEmail}</span>.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", message: "" }) }}
                    className="text-emerald text-sm font-semibold hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="block text-sm font-medium text-ink">
                      Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Votre nom complet"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-border text-ink text-sm outline-none focus:ring-2 focus:ring-emerald focus:border-emerald placeholder:text-bodyGray/50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-ink">
                      Numéro de téléphone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="06XX XXX XXX"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-border text-ink text-sm outline-none focus:ring-2 focus:ring-emerald focus:border-emerald placeholder:text-bodyGray/50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="block text-sm font-medium text-ink">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      placeholder="Dites-nous en quoi nous pouvons vous aider…"
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-border text-ink text-sm outline-none focus:ring-2 focus:ring-emerald focus:border-emerald placeholder:text-bodyGray/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald text-white font-sora font-bold text-base py-4 rounded-xl hover:bg-deepEmerald transition-colors"
                  >
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              <h2 className="font-sora font-semibold text-ink text-xl mb-1">Contactez-nous directement</h2>
              <p className="text-bodyGray text-sm">
                Notre équipe est disponible pour répondre à vos questions sur les commandes, produits et livraisons.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-softMint flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-emerald" />
                  </div>
                  <div>
                    <p className="text-xs text-bodyGray mb-0.5">Email</p>
                    <a
                      href={`mailto:${SITE.supportEmail}`}
                      className="text-ink font-medium text-sm hover:text-emerald transition-colors"
                    >
                      {SITE.supportEmail}
                    </a>
                  </div>
                </div>

                {SITE.supportPhone && (
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-softMint flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-emerald" />
                    </div>
                    <div>
                      <p className="text-xs text-bodyGray mb-0.5">Téléphone</p>
                      <a
                        href={`tel:${SITE.supportPhone}`}
                        className="text-ink font-medium text-sm hover:text-emerald transition-colors"
                      >
                        {SITE.supportPhone}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-softMint rounded-xl p-4 border border-emerald/20">
                <p className="text-sm text-bodyGray leading-relaxed">
                  <span className="font-semibold text-ink">Note :</span> Si vous avez déjà passé une
                  commande, gardez votre téléphone disponible. Notre équipe vous appellera pour
                  confirmer avant l’expédition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
