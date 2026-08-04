export function normalizePhone(raw: string): string {
  let s = raw.replace(/[\s\-().]/g, "")
  if (s.startsWith("00")) s = "+" + s.slice(2)
  if (s.startsWith("+")) s = s.slice(1)
  if (s.startsWith("212")) {
    // already country-code prefixed
  } else if (s.startsWith("0")) {
    s = "212" + s.slice(1)
  } else if (/^[67]\d{8}$/.test(s)) {
    s = "212" + s
  }
  return "+" + s
}

export function isValidMoroccanPhone(phone: string): boolean {
  return /^\+212(?:6\d{8}|7\d{8})$/.test(phone)
}

// Backwards-compatible alias so existing imports keep working.
export const isValidKenyanPhone = isValidMoroccanPhone
