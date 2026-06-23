import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
  return (
    <div>
      <PageBanner
        title="About Deal Forever"
        subtitle="Our story, mission, and values"
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Story */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-4">Qualities Mark The Difference</h2>
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
              {/* <Link
                to="/business-opportunity"
                className="btn-primary rounded-full inline-flex"
              >
                Explore Opportunity <ArrowRight size={16} className="ml-2" />
              </Link> */}
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Deal Forever"
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

      {/* Mission, Vision, Values */}
      <section className="py-12 bg-[#faf8f5]">
        <div className="container-custom">
          <h2 className="section-title text-center mb-8">Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm text-center card-hover">
              <div className="w-16 h-16 mx-auto mb-4  flex items-center justify-center">
                {/* <Target size={28} className="text-white" /> */}
                <img
                  src={mission}
                  alt="Vision"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#191717] mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-[#555] leading-relaxed">
                "Our goal is to grow globally and become the best in the direct
                selling industry. We want to be known for our innovative
                products, excellent service, and fair practices. By helping
                people succeed as independent sellers and maintaining high
                ethical standards, we aim to lead the market. Our focus is on
                supporting our distributors and setting new standards of
                excellence in direct selling."
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm text-center card-hover">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                {/* <Eye size={28} className="text-white" /> */}
                <img
                  src={vision}
                  alt="Vision"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#191717] mb-3">
                Our Vision
              </h3>
              <p className="text-sm text-[#555] leading-relaxed">
                "Our vision is to revolutionize the direct selling industry by
                providing top-tier products and services, supported by a robust
                and ethical multi-level marketing system that promotes growth
                and success for all."
              </p>
            </div>
            {/* <div className="bg-white rounded-xl p-8 shadow-sm text-center card-hover">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-gold flex items-center justify-center">
                <Heart size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#191717] mb-3">Our Values</h3>
              <p className="text-sm text-[#555] leading-relaxed">
                Integrity, transparency, quality, and equal opportunity form the foundation of
                everything we do at Deal Forever.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((item, i) => {
              const icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex gap-4 p-6 rounded-xl bg-[#faf8f5] card-hover"
                >
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shrink-0">
                    <img
                      src={icon}
                      alt={item.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#191717] text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#888] leading-relaxed">
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
      <section className="py-12 bg-[#faf8f5]">
        <div className="container-custom">
          {/* Heading */}
          <h2 className="section-title text-center mb-8">
            Message to Distributors
          </h2>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left Image Section */}
            <div className="relative flex justify-center">
              <img
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Message to Distributors"
                className="relative z-20 w-full max-w-[560px] h-auto object-cover shadow-lg hover:scale-110 transition-transform duration-500 rounded-xl"
              />
            </div>

            {/* Right Content */}
            <div className="text-[#666] leading-relaxed text-sm space-y-3">
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
          <div className="mt-6 text-[#666] leading-relaxed text-sm space-y-3">
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
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="section-title mb-4">Deal Forever Promises</h2>
            <PromiseSlider />
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-10 bg-[#faf8f5]">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="section-title">Our Journey Will Continue.</h2>
          </div>
        </div>
      </section>

      {/* Team
      <section className="section-padding bg-[#faf8f5]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="section-subtitle">Leadership</p>
            <h2 className="section-title">Our Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-sm card-hover group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191717]/60 to-transparent" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-[#191717] text-sm">{member.name}</h3>
                  <p className="text-xs text-[#aa8453] font-medium">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}