import { X, Calendar } from "lucide-react";

interface NewsItem {
  image: string;
  title: string;
  date: string;
  excerpt: string;
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
    month: "short",
    year: "numeric",
  });

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
            src={newsItem.image}
            alt={newsItem.title}
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
            <Calendar size={12} /> {formattedDate}
          </span>

          <h2 className="absolute bottom-4 left-5 right-5 text-xl font-bold text-white">
            {newsItem.title}
          </h2>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <p className="text-sm text-[#555] leading-relaxed text-justify">
            {newsItem.excerpt}
          </p>
        </div>

        {/* Footer */}
        {/* <div className="p-6 pt-0 shrink-0">
          <button onClick={onClose} className="btn-primary w-full rounded-lg">
            Close
          </button>
        </div> */}
      </div>
    </div>
  );
}