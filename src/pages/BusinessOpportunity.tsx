import { CheckCircle2 } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { useState } from "react";
import { X } from "lucide-react";

const IMG = import.meta.env.VITE_BASE_URL + "/images/";
const BUSINESS_IMG = `${IMG}BusinessOpportunity/`;

const SALES_IMG = `${BUSINESS_IMG}Sales.jpeg`;
const PULSE_CIRCLE_IMG = `${BUSINESS_IMG}pulse-circle.jpeg`;

const TABLE1_IMG = `${BUSINESS_IMG}table1.jpeg`;
const TABLE2_IMG = `${BUSINESS_IMG}table2.jpeg`;
const TABLE3_IMG = `${BUSINESS_IMG}table3.jpeg`;
const TABLE4_IMG = `${BUSINESS_IMG}table4.jpeg`;

const SUPPORT_IMG = `${BUSINESS_IMG}support.jpeg`;
const FLOW_IMG = `${BUSINESS_IMG}flow.jpeg`;
const MEDIA_IMG = `${BUSINESS_IMG}media.jpeg`;
const TEAM_IMG = `${BUSINESS_IMG}team.jpeg`;

const WARNING_IMG = `${BUSINESS_IMG}warning.jpeg`;
const CASH_IMG = `${BUSINESS_IMG}cash.jpeg`;
const SPONSOR_NETWORK_IMG = `${BUSINESS_IMG}sponsornetwork.jpeg`;
const ECART_IMG = `${BUSINESS_IMG}ecart.jpeg`;

const PLACEMENT_NETWORK_IMG = `${BUSINESS_IMG}placementnetwork.jpeg`;
const BUSINESS_PLAN_IMG = `${BUSINESS_IMG}businessPlan.jpeg`;
const SPILLOVER_IMG = `${BUSINESS_IMG}spillover.jpeg`;

const BUSINESS_OPPORTUNITY_IMG = `${BUSINESS_IMG}businessopp.jpeg`;
const BUILDING_IMG = `${BUSINESS_IMG}building.jpeg`;
const BUSINESS_FLOW_IMG = `${BUSINESS_IMG}businessflow.jpeg`;
const THINKING_IMG = `${BUSINESS_IMG}thinking.jpeg`;

// ─── data ────────────────────────────────────────────────────────────────────

const benefits = [
  {
    icon: "icons8-balance-64 (5).png",
    title: "Workplace of Equal Opportunity",
    desc: "No matter your education or economic background, you can find success in this business through hardwork.",
  },
  {
    icon: "icons8-income-64.png",
    title: "Significant income potential",
    desc: "The sky's the limit when it comes to your income, determined by your work ethic.",
  },
  {
    icon: "icons8-reply-arrow-48.png",
    title: "Easier and simpler to start",
    desc: "Registering for a Deal Forever business is simple and completely free — no hidden costs, no barriers.",
  },
  {
    icon: "icons8-personal-growth-64.png",
    title: "Personal growth and development",
    desc: "Developing others is a way to develop yourself. Every interaction sharpens your leadership skills.",
  },
  {
    icon: "icons8-junction-64.png",
    title: "Flexibility",
    desc: "Choose the time you work, the way you work, and where you work — total autonomy over your schedule.",
  },
  {
    icon: "icons8-trust-64.png",
    title: "A business passed down through generations",
    desc: "Build something lasting you can leave in your children's name — a true generational asset.",
  },
  {
    icon: "icons8-cube-64.png",
    title: "Exquisite range of products",
    desc: "Deal Forever provides a diverse selection of brands across multiple categories, ensuring your needs are met.",
  },
  {
    icon: "icons8-trust-badge-96.png",
    title: "Recognition and achievements",
    desc: "You receive recognition for your success through awards, rank titles, bonuses, and public appreciation.",
  },
];

const incomeHighlights = [
  {
    num: "01",
    title: "Daily Income",
    desc: "Earn every single day through retail sales and direct customer purchases.",
  },
  {
    num: "02",
    title: "Weekly Income",
    desc: "Receive your team-building bonus payouts on a regular weekly cycle.",
  },
  {
    num: "03",
    title: "Monthly Income",
    desc: "Performance bonuses and group volume rewards credited each month.",
  },
  {
    num: "04",
    title: "7 Types of Universal Genealogy Income",
    desc: "Deep, multi-level income streams that pay across your entire network tree.",
  },
];

