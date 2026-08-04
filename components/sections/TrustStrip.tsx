import { Banknote, PhoneCall, MapPin, PackageCheck } from "lucide-react"

const TRUST_ITEMS = [
  {
    Icon: Banknote,
    title: "الدفع عند التوصيل",
    desc: "بلا خلاص من قبل. كتخلص غير ملي كتوصلك الطلبية للدار.",
  },
  {
    Icon: PhoneCall,
    title: "تأكيد بالتيليفون",
    desc: "الفريق ديالنا كيعيط ليك باش يأكد قبل الشحن. بلا مفاجآت.",
  },
  {
    Icon: MapPin,
    title: "توصيل لكل المغرب",
    desc: "كنسيفطو لكل المدن المغربية. التغطية مؤكدة فـ العيطة.",
  },
  {
    Icon: PackageCheck,
    title: "ضمان 6 شهور",
    desc: "كل الآلات ضمان 6 شهور ضد عيوب الصناعة. راحة تامة.",
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
                <h3 className="font-cairo font-semibold text-ink text-sm mb-1">{title}</h3>
                <p className="text-bodyGray text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
