import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import PageBanner from "../components/PageBanner";
import { coreValues } from "../data/siteData";
import PromiseSlider from "../components/PromiseSlider";

const beforeIcon = import.meta.env.VITE_BASE_URL + "/images/icons/before.png";
const vision =
  import.meta.env.VITE_BASE_URL + "/images/icons/icons8-vision-64.png";
const mission =
  import.meta.env.VITE_BASE_URL + "/images/icons/icons8-mission-50.png";
const messagetoDistributors =
  import.meta.env.VITE_BASE_URL + "/images/resource/about-main-image.png";

export default function About() {
  const coreValuesRef = useRef<HTMLDivElement>(null);

  const scrollCoreValues = (direction: "left" | "right") => {
    const el = coreValuesRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("div")?.clientWidth || 300;
    const scrollAmount = cardWidth + 24; // card width + gap
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <PageBanner
        title="About Deal Forever"
        subtitle="Our story, mission, and values"
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Story */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Text column - desktop only (all 3 paragraphs together) */}
            <div className="hidden lg:block">
              <h2 className="section-title mb-4">
                Qualities Mark The Difference
              </h2>
              <p className="text-[#555] leading-relaxed mb-4 text-sm">
                Deal Forever is a high-profile direct selling company based on
                an advanced concept of multi-level marketing. It was initiated
                by a group of successful professionals who have hands-on
                experience in both traditional business and the direct selling
                industry. Their unique blend of expertise allows them to lead
                the company with a deep understanding of market dynamics and
                customer needs.
              </p>
              <p className="text-[#555] leading-relaxed mb-4 text-sm">
                The team behind Deal Forever upholds an inspiring ideology of
                bringing happiness into the lives of billions of people. They
                achieve this by offering products of excellent quality, ensuring
                that every item meets the highest standards of performance and
                reliability. This commitment to quality is a cornerstone of
                their business, reflecting their dedication to customer
                satisfaction and well-being.
              </p>
              <p className="text-[#555] leading-relaxed text-sm">
                In addition to providing outstanding products, Deal Forever has
                developed a proven compensation plan that rewards their
                associates generously. This plan is designed to offer financial
                opportunities and personal growth for those involved in the
                business. By combining high-quality products with an effective
                compensation strategy, Deal Forever strives to make a positive
                impact on the lives of their associates and customers alike.
              </p>
            </div>

            {/* Image column - desktop only */}
            <div className="relative hidden lg:block">
              <img
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Deal Forever"
                className="rounded-2xl shadow-2xl w-full object-cover h-[280px] sm:h-[360px] md:h-[450px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#aa8453] text-white p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">1000+</p>
                <p className="text-sm">Happy Distributors</p>
              </div>
            </div>

            {/* Mobile-only reordered layout: para1, para2, image, para3 */}
            <div className="lg:hidden">
              <h2 className="section-title mb-3">
                Qualities Mark The Difference
              </h2>
              <p className="text-[#555] leading-relaxed mb-3 text-xs sm:text-sm">
                Deal Forever is a high-profile direct selling company based on
                an advanced concept of multi-level marketing. It was initiated
                by a group of successful professionals who have hands-on
                experience in both traditional business and the direct selling
                industry. Their unique blend of expertise allows them to lead
                the company with a deep understanding of market dynamics and
                customer needs.
              </p>
              <p className="text-[#555] leading-relaxed mb-4 text-xs sm:text-sm">
                The team behind Deal Forever upholds an inspiring ideology of
                bringing happiness into the lives of billions of people. They
                achieve this by offering products of excellent quality, ensuring
                that every item meets the highest standards of performance and
                reliability. This commitment to quality is a cornerstone of
                their business, reflecting their dedication to customer
                satisfaction and well-being.
              </p>

              <div className="relative mb-4">
                <img
                  src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="About Deal Forever"
                  className="rounded-2xl shadow-2xl w-full object-cover h-[200px] sm:h-[280px]"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#aa8453] text-white p-3 sm:p-4 rounded-xl shadow-lg">
                  <p className="text-lg sm:text-xl font-bold">1000+</p>
                  <p className="text-xs">Happy Distributors</p>
                </div>
              </div>

              <p className="text-[#555] leading-relaxed text-xs sm:text-sm mt-6 sm:mt-2">
                In addition to providing outstanding products, Deal Forever has
                developed a proven compensation plan that rewards their
                associates generously. This plan is designed to offer financial
                opportunities and personal growth for those involved in the
                business. By combining high-quality products with an effective
                compensation strategy, Deal Forever strives to make a positive
                impact on the lives of their associates and customers alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-8 md:py-12 bg-[#faf8f5]">
        <div className="container-custom">
          <h2 className="section-title text-center mb-5 md:mb-8">
            Vision & Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-white rounded-xl p-5 sm:p-8 shadow-sm text-center card-hover">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <img
                  src={mission}
                  alt="Vision"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-[#191717] mb-2 sm:mb-3">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-[#555] leading-relaxed">
                "Our goal is to grow globally and become the best in the direct
                selling industry. We want to be known for our innovative
                products, excellent service, and fair practices. By helping
                people succeed as independent sellers and maintaining high
                ethical standards, we aim to lead the market. Our focus is on
                supporting our distributors and setting new standards of
                excellence in direct selling."
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 sm:p-8 shadow-sm text-center card-hover">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <img
                  src={vision}
                  alt="Vision"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-[#191717] mb-2 sm:mb-3">
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-[#555] leading-relaxed">
                "Our vision is to revolutionize the direct selling industry by
                providing top-tier products and services, supported by a robust
                and ethical multi-level marketing system that promotes growth
                and success for all."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values - 3 at a time horizontal scroll, like Deal Forever Promises */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-5 md:mb-8">
            <h2 className="section-title">Our Core Values</h2>
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => scrollCoreValues("left")}
                aria-label="Scroll left"
                className="w-9 h-9 rounded-full border border-[#aa8453]/30 flex items-center justify-center text-[#aa8453] hover:bg-[#aa8453] hover:text-white transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollCoreValues("right")}
                aria-label="Scroll right"
                className="w-9 h-9 rounded-full border border-[#aa8453]/30 flex items-center justify-center text-[#aa8453] hover:bg-[#aa8453] hover:text-white transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <div
            ref={coreValuesRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
          >
            {coreValues.map((item, i) => {
              const icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl bg-[#faf8f5] card-hover shrink-0 w-[85%] sm:w-[48%] lg:w-[calc(33.333%-16px)] snap-start"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white flex items-center justify-center shrink-0">
                    <img
                      src={icon}
                      alt={item.title}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#191717] text-xs sm:text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#888] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Message to Distributors */}
      <section className="py-8 md:py-12 bg-[#faf8f5]">
        <div className="container-custom">
          {/* Heading */}
          <h2 className="section-title text-center mb-5 md:mb-8">
            Message to Distributors
          </h2>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
            {/* Left Image Section */}
            <div className="relative flex justify-center">
              <img
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Message to Distributors"
                className="relative z-20 w-full max-w-[560px] h-auto object-cover shadow-lg hover:scale-110 transition-transform duration-500 rounded-xl"
              />
            </div>

            {/* Right Content */}
            <div className="text-[#666] leading-relaxed text-xs sm:text-sm space-y-2 sm:space-y-3">
              <p>
                It is our privilege to introduce Deal Forever Enterprises, one
                of the leading Direct Selling company.
              </p>

              <p>
                Welcome to a world of endless possibilities and boundless
                potential. By choosing the remarkable opportunity presented by
                Deal Forever, you've embarked on a journey that will redefine
                your career and life.
              </p>

              <p>
                Join the ranks of visionary entrepreneurs who have forged their
                destinies through the power of direct selling.
              </p>

              <p>
                By charting a path as an independent distributor with Deal
                Forever, you are crafting your own destiny and constructing a
                bedrock for a prosperous and self-reliant future.
              </p>

              <p>
                At Deal Forever, we don't just provide you with an alternative
                income source; we empower you to earn respect and become an
                exceptional leader, setting a unique example for others to
                follow.
              </p>
            </div>
          </div>

          {/* Bottom Paragraphs */}
          <div className="mt-4 sm:mt-6 text-[#666] leading-relaxed text-xs sm:text-sm space-y-2 sm:space-y-3">
            <p>
              We firmly believe that everyone deserves the opportunity to lead a
              fulfilling life. At our company, we are dedicated to your success,
              and we are committed to going the extra mile to support you on
              your journey. Your success is our top priority, and we are here
              to provide unwavering support as you strive for greatness.
            </p>

            <p>
              Welcome to Deal Forever, where your journey to an astounding
              career begins. Start writing your success story today.
            </p>
          </div>
        </div>
      </section>

      {/* Deal forever promises */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="section-title mb-3 sm:mb-4">
              Deal Forever Promises
            </h2>
            <PromiseSlider />
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-6 sm:py-10 bg-[#faf8f5]">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#191717] whitespace-nowrap">
              Our Journey Will Continue.
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}