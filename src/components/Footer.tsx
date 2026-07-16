import { Link } from "react-router-dom";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { siteConfig, policyLinks, socialIcons } from "../data/siteData";

const brandLogo =
  import.meta.env.VITE_BASE_URL + "/images/WEB HEADER LOGO 04.png";
const shield = import.meta.env.VITE_BASE_URL + "/images/icons8-shield-50.png";
const handshake =
  import.meta.env.VITE_BASE_URL + "/images/icons8-trust-50 (2).png";
const truck = import.meta.env.VITE_BASE_URL + "/images/icons8-truck-50 (1).png";
const playstore = import.meta.env.VITE_BASE_URL + "/images/PLASTORE.png";
const appstore = import.meta.env.VITE_BASE_URL + "/images/APP STORE.png";
const payments = import.meta.env.VITE_BASE_URL + "/images/Untitled-7.png";

const trustBadges = [
  { icon: shield, label: "Genuine Brands & Products" },
  { icon: handshake, label: "Deal Forever Promise" },
  { icon: truck, label: "Easy Returns & Exchanges" },
];

interface FooterAccordionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function FooterAccordion({
  title,
  isOpen,
  onToggle,
  children,
}: FooterAccordionProps) {
  return (
    <div className="lg:col-span-1 border-b border-white/10 md:border-none">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 md:py-0 md:pointer-events-none md:mb-4"
      >
        <h4 className="text-sm font-semibold uppercase tracking-wider text-[#aa8453]">
          {title}
        </h4>
        <ChevronDown
          size={16}
          className={`text-[#aa8453] transition-transform duration-300 md:hidden ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 md:!max-h-none md:!opacity-100 ${
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        } md:pb-0`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <footer className="bg-[#191717] text-white">
      {/* Connect Section */}
      <div className="border-b border-white/10">
        <div className="p-5 sm:p-10 lg:p-12 lg:px-[130px] bg-[#333333]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
            {/* Left Side */}
            <div className="w-full lg:w-auto lg:max-w-md">
              <div className="text-center lg:text-left mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
                  Connect With Us
                </h3>
                <p className="text-white/60 text-xs sm:text-sm">
                  Stay updated with the latest from Deal Forever
                </p>
              </div>

              {/* Email Section */}
              <div className="flex items-center gap-3 w-full">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 h-10 px-4 bg-white border border-white/20 rounded-lg text-sm text-black focus:outline-none focus:border-[#aa8453] transition-colors"
                />

                <button className="bg-[#aa8453] rounded-lg h-10 w-12 flex items-center justify-center shrink-0">
                  <Send
                    size={20}
                    style={{
                      color: "white",
                      display: "block",
                    }}
                  />
                </button>
              </div>
            </div>

            <div className="border-r border-white/10 hidden lg:block self-stretch"></div>

            {/* Right Side Trust Badges */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 lg:gap-8 w-full lg:w-auto">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex flex-col items-center text-center gap-1.5 sm:gap-2 text-white/70 w-full max-w-[140px] mx-auto"
                >
                  <div className="w-10 h-10 sm:w-16 sm:h-14 flex items-center justify-center">
                    <img
                      src={badge.icon}
                      alt={badge.label}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <span className="text-[9px] leading-tight sm:text-xs sm:leading-tight">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 md:gap-8">
          {/* About */}
          <FooterAccordion
            title="About"
            isOpen={openSection === "about"}
            onToggle={() => toggleSection("about")}
          >
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-white/60 hover:text-[#aa8453] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-sm text-white/60 hover:text-[#aa8453] transition-colors"
                >
                  Our Team
                </Link>
              </li>

              <li>
                <Link
                  to="/testimonials"
                  className="text-sm text-white/60 hover:text-[#aa8453] transition-colors"
                >
                  What People Say
                </Link>
              </li>
              <li>
                <Link
                  to="/business-opportunity"
                  className="text-sm text-white/60 hover:text-[#aa8453] transition-colors"
                >
                  Business Opportunity
                </Link>
              </li>
              <li>
                <Link
                  to="/business-opportunity"
                  className="text-sm text-white/60 hover:text-[#aa8453] transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-white/60 hover:text-[#aa8453] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </FooterAccordion>

          {/* Policies */}
          <FooterAccordion
            title="Policies"
            isOpen={openSection === "policies"}
            onToggle={() => toggleSection("policies")}
          >
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-[#aa8453] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterAccordion>

          {/* Useful Links */}
          <FooterAccordion
            title="Useful Links"
            isOpen={openSection === "useful"}
            onToggle={() => toggleSection("useful")}
          >
            <ul className="space-y-2">
              {/* <li>
                <Link
                  to="/brands"
                  className="text-sm text-white/60 hover:text-[#aa8453] transition-colors"
                >
                  Our Brands
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="text-sm text-white/60 hover:text-[#aa8453] transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/offers"
                  className="text-sm text-white/60 hover:text-[#aa8453] transition-colors"
                >
                  Offers
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-sm text-white/60 hover:text-[#aa8453] transition-colors"
                >
                  News & Media
                </Link>
              </li> */}
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-white/60 hover:text-[#aa8453] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/grievance"
                  className="text-sm text-white/60 hover:text-[#aa8453] transition-colors"
                >
                  Grievance
                </Link>
              </li>
              <li>
                <Link
                  to="/start-a-business"
                  className="text-sm text-white/60 hover:text-[#aa8453] transition-colors"
                >
                  Start a Business
                </Link>
              </li>
            </ul>
          </FooterAccordion>

          {/* Download */}
          <div className="lg:col-span-1 py-4 md:py-0 border-b border-white/10 md:border-none">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#aa8453] mb-3 md:mb-4">
              Download
            </h4>

            <div className="flex flex-row md:flex-col gap-3 items-start">
              <a href="#" className="block">
                <img
                  src={appstore}
                  alt="Download from App Store"
                  className="w-[130px] h-[40px] sm:w-[150px] sm:h-[44px] object-contain"
                />
              </a>

              <a href="#" className="block">
                <img
                  src={playstore}
                  alt="Download from Play Store"
                  className="w-[130px] h-[40px] sm:w-[150px] sm:h-[44px] object-contain"
                />
              </a>
            </div>
          </div>

          {/* Stay In Touch */}
          <div className="lg:col-span-1 py-4 md:py-0">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#aa8453] mb-3 md:mb-4">
              Stay In Touch
            </h4>
            <div className="flex gap-3 mb-4 md:mb-6">
              {Object.entries(siteConfig.social).map(([platform, url]) => {
                const Icon = socialIcons[platform];

                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#aa8453] transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <div className="space-y-2 text-sm text-white/60">
              <a
                href={`tel:${siteConfig.tollFree}`}
                className="flex items-center gap-2 hover:text-[#aa8453] transition-colors"
              >
                <Phone size={14} /> {siteConfig.tollFree}
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-[#aa8453] transition-colors"
              >
                <Mail size={14} /> {siteConfig.email}
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
                className="flex items-center gap-2 hover:text-[#aa8453] transition-colors"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="py-4 px-4 sm:px-8 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#333333]">
          <div className="flex items-center gap-2">
            <div className="w-[50px] h-[50px] bg-gradient-to-br from-[#D4B483] to-[#B8915E] rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-md">
              DF
            </div>
            <p className="text-xs text-white/40">{siteConfig.copyright}</p>
          </div>
          <div className="flex items-center flex-wrap justify-center gap-4">
            <Link
              to="/policy/privacy"
              className="text-xs text-white/40 hover:text-[#aa8453] transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/policy/terms"
              className="text-xs text-white/40 hover:text-[#aa8453] transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/policy/disclaimer"
              className="text-xs text-white/40 hover:text-[#aa8453] transition-colors"
            >
              Disclaimer
            </Link>
          </div>

          {/* <div>
            <img
              src={payments}
              alt="payments"
              className="w-[350px] h-auto object-contain "
            />
          </div> */}
        </div>
      </div>
    </footer>
  );
}
