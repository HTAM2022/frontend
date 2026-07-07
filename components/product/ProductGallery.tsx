"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/components/ui/cn"

type Props = {
  images: string[]
  productName: string
}

export function ProductGallery({ images, productName }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
      setSelectedIndex(index)
    },
    [emblaApi],
  )

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    setSelectedIndex((i) => (i - 1 + images.length) % images.length)
  }, [emblaApi, images.length])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    setSelectedIndex((i) => (i + 1) % images.length)
  }, [emblaApi, images.length])

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#E8F4EF] to-[#FFF8ED]">
        <div ref={emblaRef} className="overflow-hidden h-full">
          <div className="flex h-full">
            {images.map((src, idx) => (
              <div
                key={src + idx}
                className="relative flex-none w-full h-full"
              >
                <Image
                  src={src}
                  alt={`${productName} – view ${idx + 1}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority={idx === 0}
                  className="object-contain p-6"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} className="text-ink" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow"
              aria-label="Next image"
            >
              <ChevronRight size={16} className="text-ink" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((src, idx) => (
            <button
              key={src + idx}
              onClick={() => scrollTo(idx)}
              className={cn(
                "relative flex-1 aspect-[4/3] rounded-lg overflow-hidden transition-all border-2",
                "bg-gradient-to-br from-[#E8F4EF] to-[#FFF8ED]",
                selectedIndex === idx
                  ? "border-emerald shadow-sm"
                  : "border-transparent opacity-60 hover:opacity-80",
              )}
              aria-label={`View image ${idx + 1}`}
            >
              <Image
                src={src}
                alt={`${productName} – thumbnail ${idx + 1}`}
                fill
                sizes="120px"
                className="object-contain p-2"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
