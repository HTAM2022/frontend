import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CartDrawer } from "@/components/cart/CartDrawer"
import { PixelProvider } from "@/components/tracking/PixelProvider"
import { Toaster } from "sonner"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "RafaTools – باكات آلات DeWalt و Makita احترافية | المغرب",
  description:
    "باكات آلات كهربائية احترافية DeWalt و Makita — فيسوز، ميلوز، مرطو SDS، منشار دائري. الدفع عند التوصيل، ضمان 6 شهور، توصيل لكل المغرب.",
  openGraph: {
    title: "RafaTools – باكات آلات DeWalt و Makita احترافية | المغرب",
    description:
      "باكات آلات كهربائية احترافية DeWalt و Makita بـ الدفع عند التوصيل — الدار البيضاء، الرباط، مراكش، فاس، طنجة.",
    url: "https://rafatools.online",
    siteName: "RafaTools",
    locale: "ar_MA",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable}`}>
      <body className="font-cairo bg-white text-ink antialiased">
        <PixelProvider />
        <Header />
        <CartDrawer />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-left" />
      </body>
    </html>
  )
}
