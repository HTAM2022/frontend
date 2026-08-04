import type { Metadata } from "next"
import { Sora, Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CartDrawer } from "@/components/cart/CartDrawer"
import { PixelProvider } from "@/components/tracking/PixelProvider"
import { Toaster } from "sonner"

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "RafaTools – Ampoules de Secours, Éclairage Solaire & Alarmes Personnelles | Maroc",
  description:
    "Ampoules LED rechargeables, projecteurs solaires 1500LM et alarmes personnelles 130dB pour les foyers, boutiques et familles au Maroc. Commande en ligne, confirmation par téléphone, paiement à la livraison.",
  openGraph: {
    title: "RafaTools – Ampoules de Secours, Éclairage Solaire & Alarmes Personnelles | Maroc",
    description:
      "Ampoules LED rechargeables, projecteurs solaires 1500LM et alarmes personnelles 130dB pour les foyers marocains.",
    url: "https://rafatools.online",
    siteName: "RafaTools",
    locale: "fr_MA",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sora.variable} ${inter.variable}`}>
      <body className="font-inter bg-white text-ink antialiased">
        <PixelProvider />
        <Header />
        <CartDrawer />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
