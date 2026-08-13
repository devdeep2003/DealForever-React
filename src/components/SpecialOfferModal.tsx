import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
      className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Dark Header */}
        <div className="bg-[#aa8453] px-6 py-5 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-4">
            <div>
              <h3 className="text-white font-bold text-base leading-snug">
                {offer.title}
              </h3>
              <p className="text-[#aa8453] bg-white rounded-xl px-4 py-1 w-fit text-xs font-semibold mt-0.5">
                Valid till: {offer.validTill}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white flex-shrink-0"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 px-6 py-6">
          {/* Carousel */}
          <div className="relative h-52 rounded-xl border-2 border-[#aa8453] overflow-hidden mb-6 group">
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

            {offer.subImages.length > 1 && (
              <>
                {/* Prev Button */}
                <button
                  onClick={() =>
                    setCurrentSlide(
                      (prev) =>
                        (prev - 1 + offer.subImages.length) % offer.subImages.length,
                    )
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft size={18} />
                </button>

                {/* Next Button */}
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev + 1) % offer.subImages.length)
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight size={18} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
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
          </div>

          {/* Full Description */}
          <p className="text-sm text-[#555] leading-7 text-justify">
            {offer.fullDescription}
          </p>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-[#aaa]">Deal Forever Enterprises — Special Offer</span>
          </div>
        </div>
      </div>
    </div>
  );
}