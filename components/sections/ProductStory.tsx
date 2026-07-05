import { ShieldCheck, Zap, HeartPulse, BadgeCheck } from "lucide-react"

interface ProductStoryProps {
  productName: string
}

export function ProductStory({ productName }: ProductStoryProps) {
  return (
    <section className="bg-white py-20 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* Section 1: Image Left, Text Right (Pain & Emotion) */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 aspect-[4/3] relative bg-[#F3F4F6] rounded-3xl overflow-hidden shadow-sm border border-border">
            {/* Image Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-bodyGray">
              <span className="text-sm font-medium">Image: Family/Business during blackout</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FEE2E2] text-[#991B1B] rounded-full text-xs font-bold tracking-wide uppercase">
              <Zap className="w-4 h-4" />
              The Kenyan Reality
            </div>
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-ink leading-tight">
              Don&apos;t let KPLC blackouts put your family or business on hold.
            </h2>
            <p className="text-lg text-bodyGray leading-relaxed">
              Whether you are a mother trying to help your kids finish their homework in the dark, a father securing your compound at night, or a business owner trying to serve customers when Stima goes—sudden power cuts kill your momentum.
            </p>
            <p className="text-lg text-bodyGray leading-relaxed">
              We know the frustration. The {productName} is designed to instantly restore control, keeping the lights on, the devices charged, and the compound safe when the grid fails you.
            </p>
            <div className="pt-4 border-t border-border">
              <p className="text-emerald font-bold flex items-center gap-2 text-sm uppercase tracking-wide">
                <HeartPulse className="w-5 h-5" /> 
                Keep your peace of mind intact.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Text Left, Image Right (Science & Proof) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 aspect-[4/3] relative bg-[#F3F4F6] rounded-3xl overflow-hidden shadow-sm border border-border">
            {/* Image Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-bodyGray">
              <span className="text-sm font-medium">Image: Product durability / Engineering specs</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-softMint text-emerald rounded-full text-xs font-bold tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4" />
              The Science
            </div>
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-ink leading-tight">
              Engineered for tough conditions. Built to last.
            </h2>
            <p className="text-lg text-bodyGray leading-relaxed">
              Not all tools survive the Kenyan climate. The {productName} features upgraded battery cores and intelligent circuit protection to prevent overcharging.
            </p>
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <div className="bg-emerald text-white p-1 rounded-full mt-1">
                  <BadgeCheck className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-ink font-sora block text-lg">Surge Protection</strong>
                  <span className="text-bodyGray">Protects against power spikes when Stima returns.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-emerald text-white p-1 rounded-full mt-1">
                  <BadgeCheck className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-ink font-sora block text-lg">Maximum Efficiency</strong>
                  <span className="text-bodyGray">Smart energy draw ensures your battery lasts longer when you need it most.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: Image Left, Text Right (Authority & Warranty) */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 aspect-[4/3] relative bg-[#F3F4F6] rounded-3xl overflow-hidden shadow-sm border border-border">
            {/* Image Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-bodyGray">
              <span className="text-sm font-medium">Image: Trust badges / Customer holding product</span>
            </div>
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
              We are so confident in the quality of the {productName} that we offer a full 30-day warranty. If it doesn&apos;t work as described, we replace it.
            </p>
            <div className="bg-cream p-5 rounded-2xl border border-warmGold/30">
              <h4 className="font-sora font-bold text-ink mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-warmGold" />
                Our Promise to You
              </h4>
              <p className="text-sm text-bodyGray leading-relaxed">
                Over 4,000 homes in Nairobi, Mombasa, and across Kenya trust RafaTools to keep their families safe and their businesses running. Order today, pay ONLY on delivery, and test it yourself.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
