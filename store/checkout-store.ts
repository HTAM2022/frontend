import { create } from "zustand"
import type { OrderResponse } from "@/types/commerce"

type UpsellProduct = {
  slug: string
  name: string
  priceKes: number
}

type CheckoutState = {
  isCheckoutOpen: boolean
  isUpsellOpen: boolean
  isSubmitting: boolean
  order: OrderResponse | null
  currentOrderId: string | null
  upsellProduct: UpsellProduct | null
  error: string | null
  openCheckout: () => void
  closeCheckout: () => void
  openUpsell: () => void
  closeUpsell: () => void
  setSubmitting: (v: boolean) => void
  setOrder: (order: OrderResponse) => void
  setCurrentOrderId: (id: string) => void
  setUpsellProduct: (p: UpsellProduct | null) => void
  setError: (err: string | null) => void
}

export const useCheckoutStore = create<CheckoutState>()((set) => ({
  isCheckoutOpen: false,
  isUpsellOpen: false,
  isSubmitting: false,
  order: null,
  currentOrderId: null,
  upsellProduct: null,
  error: null,
  openCheckout: () => set({ isCheckoutOpen: true, error: null }),
  closeCheckout: () => set({ isCheckoutOpen: false }),
  openUpsell: () => set({ isUpsellOpen: true }),
  closeUpsell: () => set({ isUpsellOpen: false }),
  setSubmitting: (v) => set({ isSubmitting: v }),
  setOrder: (order) => set({ order }),
  setCurrentOrderId: (id) => set({ currentOrderId: id }),
  setUpsellProduct: (p) => set({ upsellProduct: p }),
  setError: (err) => set({ error: err }),
}))
