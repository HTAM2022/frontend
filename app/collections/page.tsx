import type { Metadata } from "next"
import { ShieldCheck, Package, Banknote } from "lucide-react"
import { ProductCard } from "@/components/product/ProductCard"
import { PRODUCTS } from "@/data/products"
import { Faq } from "@/components/sections/Faq"
import { HOME_FAQS } from "@/data/site"

export const metadata: Metadata = {
  title: "المنتجات – RafaTools | المغرب",
  description:
    "شوف باكات الآلات ديال RafaTools: DeWalt و Makita احترافية بـ الدفع عند التوصيل. توصيل لكل المغرب.",
}

const FILTER_CHIPS = ["كل المنتجات", "باكات DeWalt", "باكات Makita", "الباك الكامل"]

export default function CollectionsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream to-white py-12 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-cairo font-bold text-ink text-4xl mb-3">كل المنتجات</h1>
          <p className="text-bodyGray text-base max-w-lg mx-auto">
            باكات آلات كهربائية احترافية DeWalt و Makita للحرفيين، المقاولين، والصنايعية فـ المغرب. الدفع عند التوصيل فقط.
          </p>
        </div>
      </section>

      <section className="bg-white border-b border-border py-4 sticky top-16 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {FILTER_CHIPS.map((chip, i) => (
              <button
                key={chip}
                className={`shrink-0 text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                  i === 0
                    ? "bg-emerald text-white border-emerald"
                    : "bg-white text-bodyGray border-border hover:border-emerald hover:text-emerald"
                }`}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-softMint py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-cairo font-bold text-ink text-2xl mb-4">
            اطلب 2 ولا 3 باكات وربح أكثر
          </h2>
          <p className="text-bodyGray text-base mb-6 leading-relaxed">
            كل باك عندو خصم ملي كتطلب 2 ولا 3. مثالي للورشات الكبار، للفريق ديال العمال، ولاش تعطي لخوك ولا لصاحبك.
          </p>
          <div className="inline-flex items-center gap-2 bg-white border border-border rounded-xl px-5 py-3">
            <Package size={18} className="text-emerald" />
            <span className="text-ink text-sm font-medium">
              خصم 5% على 2 باكات &nbsp;|&nbsp; خصم 7% على 3 باكات
            </span>
          </div>
        </div>
      </section>

      <section className="bg-deepEmerald text-white py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { Icon: Banknote, text: "كتخلص غير ملي كتوصلك الطلبية. بلا خلاص من قبل." },
              { Icon: ShieldCheck, text: "الفريق ديالنا كيعيط قبل الشحن باش يأكد الطلبية." },
              { Icon: Package, text: "ضمان 6 شهور على كل الآلات." },
            ].map(({ Icon, text }, i) => (
              <div key={i} className="flex items-start gap-3">
                <Icon size={20} className="text-warmGold shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq faqs={HOME_FAQS} title="أسئلة شائعة" />
    </>
  )
}
