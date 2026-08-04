const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000"

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

type SiteEventPayload = {
  event_name: string
  event_id?: string
  path?: string
  url?: string
  referrer?: string
  product_id?: string
  product_slug?: string
  value_kes?: number
  metadata?: Record<string, unknown>
}

export function recordSiteEvent(payload: SiteEventPayload) {
  if (typeof window === "undefined") return
  if (window.location.pathname.startsWith("/admin")) return

  const body = JSON.stringify({
    path: window.location.pathname,
    url: window.location.href,
    referrer: document.referrer || undefined,
    ...payload,
  })

  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: "application/json" })
    navigator.sendBeacon(`${API_BASE}/api/v1/track`, blob)
    return
  }

  fetch(`${API_BASE}/api/v1/track`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => undefined)
}

export function trackPageView() {
  if (typeof window === "undefined") return
  recordSiteEvent({ event_name: "PageView" })
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
  recordSiteEvent({
    event_name: "ViewContent",
    event_id: eventId,
    product_id: productId,
    product_slug: productId,
    value_kes: price,
    metadata: { product_name: productName },
  })
  window.fbq?.(
    "track",
    "ViewContent",
    {
      content_ids: [productId],
      content_name: productName,
      content_type: "product",
      value: price,
      currency: "MAD",
    },
    { eventID: eventId },
  )
  window.ttq?.track(
    "ViewContent",
    {
      content_type: "product",
      contents: [{ content_id: productId, content_name: productName }],
      value: price,
      currency: "MAD",
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
  recordSiteEvent({
    event_name: "AddToCart",
    event_id: eventId,
    product_id: productId,
    product_slug: productId,
    value_kes: price,
    metadata: { product_name: productName },
  })
  window.fbq?.(
    "track",
    "AddToCart",
    {
      content_ids: [productId],
      content_name: productName,
      content_type: "product",
      value: price,
      currency: "MAD",
    },
    { eventID: eventId },
  )
  window.ttq?.track(
    "AddToCart",
    {
      content_type: "product",
      contents: [{ content_id: productId, content_name: productName }],
      value: price,
      currency: "MAD",
    },
    { event_id: eventId },
  )
  window.snaptr?.("track", "ADD_CART", { item_ids: [productId], client_dedup_id: eventId })
}

export function trackInitiateCheckout(totalKes: number, eventId: string) {
  if (typeof window === "undefined") return
  recordSiteEvent({ event_name: "InitiateCheckout", event_id: eventId, value_kes: totalKes })
  window.fbq?.(
    "track",
    "InitiateCheckout",
    { value: totalKes, currency: "MAD", num_items: 1 },
    { eventID: eventId },
  )
  window.ttq?.track("InitiateCheckout", { value: totalKes, currency: "MAD" }, { event_id: eventId })
  window.snaptr?.("track", "START_CHECKOUT", {
    price: totalKes,
    currency: "MAD",
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
  recordSiteEvent({
    event_name: "Purchase",
    event_id: eventId,
    value_kes: totalKes,
    metadata: { product_ids: productIds, num_items: numItems, public_order_id: publicOrderId },
  })
  window.fbq?.(
    "track",
    "Purchase",
    {
      value: totalKes,
      currency: "MAD",
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
      currency: "MAD",
    },
    { event_id: eventId },
  )
  window.snaptr?.("track", "PURCHASE", {
    price: totalKes,
    currency: "MAD",
    item_ids: productIds,
    transaction_id: publicOrderId,
    client_dedup_id: eventId,
  })
}
