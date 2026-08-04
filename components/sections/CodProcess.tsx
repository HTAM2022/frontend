import { COD_STEPS } from "@/data/site"

export function CodProcess() {
  return (
    <section id="cod-process" className="bg-cream py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-cairo font-bold text-ink text-3xl mb-3">كيفاش تطلب (الدفع عند التوصيل)</h2>
          <p className="text-bodyGray text-base">
            بسيط، آمن، وواضح. ما كتخلص والو حتى توصلك الطلبية للدار.
          </p>
        </div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border md:left-1/2 md:-ml-px hidden md:block" />

          <div className="space-y-6">
            {COD_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className={`relative flex items-start gap-5 md:gap-0 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step number – always visible on mobile, center on desktop */}
                <div className="shrink-0 w-12 h-12 rounded-full bg-emerald text-white font-cairo font-bold text-lg flex items-center justify-center shadow-sm z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                  {step.step}
                </div>

                <div
                  className={`flex-1 bg-white rounded-xl border border-border p-5 shadow-sm md:w-[45%] md:flex-none ${
                    idx % 2 === 0 ? "md:ml-[55%]" : "md:mr-[55%]"
                  }`}
                >
                  <h3 className="font-cairo font-semibold text-ink text-base mb-1">{step.title}</h3>
                  <p className="text-bodyGray text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
