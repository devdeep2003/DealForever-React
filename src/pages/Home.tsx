import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Plane,
  Car,
  Home as HomeIcon,
  Award,
  BookOpen,
  Star,
  CheckCircle2,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import {
  siteConfig,
  highlights,
  marketingHighlights,
  newsItems,
  testimonials,
  offers,
  brands,
} from "../data/siteData";
import { useState, useEffect, useRef } from "react";
import TestimonialModal from "../components/TestimonialModal";
import OfferModal from "../components/SpecialOfferModal";
import NewsModal from "../components/NewsModal";

//images
const medicalInsurance =
  import.meta.env.VITE_BASE_URL + "/images/icons/icons8-insurance-64 (1).png";
const educationalScholarship =
  import.meta.env.VITE_BASE_URL + "/images/icons/icons8-graduation-64.png";
const beforeIcon = import.meta.env.VITE_BASE_URL + "/images/icons/before.png";

const benefitIcons: Record<string, React.ElementType> = {
  "shield-check": ShieldCheck,
  "graduation-cap": GraduationCap,
  plane: Plane,
  car: Car,
  home: HomeIcon,
  award: Award,
  star: Star,
  "book-open": BookOpen,
};

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// Paginated 4-at-a-time carousel hook
function usePagedCarousel(total: number, perPage = 4, interval = 3000) {
  const [page, setPage] = useState(0);
  const pausedRef = useRef(false);
  const totalPages = Math.ceil(total / perPage);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!pausedRef.current) {
        setPage((p) => (p + 1) % totalPages);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [totalPages, interval]);

  return {
    page,
    totalPages,
    setPage,
    onMouseEnter: () => {
      pausedRef.current = true;
    },
    onMouseLeave: () => {
      pausedRef.current = false;
    },
  };
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);


  const [showOfferModal, setShowOfferModal] = useState(false);
  const [offerIndex, setOfferIndex] = useState(0);

  const launchOffers = [
    {
      image:
        "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Free Medical Insurance",
      description:
        "Protect yourself and your family with our complimentary medical insurance benefits.",
    },
    {
      image:
        "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Educational Scholarship",
      description:
        "Empowering students with financial support for higher education and career growth.",
    },
    {
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Special Joining Rewards",
      description:
        "Unlock exclusive rewards and benefits when you become part of the Deal Forever family.",
    },
  ];

  useEffect(() => {
    const modalTimer = setTimeout(() => {
      setShowOfferModal(true);
    }, 500);

    return () => clearTimeout(modalTimer);
  }, []);

  useEffect(() => {
    if (!showOfferModal) return;

    const timer = setInterval(() => {
      setOfferIndex((prev) => (prev + 1) % launchOffers.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [showOfferModal]);

  // Testimonial modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<
    (typeof testimonials)[0] | null
  >(null);

  const openModal = (item: (typeof testimonials)[0]) => {
    setSelectedTestimonial(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  // Offer detail modal state
  const [isOfferDetailOpen, setIsOfferDetailOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<(typeof offers)[0] | null>(
    null,
  );

  const openOfferModal = (item: (typeof offers)[0]) => {
    setSelectedOffer(item);
    setIsOfferDetailOpen(true);
  };

  const closeOfferModal = () => {
    setIsOfferDetailOpen(false);
    setSelectedOffer(null);
  };

  // News detail modal state
  const [isNewsDetailOpen, setIsNewsDetailOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<
    (typeof newsItems)[0] | null
  >(null);

  const openNewsModal = (item: (typeof newsItems)[0]) => {
    setSelectedNews(item);
    setIsNewsDetailOpen(true);
  };

  const closeNewsModal = () => {
    setIsNewsDetailOpen(false);
    setSelectedNews(null);
  };

  const slides = [
    {
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Build Your Future",
      subtitle: "With Deal Forever",
    },
    {
      image:
        "https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Quality Products",
      subtitle: "For A Better Life",
    },
    {
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Unlimited Potential",
      subtitle: "Join Our Team Today",
    },
  ];

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((p) => (p + 1) % slides.length),
      5000,
    );
    return () => clearInterval(timer);
  }, [slides.length]);

  const about = useInView();
  const highlightsSection = useInView();
  const benefitsSection = useInView();
  const offersSection = useInView();
  const newsSection = useInView();
  const testimonialsSection = useInView();

  const offersCarousel = usePagedCarousel(offers.length, 4, 3000);
  const newsCarousel = usePagedCarousel(newsItems.length, 4, 3500);
  const testimonialsCarousel = usePagedCarousel(testimonials.length, 4, 4000);
  const brandsCarousel = usePagedCarousel(brands.length, 4, 3000);

  const getPage = <T,>(arr: T[], page: number, perPage = 4): T[] => {
    const start = page * perPage;
    return arr.slice(start, start + perPage);
  };

  return (
    <div>
      {/* Pop up Modal */}
      {showOfferModal && (
        <div className="fixed inset-0 z-[999999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up">
            <button
              onClick={() => setShowOfferModal(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white shadow-lg hover:bg-gray-100 transition"
            >
              ✕
            </button>

            <div className="relative">
              <img
                src={launchOffers[offerIndex].image}
                alt={launchOffers[offerIndex].title}
                className="w-full h-[240px] sm:h-[300px] md:h-[360px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block bg-[#aa8453] text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  Exclusive Offer
                </span>

                <h2 className="text-3xl font-bold text-white mb-3">
                  {launchOffers[offerIndex].title}
                </h2>

                <p className="text-white/90 text-sm max-w-lg">
                  {launchOffers[offerIndex].description}
                </p>
              </div>
            </div>

            <div className="p-6 flex justify-between items-center">
              <div className="flex gap-2">
                {launchOffers.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setOfferIndex(i)}
                    className={`transition-all rounded-full ${
                      i === offerIndex
                        ? "w-8 h-2 bg-[#aa8453]"
                        : "w-2 h-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <Link
                to="/offers"
                className="px-5 py-2 bg-[#aa8453] text-white rounded-full hover:bg-[#8f6d44] transition"
              >
                View Offers
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* Hero Slider */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[650px] overflow-hidden -mt-16 lg:-mt-[120px] pt-16 lg:pt-[120px]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#191717]/80 via-[#191717]/50 to-transparent" />
          </div>
        ))}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? "bg-[#aa8453] w-8" : "bg-white/40 hover:bg-white/60"}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section ref={about.ref} className="section-padding bg-white">
        <div
          className={`container-custom ${
            about.inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="section-subtitle">What We Are</p>
          <h2 className="font-semibold text-sm tracking-widest uppercase mb-3">
            Being different simply means you have something unique to offer.
            Join us to make a difference by marking an unprecedented way of
            enjoying quality and growing together
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col justify-center">
              <p className="text-[#555] leading-relaxed mb-6 text-justify text-sm">
                Deal Forever represents an exemplary business model in the
                direct selling industry, offering boundless opportunities. Its
                organizational structure is meticulously crafted to uphold
                values such as independence, entrepreneurship, and personalized
                service. At the core of Deal Forever's mission is a commitment
                to lead the industry through constant innovation and adaptation
                to meet evolving industrial expectations and quality standards.
                This ethos underscores Deal Forever's dedication to fostering a
                culture of entrepreneurship, innovation, and diligence.
              </p>
              <p className="text-[#555] leading-relaxed mb-6 text-justify text-sm">
                Deal Forever's strategy is marked by an aggressive approach to
                enhancing infrastructure and integrating cutting-edge
                technologies. This approach is aimed at not only meeting but
                exceeding the expectations of distributors and ensuring
                unparalleled customer satisfaction. Moreover, Deal Forever
                places a strong emphasis on cultivating a professional network
                of leaders through ongoing training and motivational
                initiatives. This commitment not only empowers its workforce but
                also ensures a sustainable growth trajectory.The company remains
                committed to delivering consistent value while fostering
                long-term success for its distributors and customers.
              </p>
              {/* <p className="text-[#555] leading-relaxed mb-8 text-justify text-sm">
                Founded on a robust foundation and driven by a long-term vision,
                Deal Forever embodies qualities of reliability and stability.
                Its steadfast commitment to excellence and customer-centric
                values positions Deal Forever as a formidable leader in the
                direct selling arena.
              </p> */}
              {/* <Link
                       to="/about"
                           className="btn-primary rounded-full inline-flex w-fit"
                                  >
                           Learn More <ArrowRight size={16} className="ml-2" />
                           </Link> */}
            </div>

            {/* <div className="relative overflow-hidden shadow-2xl group">
                      <img
                        src={import.meta.env.VITE_BASE_URL + "/images/resource/about-main-4.png"}
                        alt="About Deal Forever"
                        className="w-full h-[260px] sm:h-[340px] md:h-[400px] object-cover transition-transform duration-[4000ms] ease-in-out group-hover:scale-110"
                      />
                    </div> */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Deal Forever"
                className="rounded-2xl shadow-2xl w-full object-cover h-[200px] sm:h-[330px] md:h-[350px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#aa8453] text-white p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">1000+</p>
                <p className="text-sm">Happy Distributors</p>
              </div>
            </div>
          </div>
          <p className="text-[#555] leading-relaxed mb-8 mt-6 text-justify text-sm">
            Founded on a robust foundation and driven by a long-term vision,
            Deal Forever embodies qualities of reliability and stability. Its
            steadfast commitment to excellence and customer-centric values
            positions Deal Forever as a formidable leader in the direct selling
            arena.
          </p>
        </div>
      </section>
      {/* Sustainable Direct Selling - Dark Section */}
      <section className="py-12 md:py-20 bg-[#191717] relative overflow-hidden">
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

      {/* Highlights Section */}
      <section
        ref={highlightsSection.ref}
        className="section-padding bg-[#faf8f5]"
      >
        <div
          className={`container-custom ${highlightsSection.inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="text-center mb-12">
            <h2 className="section-title flex items-center justify-center gap-4">
              <span>Highlights</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md card-hover"
              >
                <div className="p-6">
                  <span className="text-5xl font-bold text-[#aa8453]/20 block mb-2">
                    {item.number}
                  </span>
                  <h3 className="text-lg font-bold text-[#191717] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#888] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-[#aa8453] text-white p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-5xl font-bold text-white/20 block mb-2">
                    {item.number}
                  </span>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Benefits */}
      <section ref={benefitsSection.ref} className="section-padding bg-white">
        <div
          className={`container-custom ${benefitsSection.inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingHighlights.map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-xl bg-[#faf8f5] card-hover group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-sm font-bold text-[#191717]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#666] mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits - Insurance & Scholarship */}
      <section className="py-10 bg-[#191717]">
        <div className="container-custom">
          <h2 className="section-title flex items-center justify-center gap-4 text-white py-3">
            <span>Special Benefits</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center max-w-4xl mx-auto">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10 text-center flex flex-col items-center hover:shadow-xl hover:border-[#aa8453]/40 hover:scale-110 transition-all duration-300">
              <img
                src={medicalInsurance}
                alt="icon"
                className="w-16 h-16 object-contain mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-3">
                Free Medical Insurance
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Comprehensive health coverage designed to safeguard you and your
                family's well-being.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-8 border border-white/10 text-center flex flex-col items-center hover:shadow-xl hover:border-[#aa8453]/40 hover:scale-110 transition-all duration-300">
              <img
                src={educationalScholarship}
                alt="icon"
                className="w-16 h-16 object-contain mb-4"
              />

              <h3 className="text-xl font-bold text-white mb-3">
                Higher Educational Scholarship
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering future generations through financial support for
                quality higher education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Carousel - 4 at a time */}
      <section ref={offersSection.ref} className="section-padding bg-white">
        <div
          className={`container-custom ${offersSection.inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="flex flex-col mb-8">
            <p className="section-subtitle">Deals</p>

            <div className="flex items-center justify-between">
              <h2 className="section-title py-3">Special Offers</h2>

              <Link
                to="/offers"
                className="flex items-center gap-1 text-[#aa8453] font-semibold text-sm hover:underline"
              >
                View All <ChevronRight size={16} />
              </Link>
            </div>
          </div>
          <div
            className="flex lg:grid lg:grid-cols-4 gap-4 lg:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 lg:pb-0"
            onMouseEnter={offersCarousel.onMouseEnter}
            onMouseLeave={offersCarousel.onMouseLeave}
          >
            {getPage(offers, offersCarousel.page, 4).map((offer, i) => (
              <div
                key={`${offersCarousel.page}-${i}`}
                className="group rounded-xl overflow-hidden shadow-md card-hover animate-fade-in-up shrink-0 w-[48%] lg:w-auto snap-start"
              >
                <div className="relative h-48">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#aa8453] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Offer
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-[#191717] text-sm mb-1">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-[#888] mb-2">
                    {offer.description}
                  </p>
                  <p className="text-xs text-[#aa8453] font-semibold">
                    Valid till: {offer.validTill}
                  </p>
                  <button
                    onClick={() => openOfferModal(offer)}
                    className="ml-auto w-fit text-xs text-[#aa8453] font-semibold hover:underline flex items-center gap-1"
                  >
                    Read More <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: offersCarousel.totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => offersCarousel.setPage(i)}
                className={`h-2 rounded-full transition-all duration-300 ${offersCarousel.page === i ? "w-6 bg-[#aa8453]" : "w-2 bg-[#aa8453]/30"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* News Section - 4 at a time */}
      <section ref={newsSection.ref} className="section-padding bg-[#faf8f5]">
        <div
          className={`container-custom ${newsSection.inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="flex flex-col mb-8">
            <p className="section-subtitle">Latest Updates</p>

            <div className="flex items-center justify-between">
              <h2 className="section-title py-3">News & Media</h2>

              <Link
                to="/news"
                className="flex items-center gap-1 text-[#aa8453] font-semibold text-sm hover:underline"
              >
                View All <ChevronRight size={16} />
              </Link>
            </div>
          </div>
          <div
            className="flex lg:grid lg:grid-cols-4 gap-4 lg:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 lg:pb-0"
            onMouseEnter={newsCarousel.onMouseEnter}
            onMouseLeave={newsCarousel.onMouseLeave}
          >
            {getPage(newsItems, newsCarousel.page, 4).map((item, i) => (
              <div
                key={`${newsCarousel.page}-${i}`}
                className="bg-white rounded-xl overflow-hidden shadow-sm card-hover group animate-fade-in-up shrink-0 w-[48%] lg:w-auto snap-start"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-[#aa8453] font-semibold mb-2">
                    {new Date(item.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <h3 className="font-bold text-[#191717] text-sm mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#888] line-clamp-2 mb-3">
                    {item.excerpt}
                  </p>
                  <button
                    onClick={() => openNewsModal(item)}
                    className="ml-auto w-fit text-xs text-[#aa8453] font-semibold hover:underline flex items-center gap-1"
                  >
                    Read More <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: newsCarousel.totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => newsCarousel.setPage(i)}
                className={`h-2 rounded-full transition-all duration-300 ${newsCarousel.page === i ? "w-6 bg-[#aa8453]" : "w-2 bg-[#aa8453]/30"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - 4 at a time */}
      <section
        ref={testimonialsSection.ref}
        className="section-padding bg-white"
      >
        <div
          className={`container-custom ${testimonialsSection.inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="text-center mb-12">
            <h2 className="section-title flex items-center justify-center gap-4 py-3">
              <span>What People Say</span>
            </h2>
          </div>
          <div
            className="flex lg:grid lg:grid-cols-4 gap-4 lg:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 lg:pb-0"
            onMouseEnter={testimonialsCarousel.onMouseEnter}
            onMouseLeave={testimonialsCarousel.onMouseLeave}
          >
            {getPage(testimonials, testimonialsCarousel.page, 4).map(
              (item, i) => (
                <div
                  key={`${testimonialsCarousel.page}-${i}`}
                  className="bg-[#faf8f5] rounded-xl p-6 relative animate-fade-in-up shrink-0 w-[48%] lg:w-auto snap-start"
                >
                  <div className="absolute top-4 right-4 text-[#aa8453]/20 text-5xl font-serif">
                    &ldquo;
                  </div>
                  <p className="text-sm text-[#555] leading-relaxed mb-3 line-clamp-3">
                    {item.text}
                  </p>

                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-[#191717] text-sm flex items-center gap-1">
                        {item.name}{" "}
                        <CheckCircle2 size={14} className="text-[#aa8453]" />
                      </p>
                      <p className="text-xs text-[#888]">
                        {item.designation}, {item.location}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => openModal(item)}
                    className="text-xs font-medium text-[#aa8453] hover:text-[#8a6d43] transition-colors underline-offset-4 mt-3 flex items-center gap-2 ml-auto hover:underline"
                  >
                    Read More <ArrowRight size={12} />
                  </button>
                </div>
              ),
            )}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: testimonialsCarousel.totalPages }).map(
              (_, i) => (
                <button
                  key={i}
                  onClick={() => testimonialsCarousel.setPage(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${testimonialsCarousel.page === i ? "w-6 bg-[#aa8453]" : "w-2 bg-[#aa8453]/30"}`}
                />
              ),
            )}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/testimonials"
              className="btn-outline rounded-full text-sm"
            >
              View All
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Logos - 4 at a time */}
      <section className="py-16 bg-[#faf8f5]">
        <div className="container-custom mb-10">
          <h2 className="section-title flex items-center justify-center gap-4">
            <span>Our Brands</span>
          </h2>
        </div>
        <div className="container-custom">
          <div
            className="flex lg:grid lg:grid-cols-4 gap-4 lg:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 lg:pb-0"
            onMouseEnter={brandsCarousel.onMouseEnter}
            onMouseLeave={brandsCarousel.onMouseLeave}
          >
            {getPage(brands, brandsCarousel.page, 4).map((brand, i) => (
              <div
                key={`${brandsCarousel.page}-${i}`}
                className="h-24 bg-white rounded-xl shadow-sm border border-[#e8e0d5] flex items-center justify-center hover:shadow-md hover:border-[#aa8453]/40 transition-all duration-300 animate-fade-in-up shrink-0 w-[48%] lg:w-auto snap-start"
              >
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-[80%] max-h-[60%] object-contain"
                  />
                ) : (
                  <span className="text-xs text-[#aa8453] font-semibold tracking-wide opacity-40">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: brandsCarousel.totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => brandsCarousel.setPage(i)}
                className={`h-2 rounded-full transition-all duration-300 ${brandsCarousel.page === i ? "w-6 bg-[#aa8453]" : "w-2 bg-[#aa8453]/30"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Modal */}
      <TestimonialModal
        testimonial={selectedTestimonial}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* Offer Detail Modal */}
      <OfferModal
        offer={selectedOffer}
        isOpen={isOfferDetailOpen}
        onClose={closeOfferModal}
      />

      {/* News Detail Modal */}
      <NewsModal
        newsItem={selectedNews}
        isOpen={isNewsDetailOpen}
        onClose={closeNewsModal}
      />
    </div>
  );
}
