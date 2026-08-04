import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { CartItem } from "@/types/commerce"

type CartState = {
  items: CartItem[]
  isDrawerOpen: boolean
  addItem: (item: Omit<CartItem, "cartItemId" | "addedAt">) => void
  removeItem: (cartItemId: string) => void
  clearCart: () => void
  openDrawer: () => void
  closeDrawer: () => void
  total: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isDrawerOpen: false,
      addItem: (item) => {
        set((state) => {
          const existing = state.items.findIndex(
            (i) => i.productId === item.productId && item.source === "product_page",
          )
          const cartItemId = crypto.randomUUID()
          const newItem: CartItem = { ...item, cartItemId, addedAt: new Date().toISOString() }
          if (existing >= 0 && item.source === "product_page") {
            const updated = [...state.items]
            updated[existing] = newItem
            return { items: updated }
          }
          return { items: [...state.items, newItem] }
        })
      },
      removeItem: (cartItemId) =>
        set((state) => ({ items: state.items.filter((i) => i.cartItemId !== cartItemId) })),
      clearCart: () => set({ items: [] }),
      openDrawer: () => set({ isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),
      total: () => get().items.reduce((sum, i) => sum + i.totalPriceKes, 0),
    }),
    {
      name: "rafa-cart",
      version: 3,
      migrate: () => ({
        items: [],
        isDrawerOpen: false,
        addItem: () => {},
        removeItem: () => {},
        clearCart: () => {},
        openDrawer: () => {},
        closeDrawer: () => {},
        total: () => 0,
      }),
    },
  ),
)
