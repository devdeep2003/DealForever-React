import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight , ArrowRight} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { offers } from '../data/siteData';

export default function Offers() {
  const [selectedOffer, setSelectedOffer] = useState<typeof offers[0] | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!selectedOffer) return;
    setCurrentSlide(0);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % selectedOffer.subImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [selectedOffer]);

  return (
    <div>
      <PageBanner
        title="Special Offers"
        subtitle="Take advantage of our latest deals"
        breadcrumbs={[{ label: 'Offers' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="group rounded-xl overflow-hidden shadow-md card-hover bg-white"
              >
                <div className="relative h-56">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#aa8453] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    Special Offer
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="text-lg font-bold text-[#191717]">{offer.title}</h3>
                  <p className="text-sm text-[#555] line-clamp-2">{offer.description}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-[#aa8453] font-semibold">
                      Valid till: {offer.validTill}
                    </p>
                    <button
                      onClick={() => setSelectedOffer(offer)}
                      className="text-sm text-[#aa8453] font-semibold hover:underline flex items-center gap-1"
                    >
                      Read More <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup */}
      {selectedOffer && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedOffer(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Dark Header */}
            <div className="bg-[#aa8453] px-6 py-5 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-4">
                {/* <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#aa8453] flex-shrink-0">
                  <img
                    src={selectedOffer.image}
                    alt={selectedOffer.title}
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <div>
                  <h3 className="text-white font-bold text-base leading-snug">
                    {selectedOffer.title}
                  </h3>
                  <p className="text-[#aa8453] bg-white rounded-xl px-4 py-1 w-fit text-xs font-semibold mt-0.5">
                    Valid till: {selectedOffer.validTill}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedOffer(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white flex-shrink-0"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto flex-1 px-6 py-6">

              {/* Carousel */}
              <div className="relative h-52 rounded-xl border-2 border-[#aa8453] overflow-hidden mb-6 group">
                {selectedOffer.subImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${selectedOffer.title} image ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      i === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}

                {/* Prev Button */}
                <button
                  onClick={() =>
                    setCurrentSlide((prev) =>
                      (prev - 1 + selectedOffer.subImages.length) % selectedOffer.subImages.length
                    )
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft size={18} />
                </button>

                {/* Next Button */}
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev + 1) % selectedOffer.subImages.length)
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight size={18} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {selectedOffer.subImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        i === currentSlide ? 'bg-white w-4' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Divider
              <div className="w-full h-1 bg-[#aa8453] rounded-full mb-4" /> */}

              {/* Full Description */}
              <p className="text-sm text-[#555] leading-7 text-justify">
                {selectedOffer.fullDescription}
              </p>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-[#aaa]">Deal Forever Enterprises — Special Offer</span>
                {/* <button
                  onClick={() => setSelectedOffer(null)}
                  className="text-xs text-[#aa8453] font-semibold hover:underline"
                >
                  Close
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 