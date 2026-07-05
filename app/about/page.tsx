import type { Metadata } from "next"
import { CheckCircle2, Shield, Banknote, Phone } from "lucide-react"
import { SITE } from "@/data/site"

export const metadata: Metadata = {
  title: "About RafaTools – Power & Security for Kenya",
  description:
    "RafaTools sells practical backup power and outdoor security lighting for Kenyan homes and businesses. Cash on Delivery only.",
}

const QUALITY_POINTS = [
  "Products chosen for real Kenyan conditions – frequent outages and outdoor security needs",
  "Supplier verification required before publishing specs",
  "Safety certifications will be displayed once confirmed",
  "No fake reviews or misleading claims – only honest product information",
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream to-white py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-sora font-bold text-ink text-4xl mb-4">About RafaTools</h1>
          <p className="text-bodyGray text-lg leading-relaxed">
            {SITE.promise} We exist to help Kenyan homes and businesses stay ready for blackouts and
            night security risks.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-sora font-bold text-ink text-2xl mb-4">Our Mission</h2>
          <p className="text-bodyGray leading-relaxed mb-4">
            Power cuts happen without warning in Kenya. Dark compounds and gates create security gaps
            at night. Most people do not have a backup plan because they assume it is expensive or
            complicated to order.
          </p>
          <p className="text-bodyGray leading-relaxed mb-4">
            RafaTools makes it easy and safe to order practical power backup and security lighting
            products – with no upfront payment required. We use Cash on Delivery because we believe
            customers should be able to see and receive their order before paying.
          </p>
          <p className="text-bodyGray leading-relaxed">
            Every order is confirmed by phone before dispatch. We call you to verify your name, phone
            number, and order details. No surprises.
          </p>
        </div>
      </section>

      {/* COD Explanation */}
      <section className="bg-softMint py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-sora font-bold text-ink text-2xl mb-6">How Our COD System Works</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                Icon: Banknote,
                title: "No Upfront Payment",
                desc: "You pay only when the order arrives at your door. No online payment, no bank transfer.",
              },
              {
                Icon: Phone,
                title: "Phone Verification",
                desc: "Our team calls every customer before dispatch. This confirms your order and prevents wrong deliveries.",
              },
              {
                Icon: Shield,
                title: "Safe to Try",
                desc: "Since you pay on delivery, ordering is risk-free. If something is wrong, you can refuse at the door.",
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
          <h2 className="font-sora font-bold text-ink text-2xl mb-6">Our Quality Standards</h2>
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
          <h2 className="font-sora font-bold text-2xl mb-3">Have Questions?</h2>
          <p className="text-white/70 mb-5">
            Reach us at{" "}
            <a href={`mailto:${SITE.supportEmail}`} className="text-warmGold underline">
              {SITE.supportEmail}
            </a>
            . Our team is available to help before and after your order.
          </p>
        </div>
      </section>
    </div>
  )
}
