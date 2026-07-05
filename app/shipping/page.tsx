import type { Metadata } from "next"
import { Truck, MapPin, PhoneCall, Clock, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Shipping & Delivery | RafaTools",
  description: "Learn about our fast delivery across Kenya. Pay ONLY on delivery. We ship to major cities in 1-2 days and all other areas in 3-5 days.",
}

export default function ShippingPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-softMint py-16 md:py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-white mb-6 shadow-sm">
            <Truck size={32} className="text-emerald" />
          </div>
          <h1 className="font-sora font-bold text-ink text-4xl md:text-5xl leading-tight mb-4">
            Shipping &amp; Delivery
          </h1>
          <p className="text-bodyGray text-lg leading-relaxed max-w-2xl mx-auto">
            Fast, reliable delivery anywhere in Kenya. 
            <strong className="text-emerald block mt-2">Always 100% Pay On Delivery.</strong>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Timeline Section */}
          <div className="space-y-6">
            <h2 className="font-sora font-bold text-3xl text-ink">Delivery Timelines</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cream border border-border p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-warmGold" size={24} />
                  <h3 className="font-sora font-bold text-ink text-xl">Major Cities</h3>
                </div>
                <div className="inline-block bg-white text-emerald font-bold px-3 py-1 rounded-full text-sm mb-4 border border-emerald/20">
                  1 to 2 Business Days
                </div>
                <ul className="space-y-2 text-bodyGray">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald" /> Nairobi</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald" /> Mombasa</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald" /> Kisumu</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald" /> Nakuru</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald" /> Eldoret</li>
                </ul>
              </div>

              <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-charcoal" size={24} />
                  <h3 className="font-sora font-bold text-ink text-xl">All Other Areas</h3>
                </div>
                <div className="inline-block bg-softMint text-charcoal font-bold px-3 py-1 rounded-full text-sm mb-4 border border-emerald/20">
                  Up to 5 Business Days
                </div>
                <p className="text-bodyGray leading-relaxed">
                  We partner with reliable courier services to ensure your package reaches you no matter where you are in Kenya. Our dispatch team will advise you on the exact courier and pickup location for your town.
                </p>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="space-y-8">
            <h2 className="font-sora font-bold text-3xl text-ink text-center">How It Works</h2>
            <div className="relative">
              {/* Vertical line for desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 flex justify-end">
                    <div className="bg-white border border-border p-6 rounded-2xl w-full md:max-w-sm relative z-10 shadow-sm">
                      <h4 className="font-sora font-bold text-ink text-lg mb-2">1. Place Your Order</h4>
                      <p className="text-bodyGray text-sm">Enter your name and phone number on our website. No payment information is required.</p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-emerald rounded-full border-4 border-white items-center justify-center text-white font-bold z-20">
                    1
                  </div>
                  <div className="md:w-1/2" />
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2" />
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-emerald rounded-full border-4 border-white items-center justify-center text-white font-bold z-20">
                    2
                  </div>
                  <div className="md:w-1/2 flex justify-start">
                    <div className="bg-white border border-border p-6 rounded-2xl w-full md:max-w-sm relative z-10 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <PhoneCall size={18} className="text-emerald" />
                        <h4 className="font-sora font-bold text-ink text-lg">Phone Confirmation</h4>
                      </div>
                      <p className="text-bodyGray text-sm">Our customer support team will call you within 24 hours to confirm your exact location and availability.</p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 flex justify-end">
                    <div className="bg-white border border-border p-6 rounded-2xl w-full md:max-w-sm relative z-10 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock size={18} className="text-emerald" />
                        <h4 className="font-sora font-bold text-ink text-lg">Dispatch</h4>
                      </div>
                      <p className="text-bodyGray text-sm">Your order is packed and handed over to our riders (for Nairobi) or trusted courier partners (outside Nairobi).</p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-emerald rounded-full border-4 border-white items-center justify-center text-white font-bold z-20">
                    3
                  </div>
                  <div className="md:w-1/2" />
                </div>

                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2" />
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-emerald rounded-full border-4 border-white items-center justify-center text-white font-bold z-20">
                    4
                  </div>
                  <div className="md:w-1/2 flex justify-start">
                    <div className="bg-cream border border-warmGold/30 p-6 rounded-2xl w-full md:max-w-sm relative z-10 shadow-sm">
                      <h4 className="font-sora font-bold text-ink text-lg mb-2 text-emerald">Pay On Arrival</h4>
                      <p className="text-bodyGray text-sm">You inspect the package. Once satisfied, you pay the rider or courier via M-Pesa. It&apos;s 100% risk-free.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact / Help block */}
          <div className="bg-softMint/50 rounded-2xl p-8 text-center mt-12 border border-border">
            <h3 className="font-sora font-bold text-xl text-ink mb-3">Have questions about your delivery?</h3>
            <p className="text-bodyGray mb-6">Our team is ready to help you track your order.</p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center bg-emerald text-white px-6 py-3 rounded-xl font-bold hover:bg-deepEmerald transition-colors"
            >
              Contact Support
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}