import { useState, useEffect } from "react";
import { X, Tag, CalendarClock, ChevronLeft, ChevronRight } from "lucide-react";

interface Offer {
  image: string;
  title: string;
  description: string;
  validTill: string;
  subImages: string[];
  fullDescription: string;
}

interface OfferModalProps {
  offer: Offer | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SpecialOfferModal({
  offer,
  isOpen,
  onClose,
}: OfferModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!offer) return;
    setCurrentSlide(0);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offer.subImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [offer]);

  if (!isOpen || !offer) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div
        className="relative bg-white rounded-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Carousel Header */}
        <div className="relative h-44 sm:h-52 md:h-56 shrink-0 group">
          {offer.subImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${offer.title} image ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-[#191717]/80 via-[#191717]/20 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors backdrop-blur-sm z-10"
          >
            <X size={18} />
          </button>

          <span className="absolute top-4 left-4 inline-flex items-center gap-1 bg-[#aa8453] text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
            <Tag size={12} /> Offer
          </span>

          {/* Prev / Next */}
          {offer.subImages.length > 1 && (
            <>
              <button
                onClick={() =>
                  setCurrentSlide(
                    (prev) =>
                      (prev - 1 + offer.subImages.length) % offer.subImages.length,
                  )
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100 z-10"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev + 1) % offer.subImages.length)
                }
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100 z-10"
              >
                <ChevronRight size={18} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {offer.subImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      i === currentSlide ? "bg-white w-4" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          <h2 className="absolute bottom-4 left-5 right-5 text-xl font-bold text-white z-10">
            {offer.title}
          </h2>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <p className="text-sm text-[#555] leading-relaxed text-justify mb-5">
            {offer.fullDescription}
          </p>

          <div className="flex items-center gap-2 text-sm text-[#aa8453] font-semibold bg-[#faf8f5] border border-[#e8e0d5] rounded-lg px-4 py-3">
            <CalendarClock size={16} />
            Valid till: {offer.validTill}
          </div>
        </div>
      </div>
    </div>
  );
}