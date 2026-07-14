import { CheckCircle2, X, ChevronRight } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { useState } from "react";
import {
  businessOpportunityImages,
  businessOpportunityBenefits as benefits,
  businessIncomeHighlights as incomeHighlights,
  compensationPlanBenefits as planBenefits,
  compensationTables,
  financialIncomeItems as financialItems,
  physicalStoreBullets,
  ecommerceBullets,
  directSellingBullets,
  glossaryTerms,
  codeOfEthics,
  distributionStats,
  supportFaqs,
} from "../data/siteData";

const {
  IMG,
  SALES_IMG,
  PULSE_CIRCLE_IMG,
  TABLE1_IMG,
  TABLE2_IMG,
  TABLE3_IMG,
  TABLE4_IMG,
  SUPPORT_IMG,
  FLOW_IMG,
  MEDIA_IMG,
  TEAM_IMG,
  WARNING_IMG,
  CASH_IMG,
  SPONSOR_NETWORK_IMG,
  ECART_IMG,
  PLACEMENT_NETWORK_IMG,
  BUSINESS_PLAN_IMG,
  SPILLOVER_IMG,
  BUSINESS_OPPORTUNITY_IMG,
  BUILDING_IMG,
  BUSINESS_FLOW_IMG,
  THINKING_IMG,
} = businessOpportunityImages;

// ─── helpers ─────────────────────────────────────────────────────────────────

function SectionIcon({ src }: { src: string }) {
  return (
    <div className="w-10 h-10 rounded-full bg-[#faf8f5] border border-[#aa8453]/30 flex items-center justify-center shrink-0">
      <img src={`${IMG}${src}`} alt="" className="w-5 h-5 object-contain" />
    </div>
  );
}

function BulletList({ items }: { items: { point: string; detail: string }[] }) {
  return (
    <ul className="space-y-3 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#aa8453] shrink-0" />
          <div>
            <span className="text-sm font-semibold text-[#191717]">
              {item.point}
            </span>
            <span className="text-sm text-[#666]"> — {item.detail}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

// Image is always fully visible, never cropped or stretched
// Bigger, responsive footprint
function ContainedImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl flex justify-center ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] h-auto object-contain rounded-2xl mx-auto"
      />
    </div>
  );
}

// Floated image so text/bullets that run longer than the image wrap
// around and below it instead of leaving empty space beside it
function FloatWrapSection({
  image,
  alt,
  icon,
  title,
  children,
  float = "left",
}: {
  image: string;
  alt: string;
  icon: string;
  title: string;
  children: React.ReactNode;
  float?: "left" | "right";
}) {
  const floatClass =
    float === "left" ? "sm:float-left sm:mr-6" : "sm:float-right sm:ml-6";
  return (
    <div>
      <div className={`w-full sm:w-64 mb-4 ${floatClass}`}>
        <ContainedImage src={image} alt={alt} className="max-w-full" />
      </div>
      <div className="flex items-center gap-3 mb-3">
        <SectionIcon src={icon} />
        <h3 className="font-bold text-[#191717]">{title}</h3>
      </div>
      {children}
      <div className="clear-both" />
    </div>
  );
}

// ─── component ───────────────────────────────────────────────────────────────

