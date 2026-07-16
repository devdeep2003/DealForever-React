import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  User,
  Phone,
  ShoppingBag,
  LogOut,
} from "lucide-react";
import { navItems, siteConfig } from "../data/siteData";
import AuthModal from "./AuthModal";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

export const socialIcons: Record<string, IconType> = {
  instagram: FaInstagram,
  twitter: FaXTwitter,
  facebook: FaFacebookF,
  youtube: FaYoutube,
};

const brandLogo =
  import.meta.env.VITE_BASE_URL + "/images/WEB HEADER LOGO 04.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null,
  );
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenMobileSubmenu(null);
  }, [location]);

  const openAuth = (mode: "signin" | "signup") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
    setMobileMenuOpen(false);
  };

  const toggleMobileSubmenu = (label: string) => {
    setOpenMobileSubmenu((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        {/* Top Bar */}
        <div className="hidden lg:block bg-[#191717] text-white text-xs">
          <div className="container-custom flex items-center justify-between py-2">
            <div className="flex items-center gap-6">
              
              <a  href={`tel:${siteConfig.tollFree}`}
                className="flex items-center gap-2 hover:text-[#aa8453] transition-colors"
              >
                <Phone size={12} />
                {siteConfig.tollFree}
              </a>

              
              <a  href={`mailto:${siteConfig.email}`}
                className="hover:text-[#aa8453] transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/shop"
                className="flex items-center gap-1 hover:text-[#aa8453] transition-colors"
              >
                <ShoppingBag size={12} />
                Buy Products Online
              </Link>
              <button
                onClick={() => openAuth("signin")}
                className="flex items-center gap-1 hover:text-[#aa8453] transition-colors"
              >
                <User size={12} />
                My Account
              </button>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              {/* Logo Image */}
              <div className="w-[110px] h-[60px] sm:w-[130px] sm:h-[72px] lg:w-[150px] lg:h-[90px] overflow-hidden">
                <img
                  src={brandLogo}
                  alt="Deal Forever Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg
                      ${location.pathname === item.path ? "text-[#aa8453]" : "text-[#555] hover:text-[#aa8453]"}
                    `}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        size={14}
                        className="transition-transform group-hover:rotate-180"
                      />
                    )}
                  </Link>
                  {item.children && (
                    <div className="nav-dropdown">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2.5 text-sm text-[#555] hover:text-[#aa8453] hover:bg-[#faf8f5] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Join Button */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="relative group">
                <button className="btn-primary rounded-full text-xs px-2 py-2.5">
                  Join Our Team
                  <ChevronDown
                    size={14}
                    className="ml-1 transition-transform group-hover:rotate-180"
                  />
                </button>
                <div className="nav-dropdown right-0 left-auto">
                  <button
                    onClick={() => openAuth("signin")}
                    className="block w-full text-left px-4 py-2.5 text-sm text-[#555] hover:text-[#aa8453] hover:bg-[#faf8f5] transition-colors"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => openAuth("signup")}
                    className="block w-full text-left px-4 py-2.5 text-sm text-[#555] hover:text-[#aa8453] hover:bg-[#faf8f5] transition-colors"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#191717] hover:text-[#aa8453] transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white animate-slide-in-right overflow-y-auto">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <Link
                to="/"
                className="flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DF</span>
                </div>
                <span className="font-bold text-[#191717]">Deal Forever</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#555]"
              >
                <X size={20} />
              </button>
            </div>

            {/* Welcome Box */}
            <div className="p-4 bg-[#faf8f5] border-b">
              <p className="text-sm text-[#555] mb-3">
                Welcome to Deal Forever
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => openAuth("signin")}
                  className="btn-primary text-xs px-4 py-2 rounded-full flex-1"
                >
                  Sign In
                </button>
                <button
                  onClick={() => openAuth("signup")}
                  className="btn-outline text-xs px-4 py-2 rounded-full flex-1"
                >
                  Sign Up
                </button>
              </div>
            </div>

            {/* Mobile Nav Items - Accordion style matching Main Head / Sub Head structure */}
            <div className="py-2">
              {navItems.map((item) =>
                item.children && item.children.length > 0 ? (
                  <div key={item.label} className="border-b border-gray-100">
                    <button
                      onClick={() => toggleMobileSubmenu(item.label)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors ${
                        location.pathname === item.path
                          ? "text-[#aa8453]"
                          : "text-[#191717]"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 text-[#aa8453] ${
                          openMobileSubmenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 bg-[#faf8f5] ${
                        openMobileSubmenu === item.label
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-6 py-2.5 text-sm text-[#555] hover:text-[#aa8453] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`block px-4 py-3 text-sm font-medium border-b border-gray-100 transition-colors ${
                      location.pathname === item.path
                        ? "text-[#aa8453]"
                        : "text-[#191717] hover:text-[#aa8453]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ),
              )}

              {/* Logout */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#191717] hover:text-[#aa8453] transition-colors"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>

            {/* Mobile Contact */}
            <div className="p-4 bg-[#191717] text-white">
              <p className="text-xs font-semibold uppercase tracking-wider mb-3 text-[#aa8453]">
                Talk To Us
              </p>
              <div className="space-y-2 text-sm">
                
                <a  href={`tel:${siteConfig.tollFree}`}
                  className="block hover:text-[#aa8453] transition-colors"
                >
                  {siteConfig.tollFree}
                </a>

                
                <a  href={`mailto:${siteConfig.email}`}
                  className="block hover:text-[#aa8453] transition-colors"
                >
                  {siteConfig.email}
                </a>

                
                <a  href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
                  className="block hover:text-[#aa8453] transition-colors"
                >
                  WhatsApp: {siteConfig.whatsapp}
                </a>
              </div>
              <div className="flex gap-3 mt-4">
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
            </div>
          </div>
        </div>
      )}

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
}