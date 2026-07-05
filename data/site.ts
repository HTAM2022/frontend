export const SITE = {
  name: "RafaTools",
  tagline: "Power & Security Tools",
  promise: "Power and safety essentials for Kenyan homes.",
  metaTitle: "RafaTools – Power & Security Tools for Kenya",
  metaDescription:
    "Premium backup power and security lighting essentials for Kenyan homes, shops, salons, and workspaces. Order online, confirm by phone, pay on delivery.",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@rafatools.online",
  supportPhone: process.env.NEXT_PUBLIC_SUPPORT_PHONE ?? "",
  supportWhatsapp: process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP ?? "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rafatools.online",
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000",
}

export const HOME_FAQS = [
  {
    q: "Do I pay before delivery?",
    a: "No. RafaTools uses COD (Cash on Delivery). You only pay when the order arrives.",
  },
  {
    q: "Where do you deliver?",
    a: "We deliver across Kenya. Our team confirms coverage when they call to verify your order.",
  },
  {
    q: "Will someone call me first?",
    a: "Yes. Our team calls every customer to confirm the order before dispatch. Please keep your phone available.",
  },
  {
    q: "Can I order more than one piece?",
    a: "Yes. Each product has 1, 2, or 3 piece bundle options. Bundles offer better value per piece.",
  },
  {
    q: "How do I know which product is right for me?",
    a: "Browse the product pages for use cases and benefits. Our team can also guide you during the confirmation call.",
  },
]

export const COD_STEPS = [
  {
    step: 1,
    title: "Choose your offer",
    desc: "Pick 1, 2, or 3 pieces depending on your home or shop setup.",
  },
  {
    step: 2,
    title: "Enter your name and phone",
    desc: "No long forms. Just your name and Kenyan mobile number.",
  },
  {
    step: 3,
    title: "We call to confirm",
    desc: "Our team calls before dispatch to verify your order.",
  },
  {
    step: 4,
    title: "Your order is dispatched",
    desc: "Once confirmed, we dispatch to your location.",
  },
  {
    step: 5,
    title: "You pay when it arrives",
    desc: "Pay only when you receive the order. No upfront payment.",
  },
]
