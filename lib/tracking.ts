declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    ttq?: {
      track: (event: string, data: unknown, opts?: unknown) => void
      page: () => void
      load: (pixelId: string) => void
    }
    snaptr?: (action: string, event: string, data?: unknown) => void
  }
}

export function trackPageView() {
  if (typeof window === "undefined") return
  window.fbq?.("track", "PageView")
  window.ttq?.track("PageView", {})
  window.snaptr?.("track", "PAGE_VIEW")
}

export function trackViewContent(
  productId: string,
  productName: string,
  price: number,
  eventId: string,
) {
  if (typeof window === "undefined") return
  window.fbq?.(
    "track",
    "ViewContent",
    {
      content_ids: [productId],
      content_name: productName,
      content_type: "product",
      value: price,
      currency: "KES",
    },
    { eventID: eventId },
  )
  window.ttq?.track(
    "ViewContent",
    {
      content_type: "product",
      contents: [{ content_id: productId, content_name: productName }],
      value: price,
      currency: "KES",
    },
    { event_id: eventId },
  )
  window.snaptr?.("track", "VIEW_CONTENT", { item_ids: [productId], client_dedup_id: eventId })
}

export function trackAddToCart(
  productId: string,
  productName: string,
  price: number,
  eventId: string,
) {
  if (typeof window === "undefined") return
  window.fbq?.(
    "track",
    "AddToCart",
    {
      content_ids: [productId],
      content_name: productName,
      content_type: "product",
      value: price,
      currency: "KES",
    },
    { eventID: eventId },
  )
  window.ttq?.track(
    "AddToCart",
    {
      content_type: "product",
      contents: [{ content_id: productId, content_name: productName }],
      value: price,
      currency: "KES",
    },
    { event_id: eventId },
  )
  window.snaptr?.("track", "ADD_CART", { item_ids: [productId], client_dedup_id: eventId })
}

export function trackInitiateCheckout(totalKes: number, eventId: string) {
  if (typeof window === "undefined") return
  window.fbq?.(
    "track",
    "InitiateCheckout",
    { value: totalKes, currency: "KES", num_items: 1 },
    { eventID: eventId },
  )
  window.ttq?.track("InitiateCheckout", { value: totalKes, currency: "KES" }, { event_id: eventId })
  window.snaptr?.("track", "START_CHECKOUT", {
    price: totalKes,
    currency: "KES",
    client_dedup_id: eventId,
  })
}

export function trackPurchase(
  productIds: string[],
  totalKes: number,
  numItems: number,
  eventId: string,
  publicOrderId: string,
) {
  if (typeof window === "undefined") return
  window.fbq?.(
    "track",
    "Purchase",
    {
      value: totalKes,
      currency: "KES",
      content_ids: productIds,
      content_type: "product",
      num_items: numItems,
      payment_method: "cod",
      order_status: "received",
    },
    { eventID: eventId },
  )
  window.ttq?.track(
    "CompletePayment",
    {
      content_type: "product",
      contents: productIds.map((id) => ({ content_id: id, quantity: 1 })),
      value: totalKes,
      currency: "KES",
    },
    { event_id: eventId },
  )
  window.snaptr?.("track", "PURCHASE", {
    price: totalKes,
    currency: "KES",
    item_ids: productIds,
    transaction_id: publicOrderId,
    client_dedup_id: eventId,
  })
}
