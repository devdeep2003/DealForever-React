import { X, Calendar } from "lucide-react";

interface NewsItem {
  image: string;
  title: string;
  date: string;
  excerpt: string;
  description: string;
}

interface NewsModalProps {
  newsItem: NewsItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsModal({
  newsItem,
  isOpen,
  onClose,
}: NewsModalProps) {
  if (!isOpen || !newsItem) return null;

  const formattedDate = new Date(newsItem.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero Image — fixed, does not scroll */}
        <div className="relative h-48 sm:h-56 md:h-64 w-full flex-shrink-0">
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-1.5 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Article Content */}
        <div className="overflow-y-auto flex-1 px-8 py-8">
          {/* Meta */}
          <div className="flex items-center gap-2 text-xs text-[#aa8453] font-semibold mb-4">
            <Calendar size={13} />
            {formattedDate}
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-[#191717] leading-snug mb-4">
            {newsItem.title}
          </h2>

          {/* Divider */}
          <div className="w-16 h-1 bg-[#aa8453] rounded-full mb-6" />

          {/* Excerpt as lead paragraph */}
          <p className="text-base font-semibold text-[#444] leading-relaxed mb-5 border-l-4 border-[#aa8453] pl-4 italic">
            {newsItem.excerpt}
          </p>

          {/* Full Description */}
          <p className="text-sm text-[#666] leading-7 text-justify">
            {newsItem.description}
          </p>

          {/* Footer */}
          <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-[#aaa]">
              Deal Forever Enterprises — Official News
            </span>
            <button
              onClick={onClose}
              className="text-sm text-[#aa8453] font-semibold hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}