const planBenefits = [
  {
    icon: "icons/icons8-documents-50.png",
    title: "Simplified Dual Marketing Plan",
    desc: "Easy to explain, easier to grow.",
  },
  {
    icon: "icons/icons8-money-50.png",
    title: "Accumulative BV",
    desc: "Business volume never resets — it keeps adding up.",
  },
  {
    icon: "icons/icons8-depth-48.png",
    title: "Infinite Depth Calculation",
    desc: "Earn from every level, no cap on depth.",
  },
  {
    icon: "icons/icons8-decrease-50.png",
    title: "No Rank Demotion",
    desc: "Once you earn a rank, it is yours for life.",
  },
  {
    icon: "icons/icons8-delete-trash-50.png",
    title: "No Flesh Out",
    desc: "Your network is preserved and protected always.",
  },
  {
    icon: "icons/icons8-time-64.png",
    title: "No Time Frame For Achievers",
    desc: "Work at your own pace without deadline pressure.",
  },
  {
    icon: "icons/icons8-infinity-64 (1).png",
    title: "Limitless Achievements",
    desc: "No ceiling on your rank or reward milestones.",
  },
  {
    icon: "icons/icons8-balance-64 (1).png",
    title: "Equal Opportunities",
    desc: "The same plan applies fairly to every distributor.",
  },
];

const compensationTables = [
  {
    img: TABLE1_IMG,
    title: "Team Building Bonus Slabs",
    desc: "Breaks down the Team Building Bonus percentage payout at each qualifying business volume slab, showing how your earnings scale as your team's combined volume grows.",
  },
  {
    img: TABLE2_IMG,
    title: "Performance Bonus Structure",
    desc: "Shows the exact performance bonus percentage tied to each monthly business volume tier, helping you plan realistic monthly income targets.",
  },
  {
    img: TABLE3_IMG,
    title: "Leadership Rank Requirements",
    desc: "Lists the personal and group volume requirements needed to qualify for each leadership rank, from Team Coordinator up through Executive levels.",
  },
  {
    img: TABLE4_IMG,
    title: "Profit Share Distribution",
    desc: "Shows how the Yearly Profit Share pool of 5% is distributed proportionally across qualifying ranks.",
  },
];

