export const PRODUCTS = [
  {
    id: "lamp",
    slug: "lithium-blackout-battery-lamp",
    swahiliName: "Taa ya Betri ya Lithiamu kwa Kukatika kwa Stima Ghafla",
    englishName: "Lithium Blackout Battery Lamp",
    shortHeadline: "Be Ready When Stima Goes",
    cardSubheading:
      "A rechargeable lithium battery lamp for sudden blackouts at home, in the shop, or during evening routines.",
    primaryEmotion: "Calm during surprise power cuts.",
    basePriceKes: 6836,
    images: [
      "/images/placeholders/lamp-hero.jpg",
      "/images/placeholders/lamp-use-1.jpg",
      "/images/placeholders/lamp-use-2.jpg",
    ],
    specs: [
      { label: "Battery Capacity", value: "TBD from supplier" },
      { label: "Runtime", value: "TBD from supplier" },
      { label: "Charging Method", value: "TBD from supplier" },
      { label: "Modes/Brightness", value: "TBD from supplier" },
      { label: "Safety Certification", value: "Proof required before publishing" },
    ],
    bundleLabels: { 1: "Single Room Backup", 2: "Home Ready Pack", 3: "Family + Shop Pack" },
    crossSellPriority: ["solar", "powerstation"],
    defaultOfferQuantity: 2 as 1 | 2 | 3,
    benefits: [
      "Move safely during a blackout",
      "Keep children and family calm",
      "Useful in bedrooms, kitchens, shops, and corridors",
    ],
    useCases: [
      { icon: "Home", label: "Home", text: "Bedroom, corridor, kitchen lighting during cuts" },
      { icon: "Store", label: "Shop", text: "Counter and workspace backup light" },
      { icon: "Users", label: "Family", text: "Children doing homework or bathing" },
      { icon: "Zap", label: "Emergency", text: "First backup near the door" },
    ],
    faqs: [
      { q: "Can I pay on delivery?", a: "Yes. RafaTools is 100% COD. You pay only when the order arrives." },
      {
        q: "Will you call before dispatch?",
        a: "Yes. Our team calls to confirm your name, phone, and order before dispatch.",
      },
      { q: "Can I order 2 or 3 pieces?", a: "Yes. Choose 1, 2, or 3 pieces using the offer cards above." },
      {
        q: "What if I entered the wrong phone number?",
        a: "Let us know during the confirmation call and we will update your order.",
      },
      {
        q: "How do I charge or use it?",
        a: "Full usage instructions are included in the box. Spec details will be updated once confirmed from supplier.",
      },
    ],
  },
  {
    id: "solar",
    slug: "solar-motion-sensor-security-light",
    swahiliName: "Mulika wa Sola wenye Sensa ya Mwendo kwa Usalama wa Nyumba Usiku",
    englishName: "Solar Motion Sensor Security Light",
    shortHeadline: "Light Up Movement At Night",
    cardSubheading:
      "Solar-powered motion lighting for gates, compounds, balconies, corridors, and dark outdoor spots.",
    primaryEmotion: "Security before someone reaches the door.",
    basePriceKes: 6836,
    images: [
      "/images/placeholders/solar-hero.jpg",
      "/images/placeholders/solar-use-1.jpg",
      "/images/placeholders/solar-use-2.jpg",
    ],
    specs: [
      { label: "Solar Panel Wattage", value: "TBD from supplier" },
      { label: "Sensor Distance", value: "TBD from supplier" },
      { label: "Waterproof Rating", value: "TBD from supplier" },
      { label: "Battery Capacity", value: "TBD from supplier" },
      { label: "Certifications", value: "Proof required before publishing" },
    ],
    bundleLabels: { 1: "One Dark Spot", 2: "Gate + Back Area", 3: "Full Compound Setup" },
    crossSellPriority: ["lamp", "powerstation"],
    defaultOfferQuantity: 2 as 1 | 2 | 3,
    benefits: [
      "Motion-activated light for dark spots",
      "Solar charging for outdoor convenience",
      "Useful for gates, compounds, balconies, and walkways",
    ],
    useCases: [
      { icon: "Home", label: "Home Gate", text: "Light movement before it reaches your door" },
      { icon: "Building2", label: "Compound", text: "Illuminate dark outdoor areas automatically" },
      { icon: "Stairs", label: "Staircase", text: "Corridor and staircase lighting" },
      { icon: "Store", label: "Shop", text: "Outdoor shop or kiosk entrance security" },
    ],
    faqs: [
      { q: "Can I pay on delivery?", a: "Yes. RafaTools is 100% COD. You pay only when the order arrives." },
      {
        q: "Does it work without sunlight?",
        a: "It charges via solar panel. Spec details on battery backup will be updated from supplier.",
      },
      { q: "Can I order for multiple spots?", a: "Yes. The 3-piece bundle is ideal for a full compound setup." },
      {
        q: "Is it waterproof?",
        a: "Waterproof rating details will be confirmed from supplier. Designed for outdoor use.",
      },
      {
        q: "Will someone call before sending?",
        a: "Yes. Our team calls to confirm every COD order before dispatch.",
      },
    ],
  },
  {
    id: "powerstation",
    slug: "portable-power-station-300w",
    swahiliName: "Kituo cha Nishati Kinachobebeka 300W kwa Kuendeleza Kazi Bila Stima",
    englishName: "Portable Power Station 300W",
    shortHeadline: "Keep Work Moving Without Stima",
    cardSubheading:
      "Portable 300W backup power for phones, laptops, routers, lights, and small work essentials.",
    primaryEmotion: "Control when power cuts interrupt work.",
    basePriceKes: 6836,
    images: [
      "/images/placeholders/powerstation-hero.jpg",
      "/images/placeholders/powerstation-use-1.jpg",
      "/images/placeholders/powerstation-use-2.jpg",
    ],
    specs: [
      { label: "Capacity", value: "TBD from supplier" },
      { label: "AC Output", value: "300W" },
      { label: "Ports", value: "TBD from supplier" },
      { label: "Recharge Time", value: "TBD from supplier" },
      { label: "Battery Chemistry/Certifications", value: "Proof required before publishing" },
    ],
    bundleLabels: { 1: "Work Backup", 2: "Home + Business", 3: "Prepared Team Pack" },
    crossSellPriority: ["lamp", "solar"],
    defaultOfferQuantity: 1 as 1 | 2 | 3,
    benefits: [
      "Keep devices and work essentials running",
      "Reduce lost time during outages",
      "Portable backup for home or business",
    ],
    useCases: [
      { icon: "Laptop", label: "Remote Work", text: "Keep laptops and meetings going" },
      { icon: "Store", label: "Small Business", text: "Salon, barber, kiosk, cyber backup" },
      { icon: "Wifi", label: "Router & Phone", text: "Stay connected through outages" },
      { icon: "Briefcase", label: "Travel", text: "Field work and portable backup power" },
    ],
    faqs: [
      { q: "Can I pay on delivery?", a: "Yes. RafaTools is 100% COD. You pay only when the order arrives." },
      {
        q: "What devices can it power?",
        a: "Phones, laptops, routers, lights, and small appliances up to 300W. Full spec list coming from supplier.",
      },
      {
        q: "How long does it last?",
        a: "Runtime depends on the connected load. Capacity details will be confirmed from supplier.",
      },
      { q: "Can I use it outdoors?", a: "Yes. Designed for portable use at home, in the field, or at a shop." },
      {
        q: "Will someone call before sending?",
        a: "Yes. Our team calls to confirm every COD order before dispatch.",
      },
    ],
  },
]

export const OFFERS = [
  { quantity: 1, priceKes: 6836, badge: "Starter", label: "1 Piece" },
  { quantity: 2, priceKes: 9584, badge: "Most Practical", label: "2 Pieces" },
  { quantity: 3, priceKes: 11989, badge: "Best Value", label: "3 Pieces" },
]

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug) ?? null
}

export function getCrossSells(productId: string, cartProductIds: string[]) {
  const product = PRODUCTS.find((p) => p.id === productId)
  if (!product) return []
  return product.crossSellPriority
    .filter((id) => !cartProductIds.includes(id))
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean)
}
