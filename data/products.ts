export const PRODUCTS = [
  {
    id: "bulb",
    slug: "rechargeable-emergency-led-bulb",
    swahiliName: "Balbu ya LED ya Dharura ya Kuchaji Tena kwa Umeme Ukikatika",
    englishName: "Rechargeable Emergency LED Bulb",
    shortHeadline: "Light Stays On When Stima Cuts",
    cardSubheading:
      "Screws into any normal socket. Charges while the power is on. Turns on automatically the second KPLC dies — up to 12 hours of light.",
    primaryEmotion: "No more sitting in the dark when power cuts.",
    basePriceKes: 6836,
    images: [
      "/images/products/bulb-hero.png",
    ],
    specs: [
      { label: "Base Type", value: "E27 (standard screw socket)" },
      { label: "Battery Chemistry", value: "LiFePO4 (safer, longer life)" },
      { label: "Runtime", value: "Up to 12 hours on full charge" },
      { label: "Auto-On", value: "Yes — activates instantly when power fails" },
      { label: "Detachable Battery", value: "Yes — use as a torch anywhere" },
      { label: "Safety Certification", value: "Proof required before publishing" },
    ],
    bundleLabels: { 1: "Single Room Backup", 2: "Home Ready Pack", 3: "Family + Shop Pack" },
    crossSellPriority: ["solar", "alarm"],
    defaultOfferQuantity: 2 as 1 | 2 | 3,
    benefits: [
      "Turns on automatically when KPLC cuts power",
      "Screws into any normal E27 socket — no wiring, no setup",
      "Detachable battery works as a portable torch",
    ],
    useCases: [
      { icon: "Home", label: "Home", text: "Bedroom, kitchen, corridor stays lit during blackouts" },
      { icon: "Store", label: "Shop", text: "Counter and workspace backup light" },
      { icon: "Users", label: "Family", text: "Children keep studying, dinner stays on the table" },
      { icon: "Zap", label: "Emergency", text: "Backup light where you already have a socket" },
    ],
    faqs: [
      { q: "Can I pay on delivery?", a: "Yes. RafaTools is 100% COD. You pay only when the order arrives." },
      {
        q: "Will you call before dispatch?",
        a: "Yes. Our team calls to confirm your name, phone, and order before dispatch.",
      },
      { q: "Can I order 2 or 3 pieces?", a: "Yes. Choose 1, 2, or 3 pieces using the offer cards above." },
      {
        q: "How does it charge?",
        a: "It charges automatically whenever your wall switch is ON. No cables needed.",
      },
      {
        q: "Does it fit my socket?",
        a: "Yes. It uses the standard E27 screw base found in most Kenyan homes and shops.",
      },
    ],
    story: {
      painBadge: "The Kenyan Reality",
      painTitle: "Don't let KPLC blackouts leave your family in the dark.",
      painCopy1:
        "Whether you are a mother trying to help your kids finish homework, a shopkeeper about to close a sale, or a parent putting a baby to bed — sudden blackouts kill your evening.",
      painCopy2:
        "The Rechargeable Emergency LED Bulb screws into any socket you already own and turns on the second stima cuts. No wiring. No candles. No panic.",
      painPromise: "Keep the lights on. Keep your peace of mind.",
      scienceBadge: "How It Works",
      scienceTitle: "Charges while stima is ON. Lights the room the moment it goes.",
      scienceCopy:
        "Inside the bulb is a LiFePO4 lithium battery — the same chemistry used in solar systems — which lasts far longer than the cheap Li-ion cells in most emergency bulbs.",
      scienceBullets: [
        { title: "Auto-On Blackout Detection", body: "Zero delay when KPLC cuts. The bulb keeps glowing." },
        { title: "12-Hour Runtime", body: "One full charge lights a room for a full evening and night." },
      ],
    },
    reviews: [
      { initials: "JM", location: "Nairobi", text: '"When stima cuts, my kids used to cry. Now the bulb just stays on and homework continues. Best 6,800 shillings I have ever spent."' },
      { initials: "AW", location: "Mombasa", text: '"I bought two for my shop. Even when the whole street is dark, my counter stays lit. Customers still come in."' },
      { initials: "FK", location: "Kisumu", text: '"They called me before delivery, boda brought it same day, I paid only when I opened the box. Very safe."' },
    ],
  },
  {
    id: "solar",
    slug: "solar-motion-security-light-1500lm",
    swahiliName: "Mulika wa Sola wa Usalama wenye Sensa ya Mwendo, 1500 Lumens, Vichwa Vitatu",
    englishName: "Solar Motion Security Light 1500LM",
    shortHeadline: "Light Up Anyone Who Approaches",
    cardSubheading:
      "Three fully adjustable heads, 270° coverage, 1500 lumens, and a PIR motion sensor. Solar-charged. Waterproof for Kenyan rains.",
    primaryEmotion: "Security before someone reaches the door.",
    basePriceKes: 6836,
    images: [
      "/images/products/solar-hero.png",
    ],
    specs: [
      { label: "Brightness", value: "1500 lumens (very bright)" },
      { label: "Heads", value: "3 adjustable heads — 270° coverage" },
      { label: "Sensor Distance", value: "8–10 metres PIR motion detection" },
      { label: "Waterproof Rating", value: "IP65 — built for rainy season" },
      { label: "Battery", value: "3.7V 2200mAh rechargeable 18650" },
      { label: "Certifications", value: "Proof required before publishing" },
    ],
    bundleLabels: { 1: "One Dark Spot", 2: "Gate + Back Area", 3: "Full Compound Setup" },
    crossSellPriority: ["alarm", "bulb"],
    defaultOfferQuantity: 2 as 1 | 2 | 3,
    benefits: [
      "1500 lumens — bright enough to scare off anyone at the gate",
      "3 heads cover 270° — no blind spots on your compound",
      "IP65 waterproof — works through Kenyan rains",
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
        q: "Does it need electricity?",
        a: "No. It charges from the sun during the day and lights automatically at night when it detects motion.",
      },
      { q: "Can I order for multiple spots?", a: "Yes. The 3-piece bundle is ideal for a full compound setup." },
      {
        q: "Is it waterproof?",
        a: "Yes. IP65 rated — built to withstand heavy Kenyan rains and dust.",
      },
      {
        q: "Will someone call before sending?",
        a: "Yes. Our team calls to confirm every COD order before dispatch.",
      },
    ],
    story: {
      painBadge: "The Kenyan Reality",
      painTitle: "A dark gate is an open invitation to trouble.",
      painCopy1:
        "Thieves scout compounds after sunset. A dark corridor, a dark backyard, a dark shop entrance — every unlit spot is a risk your family shouldn't have to take.",
      painCopy2:
        "The Solar Motion Security Light 1500LM floods anyone who approaches with 1500 lumens of blinding light. No wiring, no electricity bill, no monthly cost. The sun does the work.",
      painPromise: "Sleep knowing your compound watches itself.",
      scienceBadge: "Built for Kenyan Weather",
      scienceTitle: "3 heads. 270° coverage. IP65 waterproof.",
      scienceCopy:
        "This is not a cheap solar torch. The panel is upgraded, the LEDs are SMD, and the housing is IP65-rated so it works through heavy Nairobi and Mombasa rains without failure.",
      scienceBullets: [
        { title: "1500 Lumens", body: "Bright enough to fully expose anyone standing at your gate." },
        { title: "PIR Motion Sensor", body: "Detects movement 8–10 metres away and lights up instantly." },
      ],
    },
    reviews: [
      { initials: "PN", location: "Nairobi (Kileleshwa)", text: '"After a break-in attempt last year, I installed two of these at my gate. Nobody comes near now — the light hits them from far and they run."' },
      { initials: "SO", location: "Nakuru", text: '"No more paying the electrician to run cables. It charges from the sun and comes on by itself at night. Simple."' },
      { initials: "MK", location: "Eldoret", text: '"Rained heavy for three days, still working perfectly. Even my watchman is happy — he can see everything now."' },
    ],
  },
  {
    id: "alarm",
    slug: "personal-safety-alarm-keychain",
    swahiliName: "Kengele ya Usalama Binafsi ya 130dB kwa Wanawake — Ulinzi Wakati Wowote",
    englishName: "Personal Safety Alarm Keychain",
    shortHeadline: "Scream For Help — Instantly",
    cardSubheading:
      "Pull the pin and a 130dB alarm plus LED strobe activates immediately. Small enough for your keys, loud enough to be heard from 180 metres away.",
    primaryEmotion: "Confidence walking home, day or night.",
    basePriceKes: 6836,
    images: [
      "/images/products/alarm-hero.png",
    ],
    specs: [
      { label: "Alarm Volume", value: "130dB (heard from 180m away)" },
      { label: "Charging", value: "USB-C rechargeable — 30 min full charge" },
      { label: "Standby", value: "Up to 2 years on a single charge" },
      { label: "LED Torch", value: "Flashlight + strobe modes included" },
      { label: "Weight", value: "Ultra-light, clips to keys or bag" },
      { label: "Safety Certification", value: "Proof required before publishing" },
    ],
    bundleLabels: { 1: "For You", 2: "For You & Your Sister", 3: "Family Safety Pack" },
    crossSellPriority: ["solar", "bulb"],
    defaultOfferQuantity: 2 as 1 | 2 | 3,
    benefits: [
      "130dB siren scares off attackers instantly",
      "USB-C rechargeable — no batteries to replace",
      "Built-in LED torch lights your way home at night",
    ],
    useCases: [
      { icon: "Users", label: "Women", text: "Walking home late, boda-boda rides, night shifts" },
      { icon: "Zap", label: "Students", text: "Campus safety and evening classes" },
      { icon: "Home", label: "Family", text: "Elderly parents, children walking to school" },
      { icon: "Briefcase", label: "Travel", text: "Uber rides, matatus, unfamiliar areas" },
    ],
    faqs: [
      { q: "Can I pay on delivery?", a: "Yes. RafaTools is 100% COD. You pay only when the order arrives." },
      {
        q: "How loud is 130dB?",
        a: "As loud as a jet engine at close range. It can be heard clearly from up to 180 metres.",
      },
      {
        q: "How does it activate?",
        a: "Simply pull the pin. The alarm and LED strobe start instantly — no buttons to press in panic.",
      },
      {
        q: "How do I charge it?",
        a: "Plug in the USB-C cable. A full charge takes about 30 minutes and lasts months on standby.",
      },
      {
        q: "Will someone call before sending?",
        a: "Yes. Our team calls to confirm every COD order before dispatch.",
      },
    ],
    story: {
      painBadge: "The Silent Fear",
      painTitle: "Every woman knows the walk-home feeling.",
      painCopy1:
        "The dark stretch between the matatu stage and your gate. The boda-boda you don't fully trust. The Uber that takes an unfamiliar route. Every day, millions of Kenyan women swallow this fear silently.",
      painCopy2:
        "The Personal Safety Alarm Keychain gives you one thing back: control. Pull the pin and a 130dB siren plus flashing LED strobe scream for help — attackers panic and run.",
      painPromise: "You are never alone on that walk again.",
      scienceBadge: "Why 130dB Matters",
      scienceTitle: "Louder than a jet engine. Heard from 180 metres away.",
      scienceCopy:
        "Attackers rely on silence. 130dB shatters that instantly — neighbours look out, witnesses turn around, and the attacker becomes the target. This is the same volume category used by professional personal-safety products in the US and UK.",
      scienceBullets: [
        { title: "Instant Activation", body: "Pull the pin. That's it. No buttons, no unlocking, no thinking." },
        { title: "USB-C Rechargeable", body: "One 30-minute charge lasts months. No batteries to replace." },
      ],
    },
    reviews: [
      { initials: "WM", location: "Nairobi (Westlands)", text: '"I work night shift at a hospital. Now every walk to the stage feels safer. The moment I clip it to my keys, my hand stops shaking."' },
      { initials: "AK", location: "Kisumu", text: '"Bought two — one for me, one for my daughter at campus. She sends me a message every night before she sleeps. Priceless."' },
      { initials: "NM", location: "Mombasa", text: '"A guy tried to grab my phone at the ferry. I pulled the pin. He literally covered his ears and ran. It works."' },
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
