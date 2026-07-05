"use client"

import { SITE } from "@/data/site"
import { Mail, Phone, MessageCircle, ShieldCheck } from "lucide-react"

export function ContactPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F5C4A] to-[#073B31] text-white py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-bold text-4xl mb-4">Have a Question Before Ordering?</h1>
          <p className="text-[#E8F4EF]/90 text-base">
            Send us your name, phone, and message. Our team will get back to you.
          </p>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <div>
            <h2 className="font-bold text-2xl text-[#111827] mb-6">Send a Message</h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                alert(
                  "Message received. Our team will be in touch soon. For COD orders, we confirm by phone before dispatch.",
                )
              }}
            >
              <div>
                <label className="text-sm font-medium text-[#1F2937] block mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. John Kamau"
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#111827] placeholder:text-[#4B5563]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5C4A] transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#1F2937] block mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="07XX XXX XXX"
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#111827] placeholder:text-[#4B5563]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5C4A] transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#1F2937] block mb-1">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="What would you like to know?"
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#111827] placeholder:text-[#4B5563]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5C4A] transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0F5C4A] text-white py-3.5 rounded-xl font-bold hover:bg-[#073B31] transition-colors"
              >
                Send Message
              </button>
              <p className="text-xs text-[#4B5563]">We typically respond within one business day.</p>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h2 className="font-bold text-2xl text-[#111827] mb-2">Contact Information</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#E8F4EF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#0F5C4A]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111827]">Email</p>
                  <a
                    href={`mailto:${SITE.supportEmail}`}
                    className="text-sm text-[#0F5C4A] hover:underline"
                  >
                    {SITE.supportEmail}
                  </a>
                </div>
              </div>

              {SITE.supportPhone && (
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#E8F4EF] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#0F5C4A]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">Phone</p>
                    <a
                      href={`tel:${SITE.supportPhone}`}
                      className="text-sm text-[#0F5C4A] hover:underline"
                    >
                      {SITE.supportPhone}
                    </a>
                  </div>
                </div>
              )}

              {SITE.supportWhatsapp && (
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#E8F4EF] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#0F5C4A]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">WhatsApp</p>
                    <a
                      href={`https://wa.me/${SITE.supportWhatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#0F5C4A] hover:underline"
                    >
                      {SITE.supportWhatsapp}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* COD reassurance */}
            <div className="bg-[#E8F4EF]/40 border border-[#0F5C4A]/10 rounded-2xl p-5 mt-6">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-[#0F5C4A]" />
                <p className="font-semibold text-[#111827] text-sm">Zero Risk COD</p>
              </div>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                All RafaTools orders are Cash on Delivery. You never pay before your order arrives.
                If you have questions about your order, contact us and our team will help right away.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