export default function BusinessOpportunity() {
  type FinancialItem = (typeof financialItems)[number];

  const [selectedFinancialItem, setSelectedFinancialItem] =
    useState<FinancialItem | null>(null);
  const [isFinancialModalOpen, setIsFinancialModalOpen] = useState(false);

  const openFinancialModal = (item: (typeof financialItems)[number]) => {
    setSelectedFinancialItem(item);
    setIsFinancialModalOpen(true);
  };

  const closeFinancialModal = () => {
    setIsFinancialModalOpen(false);
  };

  const howItWorksSteps = [
    {
      step: "01",
      label: "Submit Your Details",
      detail:
        "Fill out the form with your basic information and we will reach out to you.",
    },
    {
      step: "02",
      label: "Attend an Orientation",
      detail:
        "Our team will walk you through the business plan and compensation structure.",
    },
    {
      step: "03",
      label: "Get Registered",
      detail: "Complete your free registration on www.mydealforever.com.",
    },
    {
      step: "04",
      label: "Start Earning",
      detail:
        "Begin selling, building your team, and unlocking bonuses from day one.",
    },
  ];

  return (
    <div>
      <PageBanner
        title="Business Opportunity"
        subtitle="Discover the Deal Forever advantage"
        breadcrumbs={[{ label: "Business Opportunity" }]}
      />

      {/* ── 1. MY BUSINESS PLAN ─────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
            {/* Left Content */}
            <div className="w-full lg:w-[48%] text-center lg:text-left">
              <p className="section-subtitle">My Business Plan</p>

              <h2 className="section-title mb-4">Learn The Law of Wealth</h2>

              <p className="text-[#555] text-lg font-medium mb-4">
                Plan Your Future, Live Your Dreams.
              </p>

              <p className="text-[#888] text-base leading-8 max-w-xl mx-auto lg:mx-0">
                Deal Forever is more than a business — it's a movement built on
                the belief that financial freedom is achievable by anyone
                willing to put in the work. Our plan is transparent, scalable,
                and designed to reward effort at every level.
              </p>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[48%] flex justify-center lg:justify-end">
              <ContainedImage
                src={THINKING_IMG}
                alt="Business Opportunity Banner"
              />
            </div>
          </div>

          {/* Question + Quote + Stat strip */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#faf8f5] rounded-xl p-6 flex flex-col border border-gray-200">
              <div className="flex gap-4 items-start mb-4">
                <div className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 mt-0.5">
                  <img
                    src={`${IMG}icons8-question-mark-50.png`}
                    alt="Question"
                    className="w-5 h-5 object-contain"
                  />
                </div>

                <div>
                  <p className="text-[#333] leading-relaxed font-medium mb-2">
                    What's the probability of your current job allowing you to
                    achieve your life goals?
                  </p>

                  <p className="text-sm text-[#777] leading-relaxed">
                    Most people trade 40+ years of their prime time for a fixed
                    salary that never quite covers their dreams. Deal Forever
                    offers a different equation — one where your input directly
                    determines your output.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#191717] rounded-xl p-6 flex flex-col items-center justify-center gap-4">
              <p className="text-white leading-relaxed font-medium italic text-center text-lg">
                "In This Business, You Have The Power To Shape Your Own
                Destiny."
              </p>

              <div className="flex gap-6 pt-2 border-t border-white/10 w-full justify-center">
                {[
                  ["1M+", "Active distributors"],
                  ["50+", "Product categories"],
                  ["Pan-India", "Network reach"],
                ].map(([v, l]) => (
                  <div key={l} className="text-center">
                    <p className="text-[#aa8453] font-black text-lg leading-tight">
                      {v}
                    </p>

                    <p className="text-white/60 text-[10px] mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How It Works — 4 Simple Steps To Start */}
          <div className="mb-8">
            <div className="flex flex-col items-center text-center mb-6">
              <p className="section-subtitle">How It Works</p>
              <h3 className="section-title">4 Simple Steps To Start</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorksSteps.map((s, i) => (
                <div key={s.step} className="relative">
                  <div className="bg-[#faf8f5] rounded-xl p-6 h-full hover:shadow-md transition-all duration-300">
                    <p className="text-4xl font-black text-[#aa8453]/20 mb-2">
                      {s.step}
                    </p>
                    <p className="font-bold text-[#191717] mb-2">{s.label}</p>
                    <p className="text-sm text-[#888] leading-relaxed">
                      {s.detail}
                    </p>
                  </div>

                  {i < howItWorksSteps.length - 1 && (
                    <ChevronRight
                      size={18}
                      className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-[#aa8453]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <h3 className="text-center text-2xl font-bold text-[#191717] mb-6">
            Your Benefits As A Partner With Deal Forever
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-[#faf8f5] rounded-xl p-6 text-center border border-gray-200 hover:border-[#aa8453]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                  <img
                    src={`${IMG}${b.icon}`}
                    alt={b.title}
                    className="w-7 h-7 object-contain"
                  />
                </div>

                <h4 className="text-base font-bold text-[#191717] mb-2">
                  {b.title}
                </h4>

                <p className="text-sm text-[#888] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. BUSINESS OPPORTUNITIES ───────────────────────────── */}
      <section className="section-padding bg-[#faf8f5]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <p className="section-subtitle">Business Opportunities</p>
              <h2 className="section-title">An Unprecedented Opportunity</h2>
              <p className="text-[#555] text-sm leading-relaxed mb-4">
                Deal Forever introduces an unprecedented opportunity to showcase
                unique products from various innovators on a single multilevel
                marketing platform. Enjoy the benefit of e-commerce combined
                with Deal Forever branded chain stores, creating a robust
                platform for success.
              </p>
              <p className="text-[#555] text-sm leading-relaxed mb-4">
                Join Deal Forever today and explore a diverse range of unique
                products. Benefit from our integrated approach to marketing and
                retail, and seize the opportunity to expand your business and
                achieve new heights.
              </p>
              {/* Key pillars */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    label: "Physical Stores",
                    detail: "Nationwide branded retail locations.",
                  },
                  {
                    label: "E-Commerce",
                    detail: "Online ordering to 10,000+ pin codes.",
                  },
                  {
                    label: "MLM Network",
                    detail: "Sponsor-based multilevel income tree.",
                  },
                  {
                    label: "Mobile App",
                    detail: "24/7 ordering and business management.",
                  },
                ].map((p) => (
                  <div
                    key={p.label}
                    className="bg-white border border-gray-200 rounded-lg p-3"
                  >
                    <p className="text-xs font-bold text-[#191717] mb-0.5">
                      {p.label}
                    </p>
                    <p className="text-xs text-[#888]">{p.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <ContainedImage
              src={BUSINESS_OPPORTUNITY_IMG}
              alt="Deal Forever Business Opportunity"
            />
          </div>
        </div>
      </section>

      {/* ── 3. COMPENSATION PLAN ────────────────────────────────── */}
      <>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
              <div className="w-full lg:w-[48%]">
                <p className="section-subtitle">Compensation Plan</p>
                <h2 className="section-title mb-4">
                  A Highly Simplified Dual Plan with Multiple Benefits to All
                </h2>
                <p className="text-[#666] leading-8 text-base">
                  Deal Forever upholds an inspiring ideology of bringing
                  happiness into the lives of billions through an exceptional
                  range of high-quality life care products. Its unique
                  compensation plan offers unlimited opportunities through an
                  advanced consumer loyalty program. Join us to make a
                  difference and grow together.
                </p>
              </div>
              <div className="w-full lg:w-[45%] flex justify-end">
                <ContainedImage
                  src={BUSINESS_PLAN_IMG}
                  alt="Compensation Plan"
                />
              </div>
            </div>
          </div>
        </section>

        {/* sustainable direct selling system with strong management team — full bleed, outside container */}
        <section className="py-10 bg-[#191717] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
          <div className="relative container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Sustainable Direct Selling System With Strong Management Team
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                "ISO certified delivery system",
                "Full scale business automation",
                "World class leadership",
                "Cutting edge technology",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-white/80 bg-white/5 rounded-xl p-4"
                >
                  <CheckCircle2 size={20} className="text-[#aa8453] shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-center mb-6">
                Income Highlights
              </h3>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
                  {incomeHighlights.map((h, i) => (
                    <div
                      key={i}
                      className="bg-[#191717] rounded-xl p-6 text-center hover:scale-105 transition duration-300"
                    >
                      <p className="text-5xl font-black text-[#aa8453] mb-4">
                        {h.num}
                      </p>
                      <h4 className="text-white font-bold mb-2">{h.title}</h4>
                      <p className="text-white/70 text-sm">{h.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-3xl font-bold text-center text-[#191717] mb-6">
                Why Our Plan Stands Out
              </h3>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                {[
                  "No rank demotion — your achievements are permanent.",
                  "Accumulative BV — volume never resets or expires.",
                  "Infinite depth — earn from every level of your network.",
                  "No time pressure — rank up whenever you're ready.",
                ].map((text, index) => {
                  const [title, desc] = text.split("—");
                  return (
                    <div
                      key={index}
                      className="group bg-[#191717] rounded-2xl p-8 border border-[#2b2b2b] shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#aa8453] transition-all duration-300"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-[#aa8453]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#aa8453] transition-colors duration-300">
                        <span className="text-2xl font-bold text-[#aa8453] group-hover:text-white transition-colors duration-300">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-white text-center leading-8">
                        <span className="font-bold text-[#aa8453]">
                          {title.trim()}
                        </span>
                        <br />
                        <span className="text-gray-300">{desc?.trim()}</span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-gray-200" />
              <p className="text-center text-[#888] text-xs font-semibold tracking-wide uppercase whitespace-nowrap">
                8 structural advantages of the dual plan
              </p>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {planBenefits.map((b, i) => (
                <div
                  key={i}
                  className="bg-[#faf8f5] rounded-lg p-4 text-center border border-gray-200 hover:border-[#aa8453]/40 transition-colors duration-200"
                >
                  <div className="w-10 h-10 mx-auto mb-2.5 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                    <img
                      src={`${IMG}${b.icon}`}
                      alt={b.title}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <p className="text-xs font-semibold text-[#191717] leading-snug mb-1">
                    {b.title}
                  </p>
                  <p className="text-[10px] text-[#999] leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>

      {/* ── 4. FINANCIAL FREEDOM ────────────────────────────────── */}
      <section className="section-padding bg-[#191717]">
        <div className="container-custom">
          <div className="text-center mb-6">
            <p className="text-[#aa8453] font-semibold text-xs tracking-widest uppercase mb-2">
              Financial Freedom
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              12 Income Streams, One Business
            </h2>
            <p className="text-white/50 text-sm max-w-2xl mx-auto">
              From daily retail commissions to yearly profit sharing — Deal
              Forever's compensation architecture is engineered so that every
              level of effort is rewarded proportionally.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {financialItems.map((f, i) => (
              <button
                key={i}
                onClick={() => openFinancialModal(f)}
                className="text-left bg-white/5 rounded-lg p-4 border border-white/10 hover:border-[#aa8453]/50 transition-colors duration-200 cursor-pointer"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-9 h-9 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                    <img
                      src={`${IMG}${f.icon}`}
                      alt={f.title}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white/90 leading-snug">
                      {f.title}
                    </p>
                    <p className="text-[#aa8453] font-black text-sm">{f.sub}</p>
                  </div>
                </div>
                <p className="text-[10px] text-white/40 leading-relaxed">
                  {f.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Modal */}
          {isFinancialModalOpen && selectedFinancialItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={closeFinancialModal}
              />

              {/* Modal */}
              <div className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-scale-in">
                {/* Close Button */}
                <button
                  onClick={closeFinancialModal}
                  className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[#faf8f5] text-[#555] hover:bg-black hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>

                {/* Quote-style accent */}
                <div className="absolute top-8 left-6 text-[#aa8453]/10 text-8xl font-serif leading-none pointer-events-none">
                  &ldquo;
                </div>

                {/* Header */}
                <div className="relative bg-[#aa8453] px-6 py-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-2 shrink-0">
                      <img
                        src={`${IMG}${selectedFinancialItem.icon}`}
                        alt={selectedFinancialItem.title}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">
                        {selectedFinancialItem.title}
                      </h3>
                      <p className="text-sm text-white/70">
                        {selectedFinancialItem.sub}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 py-6 overflow-y-auto max-h-[50vh]">
                  <p className="text-[#555] text-sm leading-relaxed">
                    {selectedFinancialItem.detail}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── 5. DISTRIBUTOR / WARNING ─────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <ContainedImage
              src={WARNING_IMG}
              alt="Stay informed and protected"
            />

            {/* Right Content */}
            <div>
              <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                ⚠ WARNING
              </span>

              <h2 className="text-2xl md:text-3xl font-bold text-[#191717] mb-3">
                Stay Informed, Stay Protected
              </h2>

              <p className="text-[#888] leading-7 mb-4">
                Deal Forever operates as a fully compliant direct-selling
                organisation under Indian law. Before joining any network
                marketing opportunity, be aware of the following legal
                protections:
              </p>

              <div className="space-y-3">
                <div className="flex gap-3 bg-red-50 rounded-xl p-4">
                  <span className="font-bold text-red-500 shrink-0">1.</span>
                  <p className="text-sm text-[#444] leading-relaxed">
                    Promoters and participants in trading schemes are prohibited
                    from soliciting payments by promising benefits contingent
                    upon the recruitment of others.
                  </p>
                </div>

                <div className="flex gap-3 bg-red-50 rounded-xl p-4">
                  <span className="font-bold text-red-500 shrink-0">2.</span>
                  <p className="text-sm text-[#444] leading-relaxed">
                    Be wary of assertions that substantial income can be readily
                    obtained without adequate effort or time investment.
                    Earnings depend entirely on individual performance.
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#999] leading-relaxed mt-4">
                Deal Forever encourages all prospects to read the full
                compensation plan and consult with existing distributors before
                making any business commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. SPECIAL BENEFITS (zigzag) ────────────────────────── */}
      <section className="section-padding bg-[#faf8f5]">
        <div className="container-custom">
          <div className="text-center mb-6 max-w-2xl mx-auto">
            <p className="section-subtitle">Special Benefits</p>
            <h2 className="section-title mb-3">Exclusive Member Rewards</h2>
            <p className="text-sm text-[#888] leading-relaxed">
              Beyond income, Deal Forever empowers its rank achievers with
              healthcare, education, and lifestyle benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Medical Insurance Card */}
            <div className="group relative bg-white rounded-2xl border border-gray-200 p-6 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical Insurance Coverage"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex gap-4 items-start mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-[#faf8f5] flex items-center justify-center border border-gray-200">
                    <img
                      src={`${IMG}special1.png`}
                      alt="Medical Insurance"
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#191717] mb-1.5 leading-snug">
                      FREE MEDICAL INSURANCE POLICY
                    </h3>
                    <p className="text-sm text-[#555] leading-relaxed">
                      Deal Forever provides a free medical insurance policy to
                      all State Team Coordinators (STC) Rank Achievers.
                    </p>
                  </div>
                </div>
                <ul className="space-y-1.5 pl-2 border-t border-gray-200 pt-4">
                  {[
                    "Full family coverage included",
                    "No premium required from the distributor",
                    "Activated automatically on rank achievement",
                  ].map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-xs text-[#666]"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#aa8453] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <span className="text-xs text-[#aa8453] font-semibold block mt-3">
                  Terms & Conditions apply
                </span>
              </div>
            </div>

            {/* Scholarship Card */}
            <div className="group relative bg-white rounded-2xl border border-gray-200 p-6 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Higher Educational Scholarship"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex gap-4 items-start mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-[#faf8f5] flex items-center justify-center border border-gray-200">
                    <img
                      src={`${IMG}special2.png`}
                      alt="Educational Scholarship"
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#191717] mb-1.5 leading-snug">
                      HIGHER EDUCATIONAL SCHOLARSHIP PROGRAMME
                    </h3>
                    <p className="text-sm text-[#555] leading-relaxed">
                      A wonderful opportunity for recommending your beloved ones
                      for a higher educational scholarship to all Regional Team
                      Coordinator (RTC) Rank Achievers.
                    </p>
                  </div>
                </div>
                <ul className="space-y-1.5 pl-2 border-t border-gray-200 pt-4">
                  {[
                    "Supports undergraduate and postgraduate studies",
                    "Available to children or dependants of the achiever",
                    "Renewable annually based on academic performance",
                  ].map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-xs text-[#666]"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#aa8453] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <span className="text-xs text-[#aa8453] font-semibold block mt-3">
                  Terms & Conditions apply
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. IMPORTANT THINGS TO REMEMBER ─────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-6">
            <p className="section-subtitle">Overview</p>
            <h2 className="section-title">Important Things To Remember</h2>
            <p className="text-sm text-[#888] max-w-xl mx-auto">
              Understanding the foundations of how Deal Forever operates — from
              product distribution to direct selling principles — sets every
              distributor up for long-term success.
            </p>
          </div>

          <div className="space-y-8">
            {/* 7a. Product Distribution System — image floats, text wraps */}
            <FloatWrapSection
              image={BUSINESS_FLOW_IMG}
              alt="Product Distribution System"
              icon="icons8-tesseract-64 .png"
              title="Product Distribution System"
              float="right"
            >
              <p className="text-sm text-[#555] leading-relaxed mb-4">
                Deal Forever blends a nationwide physical retail presence with a
                powerful e-commerce backbone, so every product reaches every
                distributor and customer — wherever they are. Orders placed
                through the app are fulfilled via our centrally managed
                warehouse and last-mile delivery partners, ensuring speed and
                reliability.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {distributionStats.map((d, i) => (
                  <div
                    key={i}
                    className="bg-[#faf8f5] rounded-lg p-3 text-center border border-gray-200"
                  >
                    <p className="text-sm font-black text-[#aa8453] leading-tight">
                      {d.value}
                    </p>
                    <p className="text-[10px] text-[#888] font-medium mt-1 leading-snug">
                      {d.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#999] leading-relaxed">
                Our logistics partners are integrated directly with the Deal
                Forever platform, giving distributors and customers full
                visibility from warehouse dispatch to doorstep delivery.
              </p>
            </FloatWrapSection>

            {/* 7b. Advantages of Physical Store — image floats, bullets wrap */}
            <FloatWrapSection
              image={BUILDING_IMG}
              alt="Physical Store"
              icon="icons8-store-50.png"
              title="Advantages of Physical Stores"
              float="left"
            >
              <p className="text-sm text-[#555] leading-relaxed mb-3">
                Deal Forever's branded retail locations give distributors a
                credible, professional space to showcase products and attract
                walk-in customers — building trust that translates to repeat
                business and stronger referrals.
              </p>
              <BulletList items={physicalStoreBullets} />
            </FloatWrapSection>

            {/* 7c. Benefits of E-Commerce — image floats, bullets wrap */}
            <FloatWrapSection
              image={ECART_IMG}
              alt="E-Commerce Benefits"
              icon="icons8-shopping-cart-100.png"
              title="Benefits of E-Commerce"
              float="right"
            >
              <p className="text-sm text-[#555] leading-relaxed mb-3">
                The Deal Forever e-commerce platform removes every geographical
                and time barrier from your business. Sell to customers across
                India around the clock, and let technology handle the heavy
                lifting of order processing and delivery.
              </p>
              <BulletList items={ecommerceBullets} />
            </FloatWrapSection>

            {/* 7d. Benefits of Direct Selling — image floats, bullets wrap */}
            <FloatWrapSection
              image={`${IMG}direct-selling.png`}
              alt="Direct Selling"
              icon="icons8-cart-96.png"
              title="Benefits of Direct Selling"
              float="left"
            >
              <p className="text-sm text-[#555] leading-relaxed mb-3">
                Direct selling is one of the world's oldest and most proven
                business models — and Deal Forever has built a modern,
                technology-enabled version of it that combines personal
                relationships with the scale of a nationwide network.
              </p>
              <BulletList items={directSellingBullets} />
            </FloatWrapSection>

            {/* 7e. Glossary of Terms */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <SectionIcon src="icons8-list-64.png" />
                <h3 className="font-bold text-[#191717]">Glossary Of Terms</h3>
              </div>
              <p className="text-sm text-[#555] leading-relaxed mb-4">
                Familiarise yourself with these core terms before you begin —
                understanding the language of the plan will help you explain it
                clearly to prospects and track your own progress accurately.
              </p>
              <div className="space-y-2">
                {glossaryTerms.map((g, i) => (
                  <div
                    key={i}
                    className="flex gap-3 bg-[#faf8f5] border border-gray-200 rounded-lg p-3"
                  >
                    <span className="text-xs font-black text-[#aa8453] shrink-0 w-20">
                      {g.term}
                    </span>
                    <span className="text-xs text-[#555] leading-relaxed">
                      {g.def}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 7f. Sponsor Network / Placement Network / Spillover — images */}
            <div className="grid sm:grid-cols-3 gap-4 items-center">
              <ContainedImage src={SPONSOR_NETWORK_IMG} alt="Sponsor Network" />
              <ContainedImage src={SPILLOVER_IMG} alt="Spillover Concept" />
              <ContainedImage
                src={PLACEMENT_NETWORK_IMG}
                alt="Placement Network"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. RANK ACHIEVEMENT ─────────────────────────────────── */}
      <section className="section-padding bg-[#faf8f5]">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-4">
            <SectionIcon src="icons8-star-50.png" />
            <h2 className="text-xl font-bold text-[#191717]">
              Rank Achievement
            </h2>
          </div>
          <p className="text-sm text-[#666] leading-relaxed mb-6">
            Deal Forever's rank structure is a clear roadmap from Day 1 to
            Diamond. Every rank you earn is permanent — no demotion, no clock
            resetting. The milestones below show the path from your first sale
            all the way to executive leadership, with growing income and
            privileges at each level.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <ContainedImage src={TABLE3_IMG} alt="Rank Achievement Chart" />
            <ContainedImage src={TABLE4_IMG} alt="Rank Achievement Details" />
          </div>

          {/* Fast start callout */}
          <div className="bg-[#191717] rounded-xl p-6 mb-6">
            <p className="text-[#aa8453] font-bold text-xs tracking-widest uppercase mb-3">
              Fast Start Advantage
            </p>
            <p className="text-white/70 text-sm leading-relaxed max-w-3xl">
              Distributors who hit qualifying volumes in their first 90 days
              unlock accelerated rank placement and additional Fast Start
              bonuses — giving early movers a compounding head start on their
              network and income.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-sm text-[#191717] mb-1">
                Fast Start Position (JSE, SSE, TC)
              </h3>
              <p className="text-xs text-[#888] mb-3">
                Entry-level rank tiers with achievable volume targets for new
                distributors.
              </p>
              <ContainedImage
                src={TABLE1_IMG}
                alt="Fast Start Position (JSE, SSE, TC)"
              />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#191717] mb-1">
                Fast Start Executive Team Coordinator (ETC)
              </h3>
              <p className="text-xs text-[#888] mb-3">
                Advanced rank unlocking leadership bonuses and exclusive
                incentive programmes.
              </p>
              <ContainedImage
                src={TABLE2_IMG}
                alt="Fast Start Executive Team Coordinator (ETC)"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. CODE OF ETHICS ───────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <SectionIcon src="icons8-protect-64.png" />
              <h2 className="text-xl font-bold text-[#191717]">
                Code of Ethics
              </h2>
            </div>
            <p className="text-sm text-[#555] leading-relaxed mb-3">
              Distributors are obligated to maintain adherence to the Deal
              Forever Code of Ethics at all times. The Company reserves the
              right to terminate distributorship for any infraction. Upon
              enrolment, distributors are required to pledge the following:
            </p>
            <p className="text-xs text-[#999]">
              These commitments are not formalities — they are the backbone of a
              community built on trust, transparency, and mutual respect.
              Adherence to this code protects every distributor in the network.
            </p>
          </div>
          <ol className="space-y-3">
            {codeOfEthics.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 bg-[#faf8f5] rounded-lg p-4 border border-gray-200"
              >
                <span className="font-black text-[#aa8453] shrink-0">
                  {i + 1}.
                </span>
                <p className="text-sm text-[#555] leading-relaxed">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 10. SUPPORT ──────────────────────────────────────────── */}
      <section className="section-padding bg-[#faf8f5]">
        <div className="container-custom">
          <div className="text-center mb-6">
            <p className="section-subtitle">Support</p>
            <h2 className="section-title">
              We're Here To Support Your Drive Every Step Of The Way
            </h2>
            <p className="text-sm text-[#888] max-w-xl mx-auto">
              From a mobile app to personalised training, Deal Forever wraps its
              entire distributor network in a comprehensive support ecosystem so
              you're never figuring things out alone.
            </p>
          </div>

          <div className="space-y-8">
            {/* 10a. Digital — text left, image right */}
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <SectionIcon src="icons8-digital-66.png" />
                  <h3 className="font-bold text-[#191717]">
                    Digital Accessibility And Assistance
                  </h3>
                </div>
                <p className="text-[#555] text-sm leading-relaxed mb-4">
                  Download <strong>DEAL FOREVER</strong>'s mobile app to shop or
                  manage your business anytime, anywhere! Get it on Play Store /
                  App Store or visit{" "}
                  <a
                    href="https://www.mydealforever.com"
                    className="text-[#aa8453] hover:underline"
                  >
                    www.mydealforever.com
                  </a>{" "}
                  to place your order.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      label: "Order Tracking",
                      detail: "Real-time updates from dispatch to door.",
                    },
                    {
                      label: "Income Dashboard",
                      detail: "Live view of all bonuses and volumes.",
                    },
                    {
                      label: "Team Management",
                      detail: "Monitor your network's performance.",
                    },
                    {
                      label: "Product Catalogue",
                      detail: "Full range browsable any time.",
                    },
                  ].map((f) => (
                    <div
                      key={f.label}
                      className="bg-white border border-gray-200 rounded-lg p-3"
                    >
                      <p className="text-xs font-bold text-[#191717] mb-0.5">
                        {f.label}
                      </p>
                      <p className="text-[10px] text-[#999]">{f.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <ContainedImage src={`${IMG}digital.png`} alt="Digital Access" />
            </div>

            {/* 10b. Learning — image left, text right */}
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <ContainedImage
                src={`${IMG}learning.png`}
                alt="Learning and Development"
              />
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <SectionIcon src="icons8-learning-100.png" />
                  <h3 className="font-bold text-[#191717]">
                    Learning And Development
                  </h3>
                </div>
                <p className="text-[#555] text-sm leading-relaxed mb-4">
                  Deal Forever provides online, mobile, and instructor-led
                  training to sharpen your product, business, and industry
                  knowledge. Visit the Learning Center at{" "}
                  <a
                    href="https://www.mydealforever.com"
                    className="text-[#aa8453] hover:underline"
                  >
                    www.mydealforever.com
                  </a>{" "}
                  for the full curriculum.
                </p>
                <ul className="space-y-2">
                  {[
                    "Onboarding modules for brand-new distributors",
                    "Product knowledge certifications for each category",
                    "Business plan presentation training",
                    "Leadership and team management workshops",
                    "Regional-language support for non-English speakers",
                  ].map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-2 text-xs text-[#666]"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#aa8453] shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 10c. Social Media — text left, image right */}
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <SectionIcon src="icons8-social-media-marketing-64.png" />
                  <h3 className="font-bold text-[#191717]">
                    Social Media Support
                  </h3>
                </div>
                <p className="text-[#555] text-sm leading-relaxed mb-4">
                  Deal Forever offers guidance on using social media effectively
                  to promote products and build your network — including
                  training, pre-written post templates, and access to approved
                  brand creatives.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Instagram",
                    "Facebook",
                    "WhatsApp",
                    "YouTube",
                    "Telegram",
                  ].map((p) => (
                    <span
                      key={p}
                      className="bg-white border border-gray-200 text-xs font-semibold text-[#191717] px-3 py-1.5 rounded-full"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <ContainedImage
                  src={`${IMG}socialmedia.png`}
                  alt="Social Media Support"
                />
                <ContainedImage src={MEDIA_IMG} alt="Media Kit" />
              </div>
            </div>

            {/* 10d. Contact — image left, text right */}
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <ContainedImage src={`${IMG}contactus.png`} alt="Contact Us" />
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <SectionIcon src="icons8-contact-us-96.png" />
                  <h3 className="font-bold text-[#191717]">
                    Feel Free To Contact Us
                  </h3>
                </div>
                <p className="text-[#555] text-sm leading-relaxed mb-4">
                  Our support team is ready to help with product orders,
                  business plan queries, or any technical questions about your
                  distributor account.
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Phone", value: "+91 9995320886 / +91 995320776" },
                    { label: "Email", value: "info@mydealforever.com" },
                    { label: "Website", value: "www.mydealforever.com" },
                  ].map((c) => (
                    <div
                      key={c.label}
                      className="flex gap-3 bg-[#faf8f5] border border-gray-200 rounded-lg p-3"
                    >
                      <span className="text-xs font-bold text-[#aa8453] w-14 shrink-0">
                        {c.label}
                      </span>
                      <span className="text-xs text-[#555]">{c.value}</span>
                    </div>
                  ))}
                </div>

                {/* FAQ */}
                <div className="mt-6 space-y-2">
                  <p className="text-xs font-bold text-[#191717] mb-3">
                    Frequently Asked Questions
                  </p>
                  {supportFaqs.map((f) => (
                    <details
                      key={f.q}
                      className="bg-white border border-gray-200 rounded-lg group"
                    >
                      <summary className="cursor-pointer p-3 text-xs font-semibold text-[#191717] list-none flex justify-between items-center">
                        {f.q}
                        <span className="text-[#aa8453] text-base leading-none">
                          +
                        </span>
                      </summary>
                      <p className="px-3 pb-3 text-xs text-[#666] leading-relaxed">
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* 10e. Supply Chain — text left, image right */}
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <SectionIcon src="icons8-networking-64.png" />
                  <h3 className="font-bold text-[#191717]">
                    Supply Chain And Distribution Network
                  </h3>
                </div>
                <p className="text-[#555] text-sm leading-relaxed mb-4">
                  With stores and pickup centres nationwide, and home delivery
                  to over 10,000 pin codes, accessing Deal Forever products is
                  never a barrier — for you or your customers.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { v: "10,000+", l: "Delivery pin codes" },
                    { v: "Pan-India", l: "Pickup network" },
                    { v: "48 hr", l: "Average dispatch time" },
                  ].map((d) => (
                    <div
                      key={d.l}
                      className="bg-white border border-gray-200 rounded-lg p-3 text-center"
                    >
                      <p className="font-black text-sm text-[#aa8453]">{d.v}</p>
                      <p className="text-[10px] text-[#888] mt-0.5">{d.l}</p>
                    </div>
                  ))}
                </div>
              </div>
              <ContainedImage
                src={`${IMG}supplychain.png`}
                alt="Supply Chain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. ENTREPRENEURSHIP CTA ────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="text-4xl md:text-5xl font-black text-[#aa8453] tracking-tight">
                PULSE
              </span>
              <div className="w-px h-10 md:h-12 bg-gray-300" />
              <h2 className="text-xl md:text-2xl font-bold text-[#191717] text-left leading-snug">
                An <span className="text-[#aa8453]">Approach</span> To
                Successful{" "}
                <span className="text-[#aa8453]">Entrepreneurship</span>
              </h2>
            </div>
            <p className="text-sm text-[#888] max-w-xl mx-auto">
              Register free, pick up the plan, and take your first step toward
              financial independence with the support of a nationwide network
              behind you.
            </p>
          </div>

          <img
            src={PULSE_CIRCLE_IMG}
            alt="Pulse circle img"
            className="w-full max-w-[500px] md:max-w-[640px] h-auto object-contain rounded-2xl mx-auto"
          />

          <div className="mt-8 bg-[#191717] rounded-2xl px-6 py-8 md:py-10">
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.mydealforever.com"
                className="bg-[#aa8453] text-white text-sm font-bold px-8 py-3 rounded-lg hover:bg-[#956e3f] transition-colors"
              >
                Register Free Today
              </a>

              <a
                href="mailto:info@mydealforever.com"
                className="bg-white border border-[#aa8453] text-[#aa8453] text-sm font-bold px-8 py-3 rounded-lg hover:bg-[#faf8f5] transition-colors"
              >
                Talk to an Advisor
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
