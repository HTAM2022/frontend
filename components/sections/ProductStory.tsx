import Image from "next/image"
import { ShieldCheck, Zap, HeartPulse, BadgeCheck } from "lucide-react"
import type { Product } from "@/types/commerce"

interface ProductStoryProps {
  product: Product
}

const DEFAULT_STORY = {
  painBadge: "The Kenyan Reality",
  painTitle: "Built for real problems Kenyan families face every day.",
  painCopy1:
    "Whether it's blackouts, dark compounds, or unsafe walks home — some problems have quiet, practical solutions that make life easier.",
  painCopy2: "This product was chosen because it directly solves that problem, without gimmicks.",
  painPromise: "Small tools. Real peace of mind.",
  scienceBadge: "Built To Last",
  scienceTitle: "Engineered for tough Kenyan conditions.",
  scienceCopy:
    "Every product in our range is selected for durability, safety, and real-world use — not for flashy specs.",
  scienceBullets: [
    { title: "Quality Components", body: "Upgraded parts chosen to survive daily use." },
    { title: "Practical Design", body: "Simple to use, easy to maintain, ready when you need it." },
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
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-ink leading-tight">
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
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-ink leading-tight">
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
                    <strong className="text-ink font-sora block text-lg">{b.title}</strong>
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
              100% Risk-Free
            </div>
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-ink leading-tight">
              30-Day Money-Back Warranty.
            </h2>
            <p className="text-lg text-bodyGray leading-relaxed">
              We are so confident in the {product.englishName} that we offer a full 30-day warranty. If it doesn&apos;t work as described, we replace it — no questions asked.
            </p>
            <div className="bg-cream p-5 rounded-2xl border border-warmGold/30">
              <h4 className="font-sora font-bold text-ink mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-warmGold" />
                Our Promise to You
              </h4>
              <p className="text-sm text-bodyGray leading-relaxed">
                RafaTools is a Kenyan-focused brand. Every product ships with a real support line, phone confirmation before dispatch, and pay-on-arrival. Order today, test it yourself, and only pay when it&apos;s in your hands.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
