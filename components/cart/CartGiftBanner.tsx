"use client"

import type { CartItem } from "@/types/commerce"

type Props = {
  items: CartItem[]
}

// Free-gift feature disabled for the tool-pack catalogue.
// Kept as a no-op component so existing imports continue to work.
export function CartGiftBanner(_props: Props) {
  return null
}
