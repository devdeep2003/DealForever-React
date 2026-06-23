import { X, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  designation: string;
  location: string;
  text: string;
  image: string;
}

interface TestimonialModalProps {
  testimonial: Testimonial | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TestimonialModal({ testimonial, isOpen, onClose }: TestimonialModalProps) {
  if (!isOpen || !testimonial) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[#faf8f5] text-[#555] hover:bg-black hover:text-white transition-colors"
        >
          <X size={18} />
        </button>

        {/* Quote Background */}
        <div className="absolute top-8 left-6 text-[#aa8453]/10 text-8xl font-serif leading-none pointer-events-none">
          &ldquo;
        </div>

        {/* Header with image */}
        <div className="relative bg-[#aa8453] px-6 py-8">
          <div className="flex items-center gap-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-black"
            />
            <div>
              <h3 className="font-bold text-white text-lg flex items-center gap-2">
                {testimonial.name}
                <CheckCircle2 size={16} className="text-[#aa8453]" />
              </h3>
              <p className="text-sm text-white/70">
                {testimonial.designation}, {testimonial.location}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6 overflow-y-auto max-h-[50vh]">
          <p className="text-[#555] text-sm leading-relaxed ">
            {testimonial.text}
          </p>
        </div>

        {/* Footer */}
        {/* <div className="px-6 py-4 bg-[#faf8f5] border-t border-gray-100">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-[#191717] text-white rounded-lg font-medium hover:bg-[#aa8453] transition-colors"
          >
            Close
          </button>
        </div> */}
      </div>
    </div>
  );
}
