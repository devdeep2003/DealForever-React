import { X, Tag, CalendarClock } from "lucide-react";

interface Offer {
  image: string;
  title: string;
  description: string;
  validTill: string;
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
        {/* Image Header */}
        <div className="relative h-44 sm:h-52 md:h-56 shrink-0">
          <img
            src={offer.image}
            alt={offer.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#191717]/80 via-[#191717]/20 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
          >
            <X size={18} />
          </button>

          <span className="absolute top-4 left-4 inline-flex items-center gap-1 bg-[#aa8453] text-white px-3 py-1 rounded-full text-xs font-semibold">
            <Tag size={12} /> Offer
          </span>

          <h2 className="absolute bottom-4 left-5 right-5 text-xl font-bold text-white">
            {offer.title}
          </h2>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <p className="text-sm text-[#555] leading-relaxed text-justify mb-5">
            {offer.description}
          </p>

          <div className="flex items-center gap-2 text-sm text-[#aa8453] font-semibold bg-[#faf8f5] border border-[#e8e0d5] rounded-lg px-4 py-3">
            <CalendarClock size={16} />
            Valid till: {offer.validTill}
          </div>
        </div>

        {/* Footer */}
        {/* <div className="p-6 pt-0 shrink-0">
          <button onClick={onClose} className="btn-primary w-full rounded-lg">
            Got It
          </button>
        </div> */}
      </div>
    </div>
  );
}