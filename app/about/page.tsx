import type { Metadata } from "next"
import { CheckCircle2, Shield, Banknote, Phone } from "lucide-react"
import { SITE } from "@/data/site"

export const metadata: Metadata = {
  title: "من نحن – RafaTools | أدوات احترافية للمغرب",
  description:
    "RafaTools كتبيع باكات آلات كهربائية احترافية DeWalt و Makita بـ الدفع عند التوصيل للحرفيين والمقاولين المغاربة.",
}

const QUALITY_POINTS = [
  "آلات DeWalt و Makita 100% أصلية — نفس الجودة ديال الوكيل الرسمي",
  "كنشريو مباشرة من المصنع بلا وسطاء باش نعطيوك ثمن معقول",
  "ضمان 6 شهور على كل الباكات ضد عيوب الصناعة",
  "بلا وعود كاذبة — كل شي واضح ومكتوب",
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-cream to-white py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-cairo font-bold text-ink text-4xl mb-4">من نحن</h1>
          <p className="text-bodyGray text-lg leading-relaxed">
            {SITE.promise} حنا كنساعدو الحرفيين، المقاولين والصنايعية المغاربة يحصلو على آلات احترافية بـ ثمن معقول.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-cairo font-bold text-ink text-2xl mb-4">المهمة ديالنا</h2>
          <p className="text-bodyGray leading-relaxed mb-4">
            كل صنايعي فـ المغرب عارف: الآلات الرخيصة كتخسر بسرعة، والأصلية كتكلف بزاف. أغلب الحرفيين
            كيبقاو يستعملو آلات ما كتخدمش مزيان لأن ثمن الوكيل الرسمي غالي بزاف.
          </p>
          <p className="text-bodyGray leading-relaxed mb-4">
            RafaTools كتحل هاذ المشكل — كنجيبو آلات DeWalt و Makita أصلية مباشرة من المصنع، بلا وسطاء،
            بـ باكات كاملة (2، 4 ولا 5 آلات + باطريات + شارجور + مالطة). النتيجة: نفس الجودة بـ نصف الثمن.
          </p>
          <p className="text-bodyGray leading-relaxed">
            كل طلبية كتأكد بالتيليفون قبل الشحن. كنعيطو ليك باش نتأكدو من الاسم والعنوان والطلبية. بلا مفاجآت.
          </p>
        </div>
      </section>

      <section className="bg-softMint py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-cairo font-bold text-ink text-2xl mb-6">كيفاش كيخدم الدفع عند التوصيل</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                Icon: Banknote,
                title: "بلا خلاص من قبل",
                desc: "كتخلص غير ملي كتوصلك الطلبية للدار. بلا تحويل، بلا كارت.",
              },
              {
                Icon: Phone,
                title: "تأكيد بالتيليفون",
                desc: "الفريق ديالنا كيعيط لكل زبون قبل الشحن. باش نتأكدو من الطلبية ونتجنبو الغلطات.",
              },
              {
                Icon: Shield,
                title: "بلا مخاطر",
                desc: "حيت كتخلص عند التوصيل، الطلبية بلا مخاطر. إلا كان شي مشكل، تقدر ترفض الطلبية.",
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-border p-5">
                <div className="w-10 h-10 rounded-lg bg-softMint flex items-center justify-center mb-3">
                  <Icon size={18} className="text-emerald" />
                </div>
                <h3 className="font-cairo font-semibold text-ink text-sm mb-2">{title}</h3>
                <p className="text-bodyGray text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-cairo font-bold text-ink text-2xl mb-6">المعايير ديالنا</h2>
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

      <section className="bg-charcoal text-white py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-cairo font-bold text-2xl mb-3">عندك سؤال؟</h2>
          <p className="text-white/70 mb-5">
            تواصل معنا فـ{" "}
            <a href={`mailto:${SITE.supportEmail}`} className="text-warmGold underline">
              {SITE.supportEmail}
            </a>
            . الفريق ديالنا متوفر قبل وبعد الطلبية.
          </p>
        </div>
      </section>
    </div>
  )
}