const financialItems = [
  {
    icon: "icons8-graph-64.png",
    title: "Saving On Consumption",
    sub: "10–20%",
    desc: "Save on every personal purchase you make.",
    detail:
      "Every Deal Forever member automatically saves between 10% and 20% on their own personal purchases, simply by buying the products they would use anyway. There's no selling, recruiting, or qualification required to unlock this benefit — it begins from your very first order. Over time, these savings compound significantly, especially for households that switch their everyday consumables to the Deal Forever range. This makes it the most accessible income stream in the entire plan, designed specifically for customers and new members who want to experience real value before stepping into the business side of things.",
  },
  {
    icon: "icons8-business-group-100 (1).png",
    title: "Team Building Bonus",
    sub: "10%",
    desc: "Rewarded for growing your downline team.",
    detail:
      "As you introduce new members and help them get started, you earn a 10% Team Building Bonus calculated on the combined business volume generated by your growing downline. This bonus directly rewards the early effort of identifying, onboarding, and activating new distributors. It's structured to encourage sustainable team growth rather than one-off recruitment, since the bonus continues to pay out as long as your team remains active. For many distributors, this becomes one of the first meaningful income streams beyond personal retail profit, marking the transition from customer to genuine business builder within the organization.",
  },
  {
    icon: "icons8-speedometer-64.png",
    title: "Performance Bonus",
    sub: "10%",
    desc: "Paid based on your monthly performance output.",
    detail:
      "The Performance Bonus rewards consistency, paying out 10% based on your personal and team business volume achieved each month. Unlike one-time incentives, this bonus resets and recalculates monthly, meaning your income stays directly tied to current effort rather than past achievements. It's designed to keep momentum high across the entire network, encouraging distributors to stay active month over month instead of relying solely on legacy team structures. Whether you're a new member finding your footing or an established leader maintaining volume, this bonus ensures that ongoing performance is always recognized and rewarded fairly and transparently.",
  },
  {
    icon: "icons8-trust-50 (2).png",
    title: "Business Supporting Bonus",
    sub: "5%",
    desc: "Support your business builders and earn.",
    detail:
      "The Business Supporting Bonus pays 5% to members who actively help their downline succeed — whether through training, mentorship, or hands-on guidance during early business stages. This bonus exists to formally reward the often-invisible work of supporting others: answering questions, attending calls, helping close sales, and building confidence in newer team members. It reinforces Deal Forever's philosophy that individual success is tied to collective growth. Leaders who consistently show up for their teams are compensated not just through their team's volume, but through this dedicated stream recognizing genuine support and involvement.",
  },
  {
    icon: "icons8-user-groups-50.png",
    title: "Business Building Bonus",
    sub: "10%",
    desc: "For helping others build their own businesses.",
    detail:
      "Earning 10%, the Business Building Bonus goes a step beyond team support — it specifically rewards members who actively help others establish and grow their own independent businesses within the network. This includes guiding new distributors through onboarding, helping them set goals, and assisting with their first few sales cycles. The bonus recognizes that a thriving network isn't built on one person's effort alone, but on a web of mentors empowering new entrepreneurs. It's an income stream built around multiplication: the more businesses you help launch successfully, the more this bonus compounds over time.",
  },
  {
    icon: "icons8-shopping-cart-100.png",
    title: "Top Retailer Bonus",
    sub: "20%",
    desc: "The highest retail reward for top sellers.",
    detail:
      "Reserved for the strongest direct sellers in the network, the Top Retailer Bonus offers a generous 20% reward for members who consistently lead in retail sales volume. This stream celebrates pure selling skill — distributors who build loyal customer bases and move product through genuine retail relationships rather than recruitment alone. It's a recognition that retail sales remain the foundation of any healthy direct selling business, and top performers deserve outsized rewards for keeping that foundation strong. For naturally talented salespeople, this bonus alone can become a substantial and reliable income source.",
  },
  {
    icon: "icons8-around-the-globe-50.png",
    title: "Travel Fund",
    sub: "4%",
    desc: "Accrue funds to travel the world in style.",
    detail:
      "The Travel Fund allocates 4% toward a dedicated account that qualifying members accumulate simply by maintaining consistent business activity. Rather than a one-time trip, this fund builds steadily over time, giving members the flexibility to redeem it toward international company retreats, leadership summits, or personal travel rewards as they reach milestones. It's designed to celebrate success in a tangible, experiential way — turning hard work into memories rather than just numbers in a bank account. For many in the network, this fund becomes a powerful motivator tied directly to lifestyle aspiration and personal achievement.",
  },
  {
    icon: "icons8-vehicle-50.png",
    title: "Vehicle Fund",
    sub: "3%",
    desc: "Drive your dream car funded by your business.",
    detail:
      "The Vehicle Fund sets aside 3% to help qualifying leaders work toward owning the car of their choice, funded progressively through their business performance. As members maintain qualifying ranks and volume over time, this fund accumulates and can be applied toward a vehicle purchase or lease, turning sustained business success into a visible, everyday symbol of achievement. It reflects a long-standing tradition in direct selling of rewarding top performers with lifestyle assets, reinforcing that consistent leadership and team growth translate into real, tangible rewards beyond the typical paycheck.",
  },
  {
    icon: "icons8-home-80.png",
    title: "Home Fund",
    sub: "3%",
    desc: "Invest in the home you always dreamed of.",
    detail:
      "Allocating 3% toward one of life's biggest milestones, the Home Fund helps long-term, high-performing members work toward owning their dream home. This fund accumulates gradually as members sustain strong business volume and leadership rank over an extended period, reflecting Deal Forever's commitment to rewarding loyalty and long-term vision rather than short-term wins. It's intended for the network's most dedicated builders — those who have invested years into developing their team and income — giving them a meaningful path toward a major life goal funded directly by the business they've built.",
  },
  {
    icon: "icons8-businessman-64 (1).png",
    title: "Leadership Bonus",
    sub: "25%",
    desc: "Highest bonus tier for proven team leaders.",
    detail:
      "As the highest bonus tier in the entire compensation plan, the Leadership Bonus rewards proven team leaders with 25% based on the overall business volume of their organization. Reaching this level typically requires sustained team growth, strong retention, and a track record of developing other leaders within your network. It represents the pinnacle of what's achievable through consistent effort and mentorship, compensating leaders not just for their own results but for the cumulative success of everyone they've helped build and grow. For top earners in the network, this bonus often becomes the primary driver of income.",
  },
  {
    icon: "icons8-leadership-64 (1).png",
    title: "Executive Leadership Bonus",
    sub: "10%",
    desc: "Exclusive executive-level income stream.",
    detail:
      "The Executive Leadership Bonus is an exclusive 10% stream reserved for members who reach the company's highest executive ranks. Unlike standard leadership rewards, this bonus recognizes individuals who have built multiple successful leadership lines beneath them, demonstrating an ability to develop leaders who can independently develop further leaders. It's a stream built around organizational depth and stability rather than just volume, rewarding those whose networks have matured into self-sustaining structures. Reaching executive status typically takes years of consistent business building, making this bonus a marker of true mastery within the Deal Forever opportunity.",
  },
  {
    icon: "icons8-slice-50.png",
    title: "Yearly Profit Share (PS)",
    sub: "5%",
    desc: "Share in the company's annual profits.",
    detail:
      "Once a year, the company allocates 5% of its overall profits to be shared among its top-qualifying members through the Yearly Profit Share program. This is distributed based on rank, sustained performance, and overall contribution to the company's growth throughout the year, rather than any single month's results. It serves as a long-term incentive that aligns individual success with company-wide performance — when Deal Forever grows, its top leaders share directly in that growth. This stream rewards patience and consistency, recognizing members who've stayed committed to the business over the full annual cycle.",
  },
];

const physicalStoreBullets = [
  {
    point: "Popularity",
    detail:
      "Physical stores build brand visibility and community trust in local markets.",
  },
  {
    point: "Instant gratification",
    detail:
      "Customers walk out with products in hand — no waiting for delivery.",
  },
  {
    point: "Ability to try on or try out the products",
    detail: "Touch, smell, and test before you buy builds buyer confidence.",
  },
  {
    point: "Social aspects",
    detail:
      "In-person shopping is a social experience that fosters loyalty and referrals.",
  },
  {
    point: "It deepens trust for online purchase",
    detail:
      "Customers who visit stores are more comfortable buying online later.",
  },
  {
    point: "It's great for branding",
    detail:
      "A physical presence communicates legitimacy and long-term commitment.",
  },
  {
    point: "Large range of products available",
    detail:
      "Full inventory on display means customers discover more, spend more.",
  },
];

