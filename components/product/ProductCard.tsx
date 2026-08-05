import Image from "next/image"
import Link from "next/link"
import { Drill, Wrench, Hammer, Package, Briefcase } from "lucide-react"
import type { Product } from "@/types/commerce"
import { formatKes } from "@/lib/money"
import { cn } from "@/lib/utils"

const PRODUCT_ICONS: Record<string, React.ElementType> = {
  pack_dewalt_2: Drill,
  pack_makita_4: Wrench,
  pack_dewalt_4: Briefcase,
  pack_dewalt_5: Hammer,
}

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  const basePrice = product.basePriceKes
  const Icon = PRODUCT_ICONS[product.id] ?? Package
  const heroImage = product.images?.[0]

  return (
    <article
      className={cn(
        "bg-white rounded-3xl border border-[#E5E7EB] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group",
        className,
      )}
    >
      <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#E8F4EF] to-[#FFF8ED] flex flex-col items-center justify-center relative overflow-hidden">
        {heroImage ? (
          <Image
            src={heroImage}
            alt={product.englishName}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <>
            <Icon className="w-20 h-20 text-[#0F5C4A] opacity-20 mb-3 group-hover:scale-110 transition-transform duration-500" />
            <span className="text-xs font-bold tracking-widest text-[#0F5C4A] opacity-60 text-center px-4 uppercase">
              {product.englishName}
            </span>
          </>
        )}
        <span className="absolute top-4 right-4 bg-[#D99A29] text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm z-10">
          الدفع عند التوصيل
        </span>
      </div>

      <div className="min-w-0 p-5 sm:p-6 flex flex-col flex-1">
        <p className="text-xs font-semibold text-[#0F5C4A] mb-3 uppercase tracking-wider">
          آلات احترافية DeWalt / Makita
        </p>

        <h3 className="break-words font-bold text-xl text-[#111827] leading-tight mb-2">
          {product.englishName}
        </h3>

        <p className="break-words text-sm text-[#4B5563] leading-relaxed mb-4 flex-1">
          {product.cardSubheading}
        </p>

        <ul className="space-y-2 mb-6">
          {product.benefits.slice(0, 3).map((bullet) => (
            <li
              key={bullet}
              className="flex min-w-0 items-start gap-2 text-sm text-[#1F2937] font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F5C4A] flex-shrink-0 mt-1.5" />
              <span className="min-w-0 break-words">{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-[#E5E7EB]/70 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-[#4B5563] font-medium">ابتداء من</span>
            <span className="text-xl font-bold text-[#0F5C4A]">{formatKes(basePrice)}</span>
          </div>
          <Link
            href={`/products/${product.slug}`}
            className="bg-[#0F5C4A] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#073B31] transition-colors shadow-md hover:shadow-lg"
          >
            شوف العرض
          </Link>
        </div>
      </div>
    </article>
  )
}
