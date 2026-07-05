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
  title: "RafaTools – Power & Security Tools for Kenya",
  description:
    "Premium backup power and security lighting essentials for Kenyan homes, shops, salons, and workspaces. Order online, confirm by phone, pay on delivery.",
  openGraph: {
    title: "RafaTools – Power & Security Tools for Kenya",
    description:
      "Premium backup power and security lighting essentials for Kenyan homes, shops, salons, and workspaces.",
    url: "https://rafatools.online",
    siteName: "RafaTools",
    locale: "en_KE",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
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
