import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Attribution } from "@/types/commerce"

type AttributionState = {
  attribution: Attribution
  setAttribution: (a: Partial<Attribution>) => void
}

const defaultAttribution: Attribution = {
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  utmContent: "",
  utmTerm: "",
  fbclid: "",
  ttclid: "",
  scCid: "",
  landingPageUrl: "",
  referrer: "",
  firstSeenAt: "",
}

export const useAttributionStore = create<AttributionState>()(
  persist(
    (set) => ({
      attribution: defaultAttribution,
      setAttribution: (a) =>
        set((state) => ({ attribution: { ...state.attribution, ...a } })),
    }),
    { name: "rafa-attribution" },
  ),
)
