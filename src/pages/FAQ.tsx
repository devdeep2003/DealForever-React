import { useState } from "react";
import { ChevronDown } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { faqItems } from "../data/siteData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      <PageBanner
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Deal Forever"
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-8xl">
          <div className="space-y-5">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden "
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 md:px-6 py-4 text-left hover:bg-[#faf8f5] transition-colors"
                >
                  <span
                    className={`font-semibold text-sm md:text-lg pr-4 transition-colors ${
                      openIndex === i ? "text-[#aa8453]" : "text-black"
                    }`}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#aa8453] shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-5 md:px-6 pb-4 text-sm md:text-lg text-[#555] leading-relaxed hover:text-[#aa8453] transition-colors">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-[#faf8f5] rounded-xl p-8">
            <h3 className="text-xl font-bold text-[#191717] mb-2">
              Still Have Questions?
            </h3>
            <p className="text-sm text-[#888] mb-4">
              Our team is here to help you with any questions you may have.
            </p>
            <a
              href="mailto:customercare@dealfreever.com"
              className="btn-primary rounded-full text-sm"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
