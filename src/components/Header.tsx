import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  User,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ShoppingBag,
  LogOut,
  Home,
  Info,
  Building2,
  ClipboardList,
  Image,
  Download,
  CalendarCheck,
  type LucideIcon,
  LayoutGrid,
  BadgeCheck,
} from "lucide-react";
import { navItems, navMobItems, siteConfig } from "../data/siteData";
import AuthModal from "./AuthModal";
import { DealsForeverApi } from "../services/api";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

const playstore = import.meta.env.VITE_BASE_URL + "/images/PLASTORE.png";
const appstore = import.meta.env.VITE_BASE_URL + "/images/APP STORE.png";

export const socialIcons: Record<string, IconType> = {
  instagram: FaInstagram,
  twitter: FaXTwitter,
  facebook: FaFacebookF,
  youtube: FaYoutube,
};

// Icon for each mobile nav item, keyed by label
const mobileNavIcons: Record<string, LucideIcon> = {
  Home: Home,
  About: Info,
  Branches: Building2,
  Categories: LayoutGrid,
  Brand: BadgeCheck,
  Offers: ClipboardList,
  "News & Media": Image,
  Downloads: Download,
  Schedules: CalendarCheck,
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

  const [navItemsList, setNavItemsList] = useState<any[]>(navItems);
  const [navMobItemsList, setNavMobItemsList] = useState<any[]>(navMobItems);

  useEffect(() => {
    const fetchNavData = async () => {
      try {
        const [categoriesRes, brandsRes] = await Promise.all([
          DealsForeverApi.getAllCategories(),
          DealsForeverApi.getAllOurBrands({ PageSize: 100 }),
        ]);

        let activeCategories = [];
        const categoryItems = categoriesRes && Array.isArray(categoriesRes.items) ? categoriesRes.items : [];
        if (categoryItems.length > 0) {
          activeCategories = categoryItems
            .filter((cat: any) => cat.isActive !== false)
            .map((cat: any) => ({
              label: cat.categoryName,
              path: `/categories/${cat.categoryName.toLowerCase().trim().replace(/\s+/g, "-")}`,
            }));
        }

        let activeBrands = [];
        const brandItems = brandsRes && Array.isArray(brandsRes.items) ? brandsRes.items : [];
        if (brandItems.length > 0) {
          activeBrands = brandItems
            .map((brand: any) => ({
              label: brand.ourBrandName,
              path: `/brands?brand=${brand.ourBrandName.toLowerCase().trim().replace(/\s+/g, "-")}`,
            }));
        }

        // Replace children of "Categories" and "Brand" in navItems List
        const updatedNavItems = navItems.map((item) => {
          if (item.label === "Categories" && activeCategories.length > 0) {
            return {
              ...item,
              children: activeCategories,
            };
          }
          if (item.label === "Brand" && activeBrands.length > 0) {
            return {
              ...item,
              children: activeBrands,
            };
          }
          return item;
        });

        // Also check if they are in navMobItems
        const updatedNavMobItems = navMobItems.map((item) => {
          if (item.label === "Categories" && activeCategories.length > 0) {
            return {
              ...item,
              children: activeCategories,
            };
          }
          if (item.label === "Brand" && activeBrands.length > 0) {
            return {
              ...item,
              children: activeBrands,
            };
          }
          return item;
        });

        setNavItemsList(updatedNavItems);
        setNavMobItemsList(updatedNavMobItems);
      } catch (err) {
        console.error("Failed to load navigation categories/brands:", err);
      }
    };

    fetchNavData();
  }, []);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
          }`}
      >
        {/* Top Bar */}
        <div className="hidden lg:block bg-[#191717] text-white text-xs">
          <div className="container-custom flex items-center justify-between py-2">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${siteConfig.tollFree}`}
                className="flex items-center gap-2 hover:text-[#aa8453] transition-colors"
              >
                <Phone size={12} />
                {siteConfig.tollFree}
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
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
          <div className="relative flex items-center justify-between h-16 lg:h-20">
            {/* Mobile Menu Toggle - left on mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#191717] hover:text-[#aa8453] transition-colors z-10"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo - centered on mobile, back in normal flow on desktop */}
            <Link
              to="/"
              className="flex items-center shrink-0 absolute left-1/2 -translate-x-1/2 lg:static lg:left-auto lg:translate-x-0"
            >
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
              {navItemsList.map((item) => (
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
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-0 bottom-16 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute inset-x-0 top-0 bottom-0 w-full bg-white animate-slide-in-right overflow-y-auto ">
            {/* Mobile Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between p-4 border-b bg-white">
              <Link
                to="/"
                className="flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-[120px]">
                  <img
                    src={brandLogo}
                    alt="Deal Forever Logo"
                    className="w-full h-auto object-contain"
                  />
                </div>
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
              {navMobItemsList.map((item) => {
                const ItemIcon = mobileNavIcons[item.label];
                return item.children && item.children.length > 0 ? (
                  <div key={item.label} className="border-b border-gray-100">
                    <button
                      onClick={() => toggleMobileSubmenu(item.label)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors ${location.pathname === item.path
                          ? "text-[#aa8453]"
                          : "text-[#191717]"
                        }`}
                    >
                      <span className="flex items-center gap-3">
                        {ItemIcon && (
                          <ItemIcon size={18} className="text-[#aa8453]" />
                        )}
                        {item.label}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 text-[#aa8453] ${openMobileSubmenu === item.label ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 bg-[#faf8f5] ${openMobileSubmenu === item.label
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
                    className={`flex items-center gap-3 px-4 py-3 text-sm font-medium border-b border-gray-100 transition-colors ${location.pathname === item.path
                        ? "text-[#aa8453]"
                        : "text-[#191717] hover:text-[#aa8453]"
                      }`}
                  >
                    {ItemIcon && (
                      <ItemIcon size={18} className="text-[#aa8453]" />
                    )}
                    {item.label}
                  </Link>
                );
              })}

              {/* Logout */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#191717] hover:text-[#aa8453] transition-colors"
              >
                <LogOut size={18} className="text-[#aa8453]" />
                Logout
              </button>
            </div>

            {/* Mobile Contact - Stay In Touch */}
            <div className="p-4 bg-[#191717] text-white">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#aa8453] mb-3">
                Stay In Touch
              </h4>
              <div className="flex gap-3 mb-4">
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
                {/* Download */}
                <div className="lg:col-span-1 py-2 md:py-0">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#aa8453] mb-3 md:mb-4">
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
