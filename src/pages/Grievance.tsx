import PageBanner from "../components/PageBanner";
import { siteConfig } from "../data/siteData";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Grievance() {
  const [formData, setFormData] = useState({
    name: "",
    distributionId: "",
    contact: "",
    email: "",
    category: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      distributionId: "",
      contact: "",
      email: "",
      category: "",
      message: "",
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      distributionId: "",
      contact: "",
      email: "",
      category: "",
      message: "",
    });
  };

  return (
    <div>
      <PageBanner
        title="Grievance Redressal"
        subtitle="We are committed to resolving your concerns"
        breadcrumbs={[{ label: "Grievance" }]}
      />

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="gap-6 mb-8">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Grievance Cell Mechanism */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#aa8453] mb-3">
                  Grievance Cell Mechanism
                </h2>
                <p className="text-sm sm:text-base text-[#555] leading-relaxed text-justify">
                  At DEAL FOREVER ENTERPRISES LLP, satisfaction of our Customers
                  as well as Distributors is at prime focus. We are committed to
                  serve them with Industry's best practices, which minimizes
                  incidents of dissatisfaction. Though, if such issues take
                  place we have set up Grievances Cell which addresses the
                  issues and solves it out in timely manner to manage
                  satisfaction level of the people who deals with us.
                </p>
              </div>

              {/* How to Raise Complaint */}
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-[#191717] mb-3">
                  How to raise the Complaint: Customers, Distributors or any
                  other person who have complaint with us, can raise their voice
                  in following ways.
                </h3>
                <ul className="space-y-2 text-sm sm:text-base text-[#555]">
                  <li className="flex gap-3">
                    <span className="text-[#aa8453] font-bold mt-0.5">•</span>
                    <span>
                      <strong className="text-[#aa8453]">
                        Call to Customer Care:
                      </strong>{" "}
                      They can call on our Customer Care No and lodge their
                      issues.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#aa8453] font-bold mt-0.5">•</span>
                    <span>
                      <strong className="text-[#aa8453]">
                        Mail to Customer Care:
                      </strong>{" "}
                      They can E-Mail their queries on our customer care mail
                      address
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#aa8453] font-bold mt-0.5">•</span>
                    <span>
                      <strong className="text-[#aa8453]">
                        Feedback on website:
                      </strong>{" "}
                      They can put their queries into Feedback / Grievance form,
                      which is available on our website
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#aa8453] font-bold mt-0.5">•</span>
                    <span>
                      <strong className="text-[#aa8453]">
                        Write a letter:
                      </strong>{" "}
                      They can write letter with details of their queries and
                      send it to our official address.
                    </span>
                  </li>
                </ul>
              </div>

              {/* How It Will Be Solved */}
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-[#191717] mb-3">
                  How It Will Be Solved
                </h3>
                <p className="text-sm sm:text-base text-[#555] leading-relaxed text-justify">
                  First of all complaint will be registered and complaint No.
                  will be generated. Then as per nature of complaint, will be
                  passed to the concern department and tentative time to solve
                  this issue will be demanded. Then after complainant will be
                  informed on mail or phone about the confirmation that their
                  complaint is registered and complaint No. will be provided to
                  them as well tentative time to solve the issue will be
                  informed.
                </p>
              </div>

              {/* Time Frame */}
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-[#191717] mb-3">
                  Time Frame
                </h3>
                <p className="text-sm sm:text-base text-[#555] leading-relaxed text-justify">
                  Most of the complaints are being solved within{" "}
                  <strong>4 working days</strong>. However it's our commitment
                  that every issue will be resolved within{" "}
                  <strong>15 days</strong> from the date of registration of the
                  same. Once issue is resolved, complainant is again informed on
                  mail or phone and issue is closed.
                </p>
              </div>

              {/* Maintenance of Record */}
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-[#191717] mb-3">
                  Maintenance of Record
                </h3>
                <p className="text-sm sm:text-base text-[#555] leading-relaxed text-justify">
                  Digital complaint register is duly maintained. Manager
                  (Operation) and Director (In-Charge, Operation) periodically
                  review the details.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section — Address left, Form right (like the image) */}
          <div className="grid lg:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            {/* Left — Registered Office & Contact Info */}
            <div className="lg:col-span-1 bg-[#1e1e1e] rounded-2xl p-6 text-white space-y-4">
              <div>
                <h4 className="text-[#aa8453] font-bold text-xs sm:text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                  <MapPin size={15} /> Our Registered Office
                </h4>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  DOOR NO. 13/501, SECOND FLOOR, METAL MART BUILDING, PALAYAM
                  JUNCTION, KALLAI ROAD, KOZHIKODE, KERALA, INDIA - 673002
                </p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-[#aa8453] font-bold text-xs sm:text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Phone size={15} /> Phone
                </h4>
                <p className="text-white/80 text-xs sm:text-sm">+91 0495 4852101</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-[#aa8453] font-bold text-xs sm:text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Phone size={15} /> All India Toll Free Number
                </h4>
                <p className="text-white/80 text-xs sm:text-sm">18001054562</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-[#aa8453] font-bold text-xs sm:text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Mail size={15} /> For General Queries
                </h4>
                <p className="text-white/80 text-xs sm:text-sm break-all">
                  info@mydealforever.com
                </p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-[#aa8453] font-bold text-xs sm:text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Mail size={15} /> For Grievance Redressal
                </h4>
                <p className="text-white/80 text-xs sm:text-sm break-all">
                  grievanceredresscommittee@mydealforever.com
                </p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-[#aa8453] font-bold text-xs sm:text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Mail size={15} /> Consumer Grievance Redressal Committee
                </h4>
                <p className="text-white/80 text-xs sm:text-sm break-all mb-1">
                  grievanceredresscommittee@mydealforever.com
                </p>
                
                <a  href="#"
                  className="text-green-500 text-xs sm:text-sm font-semibold hover:underline inline-block"
                >
                  Click here
                </a>
              </div>
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-[#aa8453] font-bold text-xs sm:text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Mail size={15} /> For Nodal Officer
                </h4>
                <p className="text-white/80 text-xs sm:text-sm break-all mb-1">
                  nodalofficer@mydealforever.com
                </p>
                
                <a  href="#"
                  className="text-green-500 text-xs sm:text-sm font-semibold hover:underline inline-block"
                >
                  Click here
                </a>
              </div>

              {/* Consumer Grievance Redress Committee */}
              <div className="border-t border-white/10 pt-4">
                <div className="space-y-4">
                  {[
                    {
                      title: "Director",
                      name: "SUDHIR BHIMRAO KANTHE",
                      contact: "+91 9930526923",
                    },
                    {
                      title: "General Manager",
                      name: "BAVEESH KALLADA",
                      contact: "+91 6235226220",
                    },
                    {
                      title: "Manager",
                      name: "SAJITH KALATHINGAL",
                      contact: "+91 9061519853",
                    },
                  ].map((member, i) => (
                    <div key={i}>
                      <h4 className="text-base sm:text-lg font-bold text-[#aa8453] mb-1">
                        {member.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#555]">
                        <span className="text-white font-semibold">Name :</span>{" "}
                        <span className="text-[#aa8453]">{member.name}</span>
                      </p>
                      <p className="text-xs sm:text-sm text-[#555]">
                        <span className="text-white font-semibold">
                          Contact No:
                        </span>{" "}
                        <span className="text-[#aa8453]">{member.contact}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Send Us a Message form */}
            <div className="lg:col-span-2">
              <h3 className="text-lg sm:text-2xl font-bold text-[#191717] mb-1.5">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#888] mb-4 leading-relaxed">
                Please write to us using the contact form below if you would
                like to know more about the opportunity, share ideas, give
                feedback, have complaints, or would simply like to request a
                catalogue.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-xs sm:text-sm text-[#555] placeholder-[#aaa] focus:outline-none focus:border-[#aa8453] transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Distribution ID"
                    value={formData.distributionId}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        distributionId: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-xs sm:text-sm text-[#555] placeholder-[#aaa] focus:outline-none focus:border-[#aa8453] transition-colors"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-xs sm:text-sm text-[#555] placeholder-[#aaa] focus:outline-none focus:border-[#aa8453] transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-xs sm:text-sm text-[#555] placeholder-[#aaa] focus:outline-none focus:border-[#aa8453] transition-colors"
                  />
                </div>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-xs sm:text-sm text-[#888] focus:outline-none focus:border-[#aa8453] transition-colors appearance-none"
                >
                  <option value="">Select Category</option>
                  <option value="product">Product Quality</option>
                  <option value="delivery">Delivery Issue</option>
                  <option value="payment">Payment Issue</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-xs sm:text-sm text-[#555] placeholder-[#aaa] focus:outline-none focus:border-[#aa8453] transition-colors resize-none"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#aa8453] hover:bg-[#96724A] text-white font-bold text-xs sm:text-sm rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}