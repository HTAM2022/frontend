import Image from "next/image"
import { ShieldCheck, Zap, HeartPulse, BadgeCheck } from "lucide-react"
import type { Product } from "@/types/commerce"

interface ProductStoryProps {
  product: Product
}

const DEFAULT_STORY = {
  painBadge: "الواقع ديال المهنة",
  painTitle: "مصمم للحرفي المغربي الحقيقي.",
  painCopy1:
    "الخدمة كتحتاج آلات مزيانة، وكل واحد عندو بلاصتو. حنا كنجيبو ليك الأصلي بـ ثمن أرخص.",
  painCopy2: "الباك هذا خيرناه لأنه كيحل مشكل حقيقي، بلا زيادة ديال أشياء ما كتنفعش.",
  painPromise: "أدوات بسيطة. راحة تامة.",
  scienceBadge: "مصمم باش يدوم",
  scienceTitle: "جودة تدوم سنين.",
  scienceCopy:
    "كل الآلات مختارة على أساس الجودة والدوام، ماشي غير على الورقة ديال المواصفات.",
  scienceBullets: [
    { title: "قطع أصلية", body: "أفضل المواد باش تدوم على استعمال يومي." },
    { title: "تصميم عملي", body: "سهل للاستعمال، سهل للصيانة، جاهز فايما تحتاجو." },
  ],
}

export function ProductStory({ product }: ProductStoryProps) {
  const story = product.story ?? DEFAULT_STORY
  const heroImage = product.images?.[0]

  return (
    <section className="bg-white py-20 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Section 1: Image Left, Text Right (Pain & Emotion) */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 aspect-[4/3] relative bg-gradient-to-br from-[#E8F4EF] to-[#FFF8ED] rounded-3xl overflow-hidden shadow-sm border border-border">
            {heroImage ? (
              <Image
                src={heroImage}
                alt={product.englishName}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain p-8"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-bodyGray">
                <span className="text-sm font-medium">{product.englishName}</span>
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FEE2E2] text-[#991B1B] rounded-full text-xs font-bold tracking-wide uppercase">
              <Zap className="w-4 h-4" />
              {story.painBadge}
            </div>
            <h2 className="font-cairo font-bold text-3xl md:text-4xl text-ink leading-tight">
              {story.painTitle}
            </h2>
            <p className="text-lg text-bodyGray leading-relaxed">{story.painCopy1}</p>
            <p className="text-lg text-bodyGray leading-relaxed">{story.painCopy2}</p>
            <div className="pt-4 border-t border-border">
              <p className="text-emerald font-bold flex items-center gap-2 text-sm uppercase tracking-wide">
                <HeartPulse className="w-5 h-5" />
                {story.painPromise}
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Text Left, Image Right (Science & Proof) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 aspect-[4/3] relative bg-gradient-to-br from-[#E8F4EF] to-[#FFF8ED] rounded-3xl overflow-hidden shadow-sm border border-border">
            {heroImage ? (
              <Image
                src={heroImage}
                alt={product.englishName}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain p-8"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-bodyGray">
                <span className="text-sm font-medium">{product.englishName}</span>
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-softMint text-emerald rounded-full text-xs font-bold tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4" />
              {story.scienceBadge}
            </div>
            <h2 className="font-cairo font-bold text-3xl md:text-4xl text-ink leading-tight">
              {story.scienceTitle}
            </h2>
            <p className="text-lg text-bodyGray leading-relaxed">{story.scienceCopy}</p>
            <ul className="space-y-4 pt-2">
              {story.scienceBullets.map((b) => (
                <li key={b.title} className="flex items-start gap-3">
                  <div className="bg-emerald text-white p-1 rounded-full mt-1">
                    <BadgeCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-ink font-cairo block text-lg">{b.title}</strong>
                    <span className="text-bodyGray">{b.body}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 3: Image Left, Text Right (Authority & Warranty) */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 aspect-[4/3] relative bg-gradient-to-br from-[#E8F4EF] to-[#FFF8ED] rounded-3xl overflow-hidden shadow-sm border border-border">
            {heroImage ? (
              <Image
                src={heroImage}
                alt={product.englishName}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain p-8"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-bodyGray">
                <span className="text-sm font-medium">{product.englishName}</span>
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cream border border-warmGold text-[#92400E] rounded-full text-xs font-bold tracking-wide uppercase">
              <BadgeCheck className="w-4 h-4" />
              100% بلا مخاطر
            </div>
            <h2 className="font-cairo font-bold text-3xl md:text-4xl text-ink leading-tight">
              ضمان 6 شهور — راضي ولا نرجعو ليك الفلوس.
            </h2>
            <p className="text-lg text-bodyGray leading-relaxed">
              حنا واثقين فـ {product.englishName} — لهذا كنعطيوك ضمان 6 شهور كاملة. إلى ما خدماتش بحال ما قلنا ليك، نبدلوها ليك — بلا أسئلة.
            </p>
            <div className="bg-cream p-5 rounded-2xl border border-warmGold/30">
              <h4 className="font-cairo font-bold text-ink mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-warmGold" />
                الوعد ديالنا
              </h4>
              <p className="text-sm text-bodyGray leading-relaxed">
                RafaTools ماركة مصممة للحرفي المغربي. كل باك كيتسيفط مع دعم حقيقي، تأكيد بالتيليفون قبل الشحن، والدفع عند التوصيل. اطلب اليوم، جرب براسك، وخلص غير ملي توصلك الطلبية.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
