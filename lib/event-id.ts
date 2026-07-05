export function genId(): string {
  return crypto.randomUUID()
}

export function pageviewId(): string {
  return `pv_${genId()}`
}

export function viewContentId(slug: string): string {
  return `vc_${slug}_${genId()}`
}

export function addToCartId(slug: string): string {
  return `atc_${slug}_${genId()}`
}

export function initiateCheckoutId(): string {
  return `ic_${genId()}`
}

export function purchaseId(attemptId: string): string {
  return `purchase_${attemptId}_${genId()}`
}

export function upsellId(orderId: string): string {
  return `upsell_${orderId}_${genId()}`
}
