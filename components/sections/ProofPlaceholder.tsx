import { Clock, MessageSquare } from "lucide-react"

type Review = { initials: string; location: string; text: string }

type Props = {
  title?: string
  reviews?: Review[]
}

const DEFAULT_REVIEWS: Review[] = [
  {
    initials: "ي.ب",
    location: "الدار البيضاء",
    text: '"توصيل سريع، عيطو ليا قبل ما يسيفطو، وخلصت غير ملي كانت الطلبية فـ يدي. آمن بزاف."',
  },
  {
    initials: "س.م",
    location: "الرباط",
    text: '"كتخدم بحال ما قالو ليا. غادي ننصح بيها أصحابي."',
  },
  {
    initials: "ع.ف",
    location: "مراكش",
    text: '"كنت متردد نشري أونلاين، ولكن الدفع عند التوصيل حل ليا كل الشكوك. كننصح RafaTools لكل واحد."',
  },
]

export function ProofPlaceholder({ title = "أش كيقولو الزبناء", reviews }: Props) {
  const displayReviews = reviews && reviews.length > 0 ? reviews : DEFAULT_REVIEWS

  return (
    <section className="bg-[#F8FAFC] py-16 border-y border-[#E5E7EB]/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#FEF3C7] text-[#92400E] text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            <Clock size={12} />
            آراء الزبناء
          </div>
          <h2 className="font-bold text-[#111827] text-3xl mb-3">{title}</h2>
          <p className="text-[#4B5563] text-sm max-w-md mx-auto">
            آراء ديال زبناء كانو عندهم نفس التحديات ديالك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {displayReviews.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#E5E7EB] p-6 flex flex-col gap-4 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#E8F4EF] flex items-center justify-center border border-[#0F5C4A]/10">
                  <span className="text-[#0F5C4A] font-bold text-sm">{r.initials}</span>
                </div>
                <div>
                  <div className="text-[#111827] font-bold text-sm">زبون من {r.location}</div>
                  <div className="text-[#0F5C4A] text-xs font-semibold">مشتري موثق</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MessageSquare size={16} className="text-[#D1D5DB] mt-1 shrink-0" />
                <p className="text-[#4B5563] text-sm italic leading-relaxed">
                  {r.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
