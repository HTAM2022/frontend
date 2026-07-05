import { Clock, MessageSquare } from "lucide-react"

type Props = {
  title?: string
}

const PLACEHOLDER_REVIEWS = [
  { 
    initials: "JM", 
    location: "Nairobi", 
    text: '"As a mother, my biggest fear is the kids being in the dark when Stima goes. The delivery was fast, they called me, and I paid via M-Pesa on arrival. Now my kids do homework with no interruptions."'
  },
  { 
    initials: "AW", 
    location: "Mombasa", 
    text: '"My shop stays open 2 hours longer now. No need for noisy generators. The battery lasts the whole evening. Best purchase."'
  },
  { 
    initials: "FK", 
    location: "Kisumu", 
    text: '"I was skeptical about buying online, but they told me to pay ONLY when I see the package. It works exactly as advertised."'
  },
]

export function ProofPlaceholder({ title = "What Customers Are Saying" }: Props) {
  return (
    <section className="bg-[#F8FAFC] py-16 border-y border-[#E5E7EB]/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#FEF3C7] text-[#92400E] text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            <Clock size={12} />
            Proof Pending – Expected Reviews
          </div>
          <h2 className="font-bold text-[#111827] text-3xl mb-3">{title}</h2>
          <p className="text-[#4B5563] text-sm max-w-md mx-auto">
            (Disclaimer: These are example reviews targeting our exact customer pain points. Real verified reviews will replace these once we launch.)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PLACEHOLDER_REVIEWS.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#E5E7EB] p-6 flex flex-col gap-4 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#E8F4EF] flex items-center justify-center border border-[#0F5C4A]/10">
                  <span className="text-[#0F5C4A] font-bold text-sm">{r.initials}</span>
                </div>
                <div>
                  <div className="text-[#111827] font-bold text-sm">Customer from {r.location}</div>
                  <div className="text-[#0F5C4A] text-xs font-semibold">Verified Buyer</div>
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
