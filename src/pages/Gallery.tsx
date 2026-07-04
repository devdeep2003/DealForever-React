import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { galleryImages } from "../data/siteData";

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<
    (typeof galleryImages)[0] | null
  >(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!selectedItem) return;
    setCurrentSlide(0);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % selectedItem.subImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [selectedItem]);

  return (
    <div>
      <PageBanner
        title="Photo Gallery"
        subtitle="Moments from Deal Forever events and activities"
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="relative group cursor-pointer h-44 sm:h-52 md:h-56"
                  onClick={() => setSelectedItem(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                      {image.alt}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between px-4 py-3 bg-white">
                  <span className="text-black text-sm font-medium truncate pr-2">
                    {image.title}
                  </span>
                  <button
                    className="flex items-center gap-1 text-[#aa8453] font-semibold text-sm whitespace-nowrap hover:gap-2 transition-all"
                    onClick={() => setSelectedItem(image)}
                  >
                    See More
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelectedItem(null)}
          >
            <X size={32} />
          </button>

          <div
            className="flex flex-col max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Image Carousel */}
            <div className="relative h-[55vh] rounded-2xl overflow-hidden group/carousel">
              {selectedItem.subImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${selectedItem.title} ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Dark gradient overlays for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Prev */}
              <button
                onClick={() =>
                  setCurrentSlide(
                    (prev) =>
                      (prev - 1 + selectedItem.subImages.length) %
                      selectedItem.subImages.length,
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all opacity-0 group-hover/carousel:opacity-100 backdrop-blur-sm border border-white/10"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Next */}
              <button
                onClick={() =>
                  setCurrentSlide(
                    (prev) => (prev + 1) % selectedItem.subImages.length,
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all opacity-0 group-hover/carousel:opacity-100 backdrop-blur-sm border border-white/10"
              >
                <ChevronRight size={18} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {selectedItem.subImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentSlide
                        ? "bg-white w-5"
                        : "bg-white/40 w-1.5 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Title & Description */}
            <div className="mt-5 px-1 border-l-4 border-[#aa8453] pl-4">
              <h3 className="text-white text-xl font-bold mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed text-justify">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}