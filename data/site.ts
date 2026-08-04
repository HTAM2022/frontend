export const SITE = {
  name: "RafaTools",
  tagline: "Éclairage & Sécurité",
  promise:
    "Éclairage de secours, sécurité solaire et alarmes personnelles pour les foyers et familles au Maroc.",
  metaTitle: "RafaTools – Ampoules de Secours, Éclairage Solaire & Alarmes Personnelles | Maroc",
  metaDescription:
    "Ampoules LED rechargeables, projecteurs solaires de sécurité 1500LM et alarmes personnelles 130dB pour les foyers, boutiques et familles au Maroc. Commande en ligne, confirmation par téléphone, paiement à la livraison.",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@rafatools.online",
  supportPhone: process.env.NEXT_PUBLIC_SUPPORT_PHONE ?? "",
  supportWhatsapp: process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP ?? "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rafatools.online",
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000",
}

export const HOME_FAQS = [
  {
    q: "Est-ce que je paie avant la livraison ?",
    a: "Non. RafaTools fonctionne 100% en paiement à la livraison (COD). Vous payez uniquement quand la commande arrive chez vous.",
  },
  {
    q: "Où livrez-vous ?",
    a: "Nous livrons partout au Maroc : Casablanca, Rabat, Marrakech, Fès, Tanger, Agadir, Meknès et toutes les autres villes. Notre équipe confirme la couverture lors de l'appel.",
  },
  {
    q: "Est-ce que quelqu'un m'appellera avant l'envoi ?",
    a: "Oui. Notre équipe appelle chaque client pour confirmer la commande avant l'expédition. Merci de garder votre téléphone disponible.",
  },
  {
    q: "Puis-je commander plusieurs pièces ?",
    a: "Oui. Chaque produit propose des packs de 1, 2 ou 3 pièces. Les packs offrent un meilleur prix par pièce.",
  },
  {
    q: "Comment savoir quel produit me convient ?",
    a: "Consultez les pages produits pour voir les cas d'usage et les avantages. Notre équipe peut aussi vous conseiller lors de l'appel de confirmation.",
  },
]

export const COD_STEPS = [
  {
    step: 1,
    title: "Choisissez votre pack",
    desc: "1, 2 ou 3 pièces selon la taille de votre maison ou boutique.",
  },
  {
    step: 2,
    title: "Entrez votre nom et téléphone",
    desc: "Pas de long formulaire. Juste votre nom et numéro mobile marocain.",
  },
  {
    step: 3,
    title: "Nous appelons pour confirmer",
    desc: "Notre équipe vous appelle avant l'expédition pour vérifier votre commande.",
  },
  {
    step: 4,
    title: "Votre commande est expédiée",
    desc: "Une fois confirmée, nous expédions à votre adresse.",
  },
  {
    step: 5,
    title: "Vous payez à la livraison",
    desc: "Payez uniquement à la réception. Aucun paiement à l'avance.",
  },
]
