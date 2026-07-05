export function normalizePhone(raw: string): string {
  let s = raw.replace(/[\s\-().]/g, "")
  if (s.startsWith("+")) s = s.slice(1)
  if (s.startsWith("254")) s = s
  else if (s.startsWith("0")) s = "254" + s.slice(1)
  else if (/^[716]\d{8}$/.test(s)) s = "254" + s
  return "+" + s
}

export function isValidKenyanPhone(phone: string): boolean {
  return /^\+254(?:7\d{8}|1\d{8}|6\d{8})$/.test(phone)
}
