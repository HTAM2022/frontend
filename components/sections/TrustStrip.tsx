import { Banknote, PhoneCall, MapPin, PackageCheck } from "lucide-react"

const TRUST_ITEMS = [
  {
    Icon: Banknote,
    title: "Pay On Delivery",
    desc: "No upfront payment. Pay only when the order arrives at your door.",
  },
  {
    Icon: PhoneCall,
    title: "Phone Confirmation",
    desc: "Our team calls to verify your order before dispatch. No surprises.",
  },
  {
    Icon: MapPin,
    title: "Kenya-Wide Dispatch",
    desc: "We deliver across Kenya. Coverage confirmed during your confirmation call.",
  },
  {
    Icon: PackageCheck,
    title: "Bundle Value",
    desc: "Order 2 or 3 pieces and save more per unit. Better value for family or shop setups.",
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
