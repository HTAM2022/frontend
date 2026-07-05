import { LucideIcon } from "lucide-react"
import { cn } from "@/components/ui/cn"

type Props = {
  label: string
  Icon?: LucideIcon
  className?: string
  aspectRatio?: "4/3" | "1/1" | "16/9"
}

export function PlaceholderImage({ label, Icon, className, aspectRatio = "4/3" }: Props) {
  const aspectClass =
    aspectRatio === "1/1" ? "aspect-square" : aspectRatio === "16/9" ? "aspect-video" : "aspect-[4/3]"

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl overflow-hidden",
        "bg-gradient-to-br from-emerald to-softMint",
        aspectClass,
        className,
      )}
    >
      {Icon && (
        <div className="mb-3 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
          <Icon size={24} className="text-white" />
        </div>
      )}
      <span className="text-white/90 font-medium text-sm text-center px-4">{label}</span>
    </div>
  )
}