const ecommerceBullets = [
  {
    point: "Flexible buying hours",
    detail: "Your store is open 24/7 — orders come in while you sleep.",
  },
  {
    point: "Buy/Sell internationally",
    detail: "Reach customers beyond your city, state, or country borders.",
  },
  {
    point: "Personalized online experience",
    detail: "Algorithms surface the right products to the right buyers.",
  },
  {
    point: "Easier to encourage impulse buy",
    detail:
      "Smart product suggestions at checkout increase average order value.",
  },
  {
    point: "Easy to retarget or remarket to customers",
    detail:
      "Follow up with interested buyers using targeted digital campaigns.",
  },
  {
    point: "Customers get a less invasive experience",
    detail: "Browse at their own pace, without sales pressure.",
  },
  {
    point: "Able to process high number of orders",
    detail: "Scale without proportionally scaling your team or infrastructure.",
  },
  {
    point: "Can scale business quickly",
    detail: "Launch new products or markets in days, not months.",
  },
  {
    point: "Can grow business organically with content",
    detail: "Blogs, videos, and social posts drive free, compounding traffic.",
  },
  {
    point: "Time saving",
    detail:
      "Automated payments, receipts, and order tracking save hours daily.",
  },
  {
    point: "No travel worries",
    detail: "Manage your entire business from your phone or laptop, anywhere.",
  },
];

const directSellingBullets = [
  {
    point: "Low start-up cost",
    detail:
      "Begin your business journey with minimal capital investment required.",
  },
  {
    point: "Leverage",
    detail:
      "Multiply your effort through a team — your network works even when you don't.",
  },
  {
    point: "Complete time and financial freedom",
    detail: "Design your own schedule and income targets on your own terms.",
  },
  {
    point: "Customer support and training",
    detail:
      "The company provides ongoing tools and training to help you succeed.",
  },
  {
    point: "Global business",
    detail:
      "Operate across borders with a network that spans states and countries.",
  },
  {
    point: "Personal development",
    detail:
      "Every sale and conversation builds communication and leadership skills.",
  },
  {
    point: "Passive residual income",
    detail:
      "Build once, earn continuously from your network's ongoing activity.",
  },
  {
    point: "Lifestyle upgradation",
    detail: "Better income translates directly to a higher quality of life.",
  },
  {
    point: "Direct contact with the seller ensures original products",
    detail: "Verified supply chain keeps counterfeit products out entirely.",
  },
  {
    point: "No discrimination",
    detail:
      "No gender, age, ethnicity, or disability barrier to entry or success.",
  },
  {
    point: "Introduces self-employment with virtual office",
    detail: "Your business runs from anywhere with an internet connection.",
  },
  {
    point: "Develops entrepreneurship",
    detail: "You learn to think, plan, and act like a true business owner.",
  },
  {
    point: "Social contact and personal recognition",
    detail:
      "Build meaningful relationships while earning public acknowledgement.",
  },
];

const glossaryTerms = [
  {
    term: "PV",
    def: "Point Value — 1 PV = ₹10. Used to measure personal retail sales activity.",
  },
  {
    term: "BV",
    def: "Business Volume — 1 BV = ₹1. The base unit for network volume calculations.",
  },
  {
    term: "A BV",
    def: "Accumulative Business Volume — your total BV that never resets or expires.",
  },
  {
    term: "P PV",
    def: "Personal Point Value — PV generated by your own direct retail sales.",
  },
  {
    term: "P BV",
    def: "Personal Business Volume — BV generated by your own purchases and sales.",
  },
  {
    term: "D/R C BV",
    def: "Direct Referrals Customers Business Volume (Sponsor Network).",
  },
  {
    term: "D/R TC G BV",
    def: "Direct Referrals Team Coordinator Group Business Volume (Sponsor Network).",
  },
  {
    term: "M BV",
    def: "Monthly BV = Personal BV + Direct Referral Customer BV + Direct Referral TC Group BV.",
  },
  {
    term: "SPILLOVER",
    def: "A distributor placed under you by your upline — they become part of your Placement Tree.",
  },
  {
    term: "QUALIFYING TEAM",
    def: "The team with the highest PV — excluded from bonus computation.",
  },
  {
    term: "PAYOUT TEAM",
    def: "The team with the lowest PV — used for team building bonus calculation.",
  },
  {
    term: "TERM",
    def: "The placement of your downlines within your Placement Network tree.",
  },
  {
    term: "GROUP",
    def: "The placement of your direct referrals within your Sponsor Network.",
  },
];

