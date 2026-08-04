export const PRODUCTS = [
  {
    id: "bulb",
    slug: "ampoule-led-urgence-rechargeable",
    swahiliName: "الضوء ديال الطوارئ اللي كيشعل مباشرة ملي كيقطع الضو",
    englishName: "Ampoule LED Rechargeable d'Urgence",
    shortHeadline: "La lumière reste allumée même quand le courant coupe",
    cardSubheading:
      "Se visse dans n'importe quelle douille normale. Se recharge quand le courant est là. S'allume automatiquement dès que la coupure arrive — jusqu'à 12 heures de lumière.",
    primaryEmotion: "Plus jamais dans le noir pendant les coupures.",
    basePriceKes: 299,
    images: [
      "/images/products/bulb-hero.png",
    ],
    specs: [
      { label: "Type de culot", value: "E27 (douille standard à vis)" },
      { label: "Chimie batterie", value: "LiFePO4 (plus sûre, plus durable)" },
      { label: "Autonomie", value: "Jusqu'à 12 heures sur une charge complète" },
      { label: "Allumage auto", value: "Oui — s'active instantanément lors d'une coupure" },
      { label: "Batterie détachable", value: "Oui — utilisable comme torche partout" },
      { label: "Certification sécurité", value: "Conforme CE" },
    ],
    bundleLabels: { 1: "Une pièce sauvée", 2: "Pack Maison Prête", 3: "Pack Famille + Boutique" },
    crossSellPriority: ["solar", "alarm"],
    defaultOfferQuantity: 2 as 1 | 2 | 3,
    benefits: [
      "S'allume automatiquement à chaque coupure de courant",
      "Se visse dans n'importe quelle douille E27 — aucun câblage, aucune installation",
      "Batterie détachable utilisable comme torche portable",
    ],
    useCases: [
      { icon: "Home", label: "Maison", text: "Chambre, cuisine, couloir restent éclairés pendant les coupures" },
      { icon: "Store", label: "Boutique", text: "Éclairage de secours pour le comptoir et l'espace de travail" },
      { icon: "Users", label: "Famille", text: "Les enfants continuent d'étudier, le dîner reste sur la table" },
      { icon: "Zap", label: "Urgence", text: "Lumière de secours partout où vous avez une douille" },
    ],
    faqs: [
      { q: "Puis-je payer à la livraison ?", a: "Oui. RafaTools est 100% paiement à la livraison. Vous payez uniquement à la réception." },
      {
        q: "Allez-vous m'appeler avant l'envoi ?",
        a: "Oui. Notre équipe vous appelle pour confirmer votre nom, téléphone et commande avant l'expédition.",
      },
      { q: "Puis-je commander 2 ou 3 pièces ?", a: "Oui. Choisissez 1, 2 ou 3 pièces avec les packs affichés." },
      {
        q: "Comment se recharge-t-elle ?",
        a: "Elle se recharge automatiquement dès que l'interrupteur mural est allumé. Aucun câble nécessaire.",
      },
      {
        q: "Est-ce que ça rentre dans ma douille ?",
        a: "Oui. Elle utilise le culot E27 standard présent dans la plupart des foyers et boutiques au Maroc.",
      },
    ],
    story: {
      painBadge: "La Réalité Marocaine",
      painTitle: "Ne laissez plus les coupures ONEE plonger votre famille dans le noir.",
      painCopy1:
        "Que vous soyez une maman qui aide ses enfants à finir leurs devoirs, un commerçant sur le point de conclure une vente, ou un parent qui met son bébé au lit — une coupure soudaine ruine votre soirée.",
      painCopy2:
        "L'Ampoule LED d'Urgence Rechargeable se visse dans n'importe quelle douille que vous possédez déjà et s'allume dès que le courant coupe. Aucun câblage. Aucune bougie. Aucune panique.",
      painPromise: "Gardez la lumière allumée. Gardez votre tranquillité d'esprit.",
      scienceBadge: "Comment ça marche",
      scienceTitle: "Se recharge quand le courant est là. Éclaire la pièce dès qu'il coupe.",
      scienceCopy:
        "À l'intérieur de l'ampoule se trouve une batterie lithium LiFePO4 — la même chimie utilisée dans les systèmes solaires — qui dure bien plus longtemps que les cellules Li-ion bon marché des ampoules d'urgence classiques.",
      scienceBullets: [
        { title: "Détection auto de coupure", body: "Zéro délai quand le courant saute. L'ampoule continue de briller." },
        { title: "12 heures d'autonomie", body: "Une charge complète éclaire une pièce toute une soirée et toute la nuit." },
      ],
    },
    reviews: [
      { initials: "SB", location: "Casablanca", text: '"Quand le courant coupe, mes enfants pleuraient. Maintenant l\'ampoule reste allumée et les devoirs continuent. Les 299 dirhams les mieux dépensés de ma vie."' },
      { initials: "AA", location: "Marrakech", text: '"J\'en ai acheté deux pour ma boutique. Même quand toute la rue est dans le noir, mon comptoir reste éclairé. Les clients continuent d\'entrer."' },
      { initials: "FE", location: "Rabat", text: '"Ils m\'ont appelée avant la livraison, le livreur est venu le jour même, j\'ai payé seulement en ouvrant le colis. Très sécurisé."' },
    ],
  },
  {
    id: "solar",
    slug: "projecteur-solaire-securite-1500lm",
    swahiliName: "الضوء الشمسي ديال الأمان 1500 لومن — 3 روؤس، حساس الحركة",
    englishName: "Projecteur Solaire de Sécurité 1500LM",
    shortHeadline: "Illuminez toute personne qui s'approche",
    cardSubheading:
      "Trois têtes entièrement ajustables, couverture 270°, 1500 lumens et détecteur PIR de mouvement. Chargé au solaire. Étanche pour les pluies marocaines.",
    primaryEmotion: "La sécurité avant même qu'on arrive à la porte.",
    basePriceKes: 299,
    images: [
      "/images/products/solar-hero.png",
    ],
    specs: [
      { label: "Luminosité", value: "1500 lumens (très puissant)" },
      { label: "Têtes", value: "3 têtes ajustables — couverture 270°" },
      { label: "Portée du capteur", value: "8 à 10 mètres — détection PIR" },
      { label: "Indice d'étanchéité", value: "IP65 — conçu pour la saison des pluies" },
      { label: "Batterie", value: "3.7V 2200mAh rechargeable 18650" },
      { label: "Certifications", value: "Conforme CE / RoHS" },
    ],
    bundleLabels: { 1: "Un coin sombre", 2: "Portail + Arrière", 3: "Installation Complète" },
    crossSellPriority: ["alarm", "bulb"],
    defaultOfferQuantity: 2 as 1 | 2 | 3,
    benefits: [
      "1500 lumens — assez puissant pour faire fuir n'importe qui devant le portail",
      "3 têtes couvrent 270° — aucun angle mort dans votre cour",
      "Étanche IP65 — résiste aux pluies marocaines",
    ],
    useCases: [
      { icon: "Home", label: "Portail", text: "Éclairez le mouvement avant qu'il arrive à votre porte" },
      { icon: "Building2", label: "Cour / Villa", text: "Illuminez automatiquement les zones extérieures sombres" },
      { icon: "Stairs", label: "Escalier", text: "Éclairage de couloir et d'escalier" },
      { icon: "Store", label: "Boutique", text: "Sécurité de l'entrée d'une boutique ou d'un kiosque" },
    ],
    faqs: [
      { q: "Puis-je payer à la livraison ?", a: "Oui. RafaTools est 100% paiement à la livraison. Vous payez uniquement à la réception." },
      {
        q: "A-t-il besoin d'électricité ?",
        a: "Non. Il se charge au soleil pendant la journée et s'allume automatiquement la nuit dès qu'il détecte un mouvement.",
      },
      { q: "Puis-je commander pour plusieurs endroits ?", a: "Oui. Le pack de 3 est idéal pour couvrir toute une cour ou villa." },
      {
        q: "Est-il étanche ?",
        a: "Oui. Norme IP65 — conçu pour résister aux fortes pluies marocaines et à la poussière.",
      },
      {
        q: "Vais-je recevoir un appel avant l'envoi ?",
        a: "Oui. Notre équipe appelle pour confirmer chaque commande COD avant l'expédition.",
      },
    ],
    story: {
      painBadge: "La Réalité Marocaine",
      painTitle: "Un portail sombre est une invitation aux problèmes.",
      painCopy1:
        "Les voleurs repèrent les maisons après le coucher du soleil. Un couloir sombre, une arrière-cour non éclairée, une entrée de boutique dans le noir — chaque zone non éclairée est un risque que votre famille ne devrait pas prendre.",
      painCopy2:
        "Le Projecteur Solaire de Sécurité 1500LM inonde toute personne qui s'approche de 1500 lumens de lumière aveuglante. Aucun câblage, aucune facture d'électricité, aucun coût mensuel. Le soleil fait le travail.",
      painPromise: "Dormez en sachant que votre cour se surveille elle-même.",
      scienceBadge: "Conçu pour le climat marocain",
      scienceTitle: "3 têtes. Couverture 270°. Étanche IP65.",
      scienceCopy:
        "Ce n'est pas une torche solaire bon marché. Le panneau est amélioré, les LED sont de type SMD, et le boîtier est classé IP65 pour fonctionner malgré les fortes pluies de Rabat, Casablanca ou Tanger sans faille.",
      scienceBullets: [
        { title: "1500 Lumens", body: "Assez puissant pour exposer entièrement quiconque se tient à votre portail." },
        { title: "Capteur PIR de mouvement", body: "Détecte le mouvement à 8-10 mètres et s'allume instantanément." },
      ],
    },
    reviews: [
      { initials: "MB", location: "Casablanca (Aïn Diab)", text: '"Après une tentative d\'effraction l\'année dernière, j\'ai installé deux de ces projecteurs à mon portail. Plus personne ne s\'approche — la lumière les frappe de loin et ils partent."' },
      { initials: "KZ", location: "Meknès", text: '"Plus besoin de payer un électricien pour tirer des câbles. Il se charge au soleil et s\'allume tout seul la nuit. Simple et efficace."' },
      { initials: "OT", location: "Agadir", text: '"Il a plu fort pendant trois jours, ça marche toujours parfaitement. Même le gardien est content — il voit tout maintenant."' },
    ],
  },
  {
    id: "alarm",
    slug: "alarme-personnelle-porte-cles",
    swahiliName: "الأنذار الشخصي 130 ديسيبل للنساء — الأمان أي وقت",
    englishName: "Alarme Personnelle Porte-Clés 130dB",
    shortHeadline: "Appelez à l'aide — instantanément",
    cardSubheading:
      "Tirez sur la goupille et une alarme 130dB + strobe LED s'active immédiatement. Assez petite pour vos clés, assez forte pour être entendue à 180 mètres.",
    primaryEmotion: "La confiance en rentrant chez soi, jour et nuit.",
    basePriceKes: 299,
    images: [
      "/images/products/alarm-hero.png",
    ],
    specs: [
      { label: "Volume de l'alarme", value: "130dB (entendue à 180m)" },
      { label: "Recharge", value: "USB-C rechargeable — 30 min pour une charge complète" },
      { label: "Veille", value: "Jusqu'à 2 ans sur une seule charge" },
      { label: "Torche LED", value: "Modes lampe torche + strobe inclus" },
      { label: "Poids", value: "Ultra léger, se clipse aux clés ou au sac" },
      { label: "Certification sécurité", value: "Conforme CE" },
    ],
    bundleLabels: { 1: "Pour Vous", 2: "Pour Vous & Votre Sœur", 3: "Pack Sécurité Famille" },
    crossSellPriority: ["solar", "bulb"],
    defaultOfferQuantity: 2 as 1 | 2 | 3,
    benefits: [
      "Sirène 130dB fait fuir les agresseurs instantanément",
      "Rechargeable USB-C — aucune pile à remplacer",
      "Torche LED intégrée éclaire votre chemin la nuit",
    ],
    useCases: [
      { icon: "Users", label: "Femmes", text: "Retour à pied tard le soir, taxis, quarts de nuit" },
      { icon: "Zap", label: "Étudiants", text: "Sécurité sur le campus et cours du soir" },
      { icon: "Home", label: "Famille", text: "Parents âgés, enfants qui vont à l'école" },
      { icon: "Briefcase", label: "Déplacements", text: "Uber, taxis, quartiers inconnus" },
    ],
    faqs: [
      { q: "Puis-je payer à la livraison ?", a: "Oui. RafaTools est 100% paiement à la livraison. Vous payez uniquement à la réception." },
      {
        q: "C'est fort à quel point 130dB ?",
        a: "Aussi fort qu'un moteur d'avion de près. Peut être entendu clairement jusqu'à 180 mètres.",
      },
      {
        q: "Comment ça s'active ?",
        a: "Il suffit de tirer sur la goupille. L'alarme et le strobe LED démarrent instantanément — aucun bouton à chercher en panique.",
      },
      {
        q: "Comment la recharger ?",
        a: "Branchez le câble USB-C. Une charge complète prend environ 30 minutes et dure des mois en veille.",
      },
      {
        q: "Vais-je recevoir un appel avant l'envoi ?",
        a: "Oui. Notre équipe appelle pour confirmer chaque commande COD avant l'expédition.",
      },
    ],
    story: {
      painBadge: "La Peur Silencieuse",
      painTitle: "Chaque femme connaît le sentiment du retour à pied.",
      painCopy1:
        "Le tronçon sombre entre l'arrêt de bus et votre portail. Le taxi en qui vous n'avez pas totalement confiance. L'Uber qui prend un itinéraire inconnu. Chaque jour, des millions de femmes marocaines avalent cette peur en silence.",
      painCopy2:
        "L'Alarme Personnelle Porte-Clés vous rend une chose : le contrôle. Tirez sur la goupille et une sirène 130dB + strobe LED clignotant appellent à l'aide — les agresseurs paniquent et fuient.",
      painPromise: "Vous n'êtes plus jamais seule sur ce chemin.",
      scienceBadge: "Pourquoi 130dB compte",
      scienceTitle: "Plus fort qu'un moteur d'avion. Entendue à 180 mètres.",
      scienceCopy:
        "Les agresseurs comptent sur le silence. 130dB brise ce silence instantanément — les voisins regardent, les témoins se retournent, et l'agresseur devient la cible. C'est le même niveau sonore que les produits professionnels de sécurité personnelle aux États-Unis et au Royaume-Uni.",
      scienceBullets: [
        { title: "Activation instantanée", body: "Tirez sur la goupille. C'est tout. Pas de boutons, pas de déverrouillage, pas de réflexion." },
        { title: "USB-C rechargeable", body: "Une charge de 30 minutes dure des mois. Aucune pile à remplacer." },
      ],
    },
    reviews: [
      { initials: "IB", location: "Casablanca (Maârif)", text: '"Je travaille en horaire de nuit à l\'hôpital. Maintenant chaque marche vers l\'arrêt me semble plus sûre. Dès que je le clipse à mes clés, ma main arrête de trembler."' },
      { initials: "SL", location: "Rabat", text: '"J\'en ai acheté deux — un pour moi, un pour ma fille à la fac. Elle m\'envoie un message chaque soir avant de dormir. Ça n\'a pas de prix."' },
      { initials: "NA", location: "Tanger", text: '"Un mec a essayé de m\'arracher mon téléphone. J\'ai tiré la goupille. Il s\'est littéralement bouché les oreilles et il est parti en courant. Ça marche."' },
    ],
  },
]

export const OFFERS = [
  { quantity: 1, priceKes: 299, badge: "Découverte", label: "1 Pièce" },
  { quantity: 2, priceKes: 499, badge: "Le Plus Pratique", label: "2 Pièces" },
  { quantity: 3, priceKes: 699, badge: "Meilleure Offre", label: "3 Pièces" },
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
