import { create } from "zustand"

interface OfferState {
  selectedQuantities: Record<string, 1 | 2 | 3>
  setQuantity: (productId: string, quantity: 1 | 2 | 3) => void
  getQuantity: (productId: string, defaultQty: 1 | 2 | 3) => 1 | 2 | 3
}

export const useOfferStore = create<OfferState>((set, get) => ({
  selectedQuantities: {},
  setQuantity: (productId, quantity) =>
    set((state) => ({
      selectedQuantities: {
        ...state.selectedQuantities,
        [productId]: quantity,
      },
    })),
  getQuantity: (productId, defaultQty) => {
    return get().selectedQuantities[productId] ?? defaultQty
  },
}))
