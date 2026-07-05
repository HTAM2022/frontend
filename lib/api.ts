const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000"

export async function createOrder(payload: unknown): Promise<unknown> {
  const res = await fetch(`${API_BASE}/api/v1/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error((body as { detail?: string }).detail ?? `Order failed: ${res.status}`)
  }
  return res.json()
}

export async function submitUpsell(publicOrderId: string, payload: unknown): Promise<unknown> {
  const res = await fetch(`${API_BASE}/api/v1/orders/${publicOrderId}/upsell`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error(`Upsell failed: ${res.status}`)
  return res.json()
}

export async function getOrder(publicOrderId: string): Promise<unknown> {
  const res = await fetch(`${API_BASE}/api/v1/orders/${publicOrderId}`)
  if (!res.ok) throw new Error(`Order not found`)
  return res.json()
}
