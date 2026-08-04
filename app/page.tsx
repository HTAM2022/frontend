import type { Metadata } from "next"
import { Zap, Shield, Clock, Wrench } from "lucide-react"
import { Hero } from "@/components/sections/Hero"
import { TrustStrip } from "@/components/sections/TrustStrip"
import { CodProcess } from "@/components/sections/CodProcess"
import { ProofPlaceholder } from "@/components/sections/ProofPlaceholder"
import { Faq } from "@/components/sections/Faq"
import { ProductCard } from "@/components/product/ProductCard"
import { PRODUCTS } from "@/data/products"
import { HOME_FAQS } from "@/data/site"

export const metadata: Metadata = {
  title: "RafaTools – باكات آلات DeWalt و Makita احترافية | المغرب",
  description:
    "باكات آلات كهربائية احترافية DeWalt و Makita بـ الدفع عند التوصيل. فيسوز، ميلوز، مرطو، منشار. ضمان 6 شهور.",
}

const WHY_REASONS = [
  {
    Icon: Wrench,
    title: "آلات أصلية 100%",
    desc: "DeWalt و Makita أصلية بضمان 6 شهور — نفس الجودة ديال الوكيل الرسمي ولكن بـ ثمن أرخص.",
  },
  {
    Icon: Shield,
    title: "طلب بلا مخاطر",
    desc: "100% الدفع عند التوصيل. ما كتخلص والو حتى توصلك الطلبية للدار وتفتح الكرطونة.",
  },
  {
    Icon: Clock,
    title: "تأكيد قبل الشحن",
    desc: "الفريق ديالنا كيعيط لكل زبون قبل ما نسيفطو الطلبية. بلا غلطات، بلا مشاكل.",
  },
  {
    Icon: Zap,
    title: "للحرفيين والمحترفين",
    desc: "نجارين، حدادين، معلمين البناء، ميكانيسيان، صنايعية الدار — كل واحد كيلقى الباك المناسب.",
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />

      <section className="bg-charcoal text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-cairo font-bold text-2xl md:text-3xl mb-5 leading-snug">
            الآلات الرخيصة كتخسر بسرعة. الأصلية غالية بزاف. الحل: باكات RafaTools.
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-6">
            كل صنايعي عارف — ملي كتخدم بآلة رخيصة، كتخسر فـ شي شهور. وملي كتشري من الوكيل، الثمن كيقتل الجيب.
            حنا كنجيبو آلات DeWalt و Makita أصلية مباشرة، بلا وسطاء، بـ باكات كاملة.
          </p>
          <p className="text-white/90 font-semibold text-base">
            جودة المحترفين، بـ ثمن يعجبك، مع الدفع عند التوصيل — بلا مخاطر.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-cairo font-bold text-ink text-3xl mb-3">الباكات ديالنا</h2>
            <p className="text-bodyGray text-base max-w-lg mx-auto">
              3 باكات احترافية: للحرفي البادئ، للمحترف، وللمقاول الكبير.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-softMint py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-cairo font-bold text-ink text-3xl mb-3">علاش RafaTools</h2>
            <p className="text-bodyGray text-base">
              أدوات احترافية، بـ ثمن معقول، ومصممة للحرفي المغربي.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_REASONS.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-border p-6 flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-softMint flex items-center justify-center">
                  <Icon size={20} className="text-emerald" />
                </div>
                <div>
                  <h3 className="font-cairo font-semibold text-ink text-sm mb-1">{title}</h3>
                  <p className="text-bodyGray text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProofPlaceholder />
      <CodProcess />
      <Faq faqs={HOME_FAQS} />
    </>
  )
}