const codeOfEthics = [
  "I will adhere to the highest principles of honesty and integrity in the conduct of my DEAL FOREVER Business.",
  "I commit to presenting the Company's business plan with accuracy and honesty, providing a clear and realistic depiction of the effort necessary for success. I will refrain from engaging in any misleading, false, deceptive, or unfair recruiting practices, including misrepresenting actual or potential sales, earnings, or business advantages to prospective distributors.",
  "I commit to refraining from making any negative or disparaging remarks concerning the Company, its products, officers, employees, or other individuals. I will maintain a respectful demeanour toward the Company and the direct selling industry.",
  "I commit to abstaining from the sale of DEAL FOREVER products through retail establishments.",
  "I commit to refraining from instigating, encouraging, participating in, or guiding downlines in seeking bonus rebates or commission refunds. Furthermore, I will not encourage distributors I recruit to purchase goods, services, literature, or sales demonstration equipment in unreasonably large quantities.",
];

const distributionStats = [
  { value: "10,000+", label: "Pin codes served" },
  { value: "Pan-India", label: "Store & pickup network" },
  { value: "24/7", label: "Mobile app ordering" },
];

const supportFaqs = [
  {
    q: "How do I download the app?",
    a: 'Search "Deal Forever" on the Google Play Store or Apple App Store and install. Log in with your distributor ID to access your full dashboard.',
  },
  {
    q: "Can I track my orders?",
    a: "Yes — real-time order tracking is available inside the app and on www.mydealforever.com from the moment you place an order.",
  },
  {
    q: "Is training available in regional languages?",
    a: "Deal Forever offers training materials and instructor-led sessions in multiple regional languages to ensure no distributor is left behind.",
  },
];

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
// max-h keeps it from overflowing its column on tall-image assets
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
      className={`rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-[#faf8f5] flex items-center justify-center ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto max-h-[420px] object-contain"
      />
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
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 xl:gap-24 mb-20">
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
                src={`${IMG}Web Banner.jpg.jpeg`}
                alt="Business Opportunity Banner"
                className="w-full max-w-2xl rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Question + Quote + Stat strip */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
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
              <img
                src={THINKING_IMG}
                alt="Think about your future"
                className="w-full h-28 object-cover rounded-lg"
              />
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

          {/* How it Works */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              {
                step: "01",
                label: "Register Free",
                detail: "Sign up online in minutes at no cost.",
              },
              {
                step: "02",
                label: "Build Your Network",
                detail: "Refer others and grow a team under you.",
              },
              {
                step: "03",
                label: "Earn & Grow",
                detail: "Multiple income streams activate as you rank up.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="bg-[#faf8f5] border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300"
              >
                <p className="text-4xl font-black text-[#aa8453]/20 mb-2">
                  {s.step}
                </p>

                <p className="font-bold text-[#191717] mb-2">{s.label}</p>

                <p className="text-sm text-[#888] leading-relaxed">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Flow banner */}
          <div className="mb-16 rounded-2xl overflow-hidden border border-gray-200">
            <img
              src={FLOW_IMG}
              alt="How the Deal Forever business flow works"
              className="w-full h-56 object-cover"
            />
            <div className="bg-[#faf8f5] p-4 text-center">
              <p className="text-sm text-[#888]">
                From registration to residual income — see the complete
                business flow at a glance.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <h3 className="text-center text-2xl font-bold text-[#191717] mb-10">
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
          <div className="grid lg:grid-cols-2 gap-10 items-center">
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
              <p className="text-[#555] text-sm leading-relaxed mb-6">
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
            <div className="relative">
              <img
                src={BUSINESS_OPPORTUNITY_IMG}
                alt="Deal Forever Business Opportunity"
                className="rounded-2xl shadow-2xl w-full object-cover h-[450px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#aa8453] text-white p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">1000+</p>
                <p className="text-sm">Happy Distributors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. COMPENSATION PLAN ────────────────────────────────── */}
      <>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-20 mb-20">
              <div className="w-full lg:w-[48%]">
                <p className="section-subtitle">Compensation Plan</p>
                <h2 className="section-title mb-6">
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
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* sustainable direct selling system with strong management team — full bleed, outside container */}
        <section className="py-20 bg-[#191717] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
          <div className="relative container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
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
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-6">
                Income Highlights
              </h3>
              <div className="rounded-xl overflow-hidden mb-10 max-w-3xl mx-auto shadow-md">
                <img
                  src={SALES_IMG}
                  alt="Daily, weekly and monthly sales income"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl">
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

            <div className="mb-20">
              <h3 className="text-3xl font-bold text-center text-[#191717] mb-12">
                Why Our Plan Stands Out
              </h3>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
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

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
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

            {/* Compensation Plan Tables */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-gray-200" />
              <p className="text-center text-[#888] text-xs font-semibold tracking-wide uppercase whitespace-nowrap">
                Compensation Plan At A Glance
              </p>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {compensationTables.map((t, i) => (
                <div
                  key={i}
                  className="bg-[#faf8f5] rounded-xl border border-gray-200 overflow-hidden"
                >
                  <img
                    src={t.img}
                    alt={t.title}
                    className="w-full h-56 object-cover border-b border-gray-200"
                  />
                  <div className="p-5">
                    <h4 className="font-bold text-sm text-[#191717] mb-2">
                      {t.title}
                    </h4>
                    <p className="text-xs text-[#666] leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>

      {/* ── 4. FINANCIAL FREEDOM ────────────────────────────────── */}
      <section className="section-padding bg-[#191717]">
        <div className="container-custom">
          <div className="text-center mb-4">
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

          <div className="max-w-3xl mx-auto my-8 rounded-xl overflow-hidden shadow-lg">
            <img
              src={CASH_IMG}
              alt="Financial freedom with Deal Forever"
              className="w-full h-52 object-cover"
            />
          </div>

          {/* Total pool callout */}
          <div className="flex justify-center gap-6 my-8 ">
            {[
              ["Up to 20%", "on consumption savings"],
              ["25%", "leadership bonus"],
              ["5%", "yearly profit share"],
            ].map(([v, l]) => (
              <div
                key={l}
                className="text-center border-2 border-[#aa8453] p-4 rounded-xl"
              >
                <p className="text-[#aa8453] font-black text-2xl">{v}</p>
                <p className="text-white/50 text-xs mt-0.5">{l}</p>
              </div>
            ))}
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
        <div className="container-custom max-w-5xl mx-auto">
          <div className="bg-[#fafafa] border border-gray-200 rounded-2xl p-8 md:p-12">
            <div className="mb-6 rounded-xl overflow-hidden">
              <img
                src={WARNING_IMG}
                alt="Stay informed and protected"
                className="w-full h-40 object-cover"
              />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xl">
                ⚠
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
                  Important Notice
                </p>
                <h2 className="text-3xl font-bold text-[#191717]">
                  Stay Informed, Stay Protected
                </h2>
              </div>
            </div>

            <p className="text-[#666] leading-8 mb-8">
              Deal Forever operates as a compliant direct-selling organisation
              under the applicable laws of India. Before becoming a distributor,
              we encourage every individual to understand the business model,
              compensation structure, and company policies to make an informed
              decision.
            </p>

            <ol className="list-decimal pl-6 space-y-4 text-[#555] leading-8">
              <li>
                Promoters and participants in trading schemes must not solicit
                payments by promising benefits that are primarily dependent upon
                the recruitment of additional participants.
              </li>

              <li>
                Be cautious of claims suggesting guaranteed or effortless
                income. Earnings depend on individual effort, product sales,
                leadership, and consistent business activity. No level of income
                is guaranteed.
              </li>
            </ol>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 leading-7">
                Deal Forever recommends that all prospective distributors
                carefully review the Compensation Plan, Company Policies, and
                Product Information, and consult existing distributors before
                making any business commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. SPECIAL BENEFITS (zigzag) ────────────────────────── */}
      <section className="section-padding bg-[#faf8f5]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="section-subtitle">Special Benefits</p>
            <h2 className="section-title">Exclusive Member Rewards</h2>
          </div>

          <div className="space-y-14">
            {/* Medical Insurance — text left, image right */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex gap-5 items-start mb-4">
                  <div className="w-14 h-14 shrink-0 rounded-lg bg-white flex items-center justify-center border border-gray-200">
                    <img
                      src={`${IMG}special1.png`}
                      alt="Medical Insurance"
                      className="w-9 h-9 object-contain"
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
                    <li key={b} className="flex items-start gap-2 text-xs text-[#666]">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#aa8453] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <span className="text-xs text-[#aa8453] font-semibold block mt-3">
                  Terms & Conditions apply
                </span>
              </div>
              <img
                src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical Insurance Coverage"
                className="rounded-xl shadow-lg w-full h-[320px] object-cover"
              />
            </div>

            {/* Scholarship — image left, text right */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <img
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Higher Educational Scholarship"
                className="rounded-xl shadow-lg w-full h-[320px] object-cover"
              />
              <div>
                <div className="flex gap-5 items-start mb-4">
                  <div className="w-14 h-14 shrink-0 rounded-lg bg-white flex items-center justify-center border border-gray-200">
                    <img
                      src={`${IMG}special2.png`}
                      alt="Educational Scholarship"
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#191717] mb-1.5 leading-snug">
                      HIGHER EDUCATIONAL SCHOLARSHIP PROGRAMME
                    </h3>
                    <p className="text-sm text-[#555] leading-relaxed">
                      A wonderful opportunity for recommending your beloved
                      ones for a higher educational scholarship to all
                      Regional Team Coordinator (RTC) Rank Achievers.
                    </p>
                  </div>
                </div>
                <ul className="space-y-1.5 pl-2 border-t border-gray-200 pt-4">
                  {[
                    "Supports undergraduate and postgraduate studies",
                    "Available to children or dependants of the achiever",
                    "Renewable annually based on academic performance",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-[#666]">
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

      {/* ── 7. IMPORTANT THINGS TO REMEMBER (zigzag) ────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="section-subtitle">Overview</p>
            <h2 className="section-title">Important Things To Remember</h2>
            <p className="text-sm text-[#888] max-w-xl mx-auto">
              Understanding the foundations of how Deal Forever operates — from
              product distribution to direct selling principles — sets every
              distributor up for long-term success.
            </p>
          </div>

          <div className="space-y-14">
            {/* 7a. Product Distribution System — text left, image right */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <SectionIcon src="icons8-tesseract-64 .png" />
                  <h3 className="font-bold text-[#191717]">
                    Product Distribution System
                  </h3>
                </div>
                <p className="text-sm text-[#555] leading-relaxed mb-4">
                  Deal Forever blends a nationwide physical retail presence with
                  a powerful e-commerce backbone, so every product reaches every
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
              </div>
              <ContainedImage
                src={`${IMG}production-distribution-system.png`}
                alt="Product Distribution System"
              />
            </div>

            {/* 7b. Advantages of Physical Store — image left, text right */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <ContainedImage src={`${IMG}physical-store.png`} alt="Physical Store" />
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <SectionIcon src="icons8-store-50.png" />
                  <h3 className="font-bold text-[#191717]">
                    Advantages of Physical Stores
                  </h3>
                </div>
                <p className="text-sm text-[#555] leading-relaxed mb-3">
                  Deal Forever's branded retail locations give distributors a
                  credible, professional space to showcase products and attract
                  walk-in customers — building trust that translates to repeat
                  business and stronger referrals.
                </p>
                <BulletList items={physicalStoreBullets} />
              </div>
            </div>

            {/* 7c. Benefits of E-Commerce — text left, image right */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <SectionIcon src="icons8-shopping-cart-100.png" />
                  <h3 className="font-bold text-[#191717]">
                    Benefits of E-Commerce
                  </h3>
                </div>
                <p className="text-sm text-[#555] leading-relaxed mb-3">
                  The Deal Forever e-commerce platform removes every
                  geographical and time barrier from your business. Sell to
                  customers across India around the clock, and let technology
                  handle the heavy lifting of order processing and delivery.
                </p>
                <BulletList items={ecommerceBullets} />
              </div>
              <ContainedImage src={ECART_IMG} alt="E-Commerce Benefits" />
            </div>

            {/* 7d. Benefits of Direct Selling — image left, text right */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <ContainedImage src={`${IMG}direct-selling.png`} alt="Direct Selling" />
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <SectionIcon src="icons8-cart-96.png" />
                  <h3 className="font-bold text-[#191717]">
                    Benefits of Direct Selling
                  </h3>
                </div>
                <p className="text-sm text-[#555] leading-relaxed mb-3">
                  Direct selling is one of the world's oldest and most proven
                  business models — and Deal Forever has built a modern,
                  technology-enabled version of it that combines personal
                  relationships with the scale of a nationwide network.
                </p>
                <BulletList items={directSellingBullets} />
              </div>
            </div>

            {/* 7e. Glossary of Terms — text left, image right */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <SectionIcon src="icons8-list-64.png" />
                  <h3 className="font-bold text-[#191717]">
                    Glossary Of Terms
                  </h3>
                </div>
                <p className="text-sm text-[#555] leading-relaxed mb-4">
                  Familiarise yourself with these core terms before you begin —
                  understanding the language of the plan will help you explain
                  it clearly to prospects and track your own progress
                  accurately.
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
              <ContainedImage
                src={`${IMG}placement-network.png`}
                alt="Placement Network"
              />
            </div>

            {/* 7f. Sponsor Network — image left, text right */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <ContainedImage src={SPONSOR_NETWORK_IMG} alt="Sponsor Network" />
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <SectionIcon src="icons8-networking-64.png" />
                  <h3 className="font-bold text-[#191717]">
                    Understanding Your Sponsor Network
                  </h3>
                </div>
                <p className="text-sm text-[#555] leading-relaxed">
                  Your Sponsor Network is the group of distributors you
                  personally enrolled — your direct referrals. This is the
                  foundation the Team Building and Business Supporting bonuses
                  are calculated from, so nurturing these direct relationships
                  is where every successful business starts.
                </p>
              </div>
            </div>

            {/* 7g. Placement Network & Spillover — text left, image right */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <SectionIcon src="icons8-junction-64.png" />
                  <h3 className="font-bold text-[#191717]">
                    Placement Network & Spillover
                  </h3>
                </div>
                <p className="text-sm text-[#555] leading-relaxed mb-4">
                  Your Placement Network reflects where your downlines actually
                  sit within the tree — which can differ from your Sponsor
                  Network. When your upline places a new distributor under you,
                  that's called Spillover, and it becomes part of your
                  Placement Tree, helping your group volume grow even without
                  your direct effort.
                </p>
                <img
                  src={SPILLOVER_IMG}
                  alt="Spillover Concept"
                  className="w-full h-40 object-cover rounded-lg border border-gray-200"
                />
              </div>
              <ContainedImage
                src={PLACEMENT_NETWORK_IMG}
                alt="Placement Network"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. RANK ACHIEVEMENT (zigzag) ────────────────────────── */}
      <section className="section-padding bg-[#faf8f5]">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-4">
            <SectionIcon src="icons8-star-50.png" />
            <h2 className="text-xl font-bold text-[#191717]">
              Rank Achievement
            </h2>
          </div>
          <p className="text-sm text-[#666] leading-relaxed mb-10 max-w-3xl">
            Deal Forever's rank structure is a clear roadmap from Day 1 to
            Diamond. Every rank you earn is permanent — no demotion, no clock
            resetting. The milestones below show the path from your first sale
            all the way to executive leadership, with growing income and
            privileges at each level.
          </p>

          {/* Business Flow — text left, image right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-14">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <SectionIcon src="icons8-junction-64.png" />
                <h3 className="font-bold text-[#191717]">
                  How The Rank Flow Works
                </h3>
              </div>
              <p className="text-sm text-[#555] leading-relaxed">
                Each rank builds on the one before it — as your personal and
                group business volume accumulates, you automatically flow into
                the next tier. There's no manual application process; the
                system tracks your progress in real time and unlocks new
                bonuses the moment you qualify.
              </p>
            </div>
            <ContainedImage src={BUSINESS_FLOW_IMG} alt="Business Rank Flow" />
          </div>

          {/* Team Growth — image left, text right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-14">
            <ContainedImage src={TEAM_IMG} alt="Build Your Team" />
            <div>
              <div className="flex items-center gap-3 mb-3">
                <SectionIcon src="icons8-business-group-100 (1).png" />
                <h3 className="font-bold text-[#191717]">
                  Build Your Team, Multiply Your Income
                </h3>
              </div>
              <p className="text-sm text-[#555] leading-relaxed">
                Ranks aren't earned alone. Every distributor you bring in and
                support adds to your group volume, and every leader you help
                develop compounds that growth further — turning your
                individual effort into a multiplied, team-driven income.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ContainedImage
              src={`${IMG}rank-achievement1.png`}
              alt="Rank Achievement Chart"
            />
            <ContainedImage
              src={`${IMG}rank-achievement2.png`}
              alt="Rank Achievement Details"
            />
          </div>

          {/* Fast start callout */}
          <div className="bg-[#191717] rounded-xl p-6 mb-8 grid md:grid-cols-3 gap-6 items-center">
            <img
              src={PULSE_CIRCLE_IMG}
              alt="Fast Start Momentum"
              className="rounded-lg w-full h-32 object-cover"
            />
            <div className="md:col-span-2">
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
                src={`${IMG}rank3.png`}
                alt="Fast Start Position"
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
              <ContainedImage src={`${IMG}rank4.png`} alt="Fast Start ETC" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. CODE OF ETHICS (zigzag header) ───────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
            <div>
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
                These commitments are not formalities — they are the backbone
                of a community built on trust, transparency, and mutual
                respect. Adherence to this code protects every distributor in
                the network.
              </p>
            </div>
            <img
              src={BUILDING_IMG}
              alt="Trust and Integrity"
              className="rounded-xl shadow-lg w-full h-[280px] object-cover"
            />
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

      {/* ── 10. SUPPORT (zigzag) ────────────────────────────────── */}
      <section className="section-padding bg-[#faf8f5]">
        <div className="container-custom">
          <div className="text-center mb-8">
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

          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={SUPPORT_IMG}
              alt="Deal Forever Support"
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="space-y-12">
            {/* 10a. Digital — text left, image right */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
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
                  
                  <a  href="https://www.mydealforever.com"
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
            <div className="grid lg:grid-cols-2 gap-8 items-center">
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
                  
                  <a  href="https://www.mydealforever.com"
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
            <div className="grid lg:grid-cols-2 gap-8 items-center">
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
            <div className="grid lg:grid-cols-2 gap-8 items-center">
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
            <div className="grid lg:grid-cols-2 gap-8 items-center">
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
          <div className="text-center mb-8">
            <p className="section-subtitle">Get Started</p>
            <h2 className="section-title">
              Your Entrepreneurship Journey Starts Today
            </h2>
            <p className="text-sm text-[#888] max-w-xl mx-auto">
              Register free, pick up the plan, and take your first step toward
              financial independence with the support of a nationwide network
              behind you.
            </p>
          </div>
          <ContainedImage
            src={`${IMG}business-opp.png`}
            alt="An Approach To Successful Entrepreneurship"
            className="max-w-3xl mx-auto"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            
            <a  href="https://www.mydealforever.com"
              className="bg-[#aa8453] text-white text-sm font-bold px-8 py-3 rounded-lg hover:bg-[#956e3f] transition-colors"
            >
              Register Free Today
            </a>
            
            <a  href="mailto:info@mydealforever.com"
              className="bg-white border border-[#aa8453] text-[#aa8453] text-sm font-bold px-8 py-3 rounded-lg hover:bg-[#faf8f5] transition-colors"
            >
              Talk to an Advisor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}