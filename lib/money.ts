export function formatKes(amount: number): string {
  return `KES ${amount.toLocaleString("en-KE")}`
}

export function perPiecePrice(total: number, qty: number): number {
  return Math.round(total / qty)
}
