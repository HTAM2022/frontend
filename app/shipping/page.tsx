import type { Metadata } from "next"
import { Truck, MapPin, PhoneCall, Clock, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "التوصيل | RafaTools",
  description: "توصيل سريع لكل المغرب. الدفع عند التوصيل فقط. التوصيل فـ 24-48 ساعة للمدن الكبار و 3-5 يام للباقي.",
}

export default function ShippingPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-softMint py-16 md:py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-white mb-6 shadow-sm">
            <Truck size={32} className="text-emerald" />
          </div>
          <h1 className="font-cairo font-bold text-ink text-4xl md:text-5xl leading-tight mb-4">
            التوصيل
          </h1>
          <p className="text-bodyGray text-lg leading-relaxed max-w-2xl mx-auto">
            توصيل سريع وموثوق لكل المغرب.
            <strong className="text-emerald block mt-2">دائما 100% الدفع عند التوصيل.</strong>
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-16">

          <div className="space-y-6">
            <h2 className="font-cairo font-bold text-3xl text-ink">آجال التوصيل</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cream border border-border p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-warmGold" size={24} />
                  <h3 className="font-cairo font-bold text-ink text-xl">المدن الكبار</h3>
                </div>
                <div className="inline-block bg-white text-emerald font-bold px-3 py-1 rounded-full text-sm mb-4 border border-emerald/20">
                  24 إلى 48 ساعة
                </div>
                <ul className="space-y-2 text-bodyGray">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald" /> الدار البيضاء</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald" /> الرباط</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald" /> مراكش</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald" /> فاس</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald" /> طنجة</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald" /> أكادير</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald" /> مكناس</li>
                </ul>
              </div>

              <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-charcoal" size={24} />
                  <h3 className="font-cairo font-bold text-ink text-xl">باقي المدن</h3>
                </div>
                <div className="inline-block bg-softMint text-charcoal font-bold px-3 py-1 rounded-full text-sm mb-4 border border-emerald/20">
                  3 إلى 5 يام عمل
                </div>
                <p className="text-bodyGray leading-relaxed">
                  كنخدمو مع شركات توصيل موثوقة باش الطلبية توصلك فايما كنتي فـ المغرب. الفريق غادي يقول ليك
                  المكان بالضبط ديال الاستلام فـ العيطة ديال التأكيد.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-cairo font-bold text-3xl text-ink text-center">كيفاش كيخدم</h2>
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

              <div className="space-y-12">
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 flex md:justify-start">
                    <div className="bg-white border border-border p-6 rounded-2xl w-full md:max-w-sm relative z-10 shadow-sm">
                      <h4 className="font-cairo font-bold text-ink text-lg mb-2">1. اطلب الباك ديالك</h4>
                      <p className="text-bodyGray text-sm">دخل الاسم والتيليفون فـ الموقع. بلا معلومات ديال الخلاص.</p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-emerald rounded-full border-4 border-white items-center justify-center text-white font-bold z-20">1</div>
                  <div className="md:w-1/2" />
                </div>

                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2" />
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-emerald rounded-full border-4 border-white items-center justify-center text-white font-bold z-20">2</div>
                  <div className="md:w-1/2 flex md:justify-end">
                    <div className="bg-white border border-border p-6 rounded-2xl w-full md:max-w-sm relative z-10 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <PhoneCall size={18} className="text-emerald" />
                        <h4 className="font-cairo font-bold text-ink text-lg">2. تأكيد بالتيليفون</h4>
                      </div>
                      <p className="text-bodyGray text-sm">الفريق ديالنا كيعيط ليك فـ 24 ساعة باش يأكد العنوان والوقت.</p>
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 flex md:justify-start">
                    <div className="bg-white border border-border p-6 rounded-2xl w-full md:max-w-sm relative z-10 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock size={18} className="text-emerald" />
                        <h4 className="font-cairo font-bold text-ink text-lg">3. الشحن</h4>
                      </div>
                      <p className="text-bodyGray text-sm">الطلبية كتنكرطن وتنسيفط للليفرور (الدار/الرباط) ولا شركة توصيل للمدن الأخرى.</p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-emerald rounded-full border-4 border-white items-center justify-center text-white font-bold z-20">3</div>
                  <div className="md:w-1/2" />
                </div>

                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2" />
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-emerald rounded-full border-4 border-white items-center justify-center text-white font-bold z-20">4</div>
                  <div className="md:w-1/2 flex md:justify-end">
                    <div className="bg-cream border border-warmGold/30 p-6 rounded-2xl w-full md:max-w-sm relative z-10 shadow-sm">
                      <h4 className="font-cairo font-bold text-ink text-lg mb-2 text-emerald">4. الخلاص عند التوصيل</h4>
                      <p className="text-bodyGray text-sm">كتشوف الكرطونة، كتفتحها، وملي تكون راضي كتخلص الليفرور كاش. 100% بلا مخاطر.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-softMint/50 rounded-2xl p-8 text-center mt-12 border border-border">
            <h3 className="font-cairo font-bold text-xl text-ink mb-3">عندك أسئلة على التوصيل؟</h3>
            <p className="text-bodyGray mb-6">الفريق ديالنا موجود باش يساعدك تتبع الطلبية ديالك.</p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-emerald text-white px-6 py-3 rounded-xl font-bold hover:bg-deepEmerald transition-colors"
            >
              تواصل مع الدعم
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}
