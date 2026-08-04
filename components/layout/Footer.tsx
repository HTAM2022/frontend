import Link from "next/link"
import { SITE } from "@/data/site"

export function Footer() {
  return (
    <footer className="bg-deepEmerald text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-white font-cairo font-bold text-base">R</span>
              </div>
              <div>
                <div className="font-cairo font-bold text-white text-[15px]">RafaTools</div>
                <div className="text-white/60 text-[11px]">أدوات احترافية</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">{SITE.promise}</p>
          </div>

          <div>
            <h4 className="font-cairo font-semibold text-white text-sm mb-4">المنتجات</h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/products/pack-dewalt-2-outils"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  باك DeWalt 2 آلات
                </Link>
              </li>
              <li>
                <Link
                  href="/products/pack-makita-4-outils"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  باك Makita 4 آلات
                </Link>
              </li>
              <li>
                <Link
                  href="/products/pack-dewalt-5-outils"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  باك DeWalt 5 آلات كامل
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  كل المنتجات
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-cairo font-semibold text-white text-sm mb-4">المساعدة</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-white/70 text-sm hover:text-white transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-white/70 text-sm hover:text-white transition-colors">
                  التوصيل
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-white/70 text-sm hover:text-white transition-colors">
                  أسئلة شائعة
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-cairo font-semibold text-white text-sm mb-4">تواصل</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${SITE.supportEmail}`}
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  {SITE.supportEmail}
                </a>
              </li>
              {SITE.supportPhone && (
                <li>
                  <a
                    href={`tel:${SITE.supportPhone}`}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {SITE.supportPhone}
                  </a>
                </li>
              )}
              {SITE.supportWhatsapp && (
                <li>
                  <a
                    href={`https://wa.me/${SITE.supportWhatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    واتساب
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 mb-4">
          <p className="text-center text-white/60 text-sm">
            <span className="text-warmGold font-semibold">100% الدفع عند التوصيل</span> — كتخلص غير ملي كتوصلك الطلبية للدار. بلا كون شي خلاص من قبل.
          </p>
        </div>

        <div className="text-center text-white/40 text-xs">
          &copy; {new Date().getFullYear()} RafaTools. جميع الحقوق محفوظة. الدار البيضاء، المغرب.
        </div>
      </div>
    </footer>
  )
}
