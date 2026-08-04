import Link from "next/link"
import { CheckCircle2, Zap, Shield, Wrench, Drill, Hammer } from "lucide-react"

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-cream to-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-softMint text-emerald text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <Shield size={12} />
              أدوات احترافية للمغرب
            </div>

            <h1 className="font-cairo font-bold text-ink text-4xl md:text-5xl leading-tight mb-5">
              باكات آلات DeWalt و Makita احترافية. جودة المحترفين، بـ ثمن يعجبك.
            </h1>

            <p className="text-bodyGray text-lg mb-6 leading-relaxed">
              فيسوز، ميلوز، مرطو SDS، منشار دائري — كل شي فـ باك واحد بـ باطريات كبار وشارجور.
              كنسيفطو لكل المغرب، الدفع عند التوصيل، ضمان 6 شهور.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "بلا خلاص من قبل — 100% الدفع عند التوصيل",
                "الفريق ديالنا كيعيط ليك باش يأكد قبل الشحن",
                "ضمان 6 شهور على كل الآلات",
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald shrink-0" />
                  <span className="text-bodyGray">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/collections"
                className="inline-flex items-center justify-center gap-2 bg-emerald text-white font-cairo font-bold text-base px-7 py-4 rounded-xl hover:bg-deepEmerald transition-colors"
              >
                <Zap size={18} />
                شوف كل الباكات
              </Link>
              <Link
                href="#cod-process"
                className="inline-flex items-center justify-center font-semibold text-emerald text-base px-7 py-4 rounded-xl border border-emerald hover:bg-softMint transition-colors"
              >
                كيفاش كيخدم؟
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald to-deepEmerald flex flex-col items-center justify-center overflow-hidden shadow-xl">
                <div className="grid grid-cols-3 gap-3 p-6 w-full">
                  {[
                    { Icon: Drill, label: "فيسوز-بيرسوز" },
                    { Icon: Wrench, label: "ميلوز + كلي" },
                    { Icon: Hammer, label: "مرطو SDS" },
                  ].map(({ Icon, label }, i) => (
                    <div
                      key={i}
                      className="bg-white/10 rounded-xl p-4 flex flex-col items-center gap-2"
                    >
                      <Icon size={24} className="text-warmGold" />
                      <span className="text-white text-xs text-center font-medium">{label}</span>
                    </div>
                  ))}
                </div>
                <div className="px-6 pb-6 w-full text-center">
                  <p className="text-white/80 text-sm">
                    3 باكات. مهمة وحدة: تخدم بحال المحترفين، بـ ثمن يعجبك.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-warmGold text-white rounded-xl px-4 py-3 shadow-lg">
                <p className="font-cairo font-bold text-sm">100% COD</p>
                <p className="text-white/80 text-xs">الدفع عند التوصيل</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
