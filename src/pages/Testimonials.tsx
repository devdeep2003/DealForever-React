import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import PageBanner from "../components/PageBanner";
import TestimonialModal from "../components/TestimonialModal";
import { testimonials } from "../data/siteData";
import { DealsForeverApi } from "../services/api";

const getFullImageUrl = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) return path;
  
  const apiUrl = import.meta.env.VITE_API_BASE_URL || 'https://mydealforever.com/api';
  const baseApiUrl = apiUrl.replace(/\/api\/api\/?$/, '/api');
  return `${baseApiUrl.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
};

interface Testimonial {
  id: number;
  name: string;
  designation: string;
  location: string;
  text: string;
  image: string;
}

export default function Testimonials() {
  const [testimonialsList, setTestimonialsList] = useState<any[]>(testimonials);
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await DealsForeverApi.getAllTestimonials();
        const activeTestimonials = (Array.isArray(data) ? data : [])
          .filter((t: any) => t.isActive)
          .map((t: any) => ({
            id: t.id,
            name: t.name,
            designation: t.designation,
            location: "",
            text: t.content,
            image: getFullImageUrl(t.imagePath),
          }));
        if (activeTestimonials.length > 0) {
          setTestimonialsList(activeTestimonials);
        }
      } catch (err) {
        console.error("Failed to load testimonials:", err);
      }
    };
    fetchTestimonials();
  }, []);

  const openModal = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  return (
    <div>
      <PageBanner
        title="What People Say"
        subtitle="Hear from our successful distributors"
        breadcrumbs={[{ label: "Testimonials" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonialsList.map((item) => (
              <div
                key={item.id}
                className="bg-[#faf8f5] rounded-xl p-6 relative card-hover min-h-[200px] flex flex-col"
              >
                <div className="absolute top-4 right-4 text-[#aa8453]/20 text-5xl font-serif">
                  &ldquo;
                </div>

                <div className="flex-1">
                  <p className="text-sm text-[#555] leading-relaxed mb-4">
                    {truncateText(item.text)}
                  </p>
                </div>

                <div className="flex items-end mt-auto">
                  <div className="flex items-center gap-3 w-full">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-[#191717] text-sm flex items-center gap-1">
                          {item.name}
                          <CheckCircle2 size={14} className="text-[#aa8453]" />
                        </p>

                        <button
                          onClick={() => openModal(item)}
                          className="text-xs font-medium text-[#aa8453] hover:text-[#8a6d43] transition-colors underline-offset-4 hover:underline"
                        >
                          Read More
                        </button>
                      </div>

                      <p className="text-xs text-[#888]">
                        {item.designation}{item.location ? `, ${item.location}` : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialModal
        testimonial={selectedTestimonial}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
