# RafaTools Frontend

Next.js 15 ecommerce storefront for RafaTools — power and safety essentials for Kenyan homes.

## Tech Stack

- Next.js 15 App Router (standalone output)
- React 19
- TypeScript (strict)
- Tailwind CSS v4
- Zustand v5 (cart, checkout, attribution)
- react-hook-form + zod
- Radix UI (Dialog, Accordion)
- sonner (toasts)

## Local Development

```bash
# 1. Copy env file
cp .env.example .env.local

# 2. Set your env vars in .env.local
# At minimum, set NEXT_PUBLIC_API_BASE_URL to your backend URL

# 3. Install dependencies
npm install

# 4. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public site URL (used for metadata) |
| `NEXT_PUBLIC_API_BASE_URL` | Backend API base URL |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta/Facebook Pixel ID (optional) |
| `NEXT_PUBLIC_TIKTOK_PIXEL_ID` | TikTok Pixel ID (optional) |
| `NEXT_PUBLIC_SNAP_PIXEL_ID` | Snapchat Pixel ID (optional) |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Support email displayed in footer/contact |
| `NEXT_PUBLIC_SUPPORT_PHONE` | Support phone number |
| `NEXT_PUBLIC_SUPPORT_WHATSAPP` | WhatsApp number for support |

## Build

```bash
npm run build
npm run start
```

## Docker Build

```bash
docker build -t rafatools-frontend .
docker run -p 3000:3000 --env-file .env.local rafatools-frontend
```

## Type Checking

```bash
npm run typecheck
```

## Project Structure

```
app/           — Next.js App Router pages and layouts
components/    — Reusable UI components
  layout/      — Header, Footer, MobileMenu
  cart/        — CartDrawer, CartItem, CrossSellCard, CartTotals
  checkout/    — CheckoutModal, UpsellModal, PhoneField
  product/     — ProductCard, ProductGallery, OfferSelector, StickyMobileCta
  sections/    — Hero, TrustStrip, CodProcess, Faq, ProofPlaceholder
  tracking/    — PixelProvider
data/          — Static product and offer data
lib/           — Utility functions (api, money, phone, tracking, etc.)
store/         — Zustand state stores
types/         — TypeScript type definitions
public/        — Static assets
```

## Key Design Decisions

- **COD only**: No payment gateway. Customers pay on delivery.
- **Phone confirmation**: Orders require a phone call to confirm before dispatch.
- **Placeholder images**: Product images use CSS gradient placeholders until real photos are supplied.
- **Pixel tracking**: Meta, TikTok, and Snapchat pixels are optional and gracefully degrade if IDs are not set.
- **Attribution capture**: UTM params and click IDs are captured on first visit and persisted to localStorage.
