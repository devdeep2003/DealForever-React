import { useState } from 'react';
import {
  User, Mail, Phone, MapPin, Briefcase, MessageSquare,
  CheckCircle2, ChevronRight, ArrowRight, Loader2,
} from 'lucide-react';
import PageBanner from '../components/PageBanner';

const IMG = 'https://dealforever25.netlify.app/images/';

const whyJoin = [
  {
    icon: 'icons8-balance-64 (5).png',
    title: 'Equal Opportunity',
    desc: 'No barrier of education or economic background. Everyone gets a fair chance.',
  },
  {
    icon: 'icons8-income-64.png',
    title: 'Unlimited Income',
    desc: 'Your earnings are determined by your effort — no cap, no ceiling.',
  },
  {
    icon: 'icons8-reply-arrow-48.png',
    title: 'Free to Join',
    desc: 'Registering for a Deal Forever business is simple and completely free.',
  },
  {
    icon: 'icons8-personal-growth-64.png',
    title: 'Personal Growth',
    desc: 'Develop leadership skills and grow as you help others succeed.',
  },
  {
    icon: 'icons8-junction-64.png',
    title: 'Full Flexibility',
    desc: 'Choose when you work, how you work, and where you work.',
  },
  {
    icon: 'icons8-trust-64.png',
    title: 'Generational Wealth',
    desc: 'Build something you can pass down to your children and family.',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Details', desc: 'Fill out the form with your basic information and we will reach out to you.' },
  { num: '02', title: 'Attend an Orientation', desc: 'Our team will walk you through the business plan and compensation structure.' },
  { num: '03', title: 'Get Registered', desc: 'Complete your free registration on www.mydealforever.com.' },
  { num: '04', title: 'Start Earning', desc: 'Begin selling, building your team, and unlocking bonuses from day one.' },
];

const hearOptions = [
  'Friend / Family',
  'Social Media',
  'Online Search',
  'YouTube',
  'Business Event / Seminar',
  'Existing Distributor',
  'Other',
];

type FormState = {
  full_name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  occupation: string;
  how_did_you_hear: string;
  message: string;
};

const empty: FormState = {
  full_name: '', email: '', phone: '', city: '',
  state: '', occupation: '', how_did_you_hear: '', message: '',
};

export default function StartBusiness() {
  const [form, setForm] = useState<FormState>(empty);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function set(field: keyof FormState, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // Basic required-field check
    if (!form.full_name || !form.email || !form.phone || !form.city || !form.state) {
      setError('Please fill out all required fields.');
      return;
    }

    setLoading(true);

    // TODO: wire this up to your backend / API of choice.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(empty);
    }, 1000);
  }

  return (
    <div>
      <PageBanner
        title="Start A Business"
        subtitle="Your journey to financial freedom begins here"
        breadcrumbs={[{ label: 'Start A Business' }]}
      />

      {/* ── Hero intro ── */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="section-subtitle">Start Your Business Today</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#191717] mb-4 tracking-tight">
                Send Us Your Details &amp; We'll Get in Touch
              </h2>
              <p className="text-[#555] leading-relaxed mb-6 text-sm md:text-base">
                In regards to your queries and steps towards your very own Deal Forever business.
                Our team will guide you every step of the way — from orientation to your first sale.
              </p>
              <div className="space-y-2.5">
                {[
                  'Completely free to register',
                  'Dedicated mentor assigned to you',
                  'Start earning from day one',
                  'Work from anywhere in India',
                ].map((pt, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#aa8453] shrink-0" />
                    <span className="text-sm text-[#555]">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Start Your Business"
                className="w-full h-[280px] md:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191717]/60 to-transparent flex items-end p-6 md:p-8">
                <p className="text-white text-base md:text-lg font-semibold leading-snug">
                  Join thousands of successful Deal Forever distributors across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Join ── */}
      <section className="py-10 md:py-16 bg-[#faf8f5]">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-10">
            <p className="section-subtitle">Why Join Us</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#191717] tracking-tight">What You Get When You Partner With Deal Forever</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {whyJoin.map((w, i) => (
              <div key={i} className="bg-white rounded-xl p-5 md:p-6 card-hover flex gap-4 items-start shadow-sm">
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-xl bg-[#faf8f5] flex items-center justify-center">
                  <img src={`${IMG}${w.icon}`} alt={w.title} className="w-7 h-7 md:w-8 md:h-8 object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-[#191717] mb-1 text-sm md:text-base">{w.title}</h3>
                  <p className="text-xs md:text-sm text-[#888] leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-10">
            <p className="section-subtitle">How It Works</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#191717] tracking-tight">4 Simple Steps To Start</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="bg-[#faf8f5] rounded-xl p-5 md:p-6 card-hover h-full">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl md:text-5xl font-black text-[#aa8453]/20 leading-none">{s.num}</span>
                    <h3 className="font-bold text-[#191717] text-sm md:text-base">{s.title}</h3>
                  </div>
                  <p className="text-xs md:text-sm text-[#888] leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <ChevronRight size={20} className="text-[#aa8453]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Form ── */}
      <section className="py-10 md:py-16 bg-[#faf8f5]">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-8 md:mb-10">
            <p className="section-subtitle">Register Your Interest</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#191717] tracking-tight">Start Your Business Today</h2>
            <p className="text-[#555] max-w-xl mx-auto text-sm">
              Send us your details and our team will get in touch with you to discuss how you can start
              your Deal Forever business journey.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center max-w-lg mx-auto">
              <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-[#191717] mb-3">Enquiry Submitted!</h3>
              <p className="text-[#555] leading-relaxed mb-6">
                Thank you for your interest in starting a Deal Forever business. Our team will
                reach out to you within 24-48 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-primary rounded-full inline-flex items-center gap-2"
              >
                Submit Another <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100"
            >
              {error && (
                <div className="mb-6 px-4 py-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg">
                  {error}
                </div>
              )}

              {/* Personal Info */}
              <div className="mb-6 md:mb-8">
                <h3 className="font-bold text-[#191717] text-base md:text-lg mb-4 md:mb-5 flex items-center gap-2">
                  <User size={18} className="text-[#aa8453]" /> Personal Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.full_name}
                      onChange={e => set('full_name', e.target.value)}
                      placeholder="e.g. Arun Kumar"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1.5">
                      Occupation
                    </label>
                    <input
                      type="text"
                      value={form.occupation}
                      onChange={e => set('occupation', e.target.value)}
                      placeholder="e.g. Teacher, Business Owner"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="mb-6 md:mb-8">
                <h3 className="font-bold text-[#191717] text-base md:text-lg mb-4 md:mb-5 flex items-center gap-2">
                  <Mail size={18} className="text-[#aa8453]" /> Contact Details
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => set('email', e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => set('phone', e.target.value)}
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="mb-6 md:mb-8">
                <h3 className="font-bold text-[#191717] text-base md:text-lg mb-4 md:mb-5 flex items-center gap-2">
                  <MapPin size={18} className="text-[#aa8453]" /> Location
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1.5">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.city}
                      onChange={e => set('city', e.target.value)}
                      placeholder="e.g. Kozhikode"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1.5">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.state}
                      onChange={e => set('state', e.target.value)}
                      placeholder="e.g. Kerala"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* More info */}
              <div className="mb-6 md:mb-8">
                <h3 className="font-bold text-[#191717] text-base md:text-lg mb-4 md:mb-5 flex items-center gap-2">
                  <Briefcase size={18} className="text-[#aa8453]" /> A Little More
                </h3>
                <div className="space-y-4 md:space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1.5">How did you hear about us?</label>
                    <select
                      value={form.how_did_you_hear}
                      onChange={e => set('how_did_you_hear', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#aa8453] focus:outline-none transition-colors bg-white text-[#555]"
                    >
                      <option value="">Select an option</option>
                      {hearOptions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1.5 flex items-center gap-1.5">
                      <MessageSquare size={14} className="text-[#aa8453]" /> Message / Queries (optional)
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={e => set('message', e.target.value)}
                      placeholder="Tell us about your goals or any questions you have..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#aa8453] focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-xs text-[#aaa] text-center">
                  <span className="text-red-500">*</span> Required fields
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary rounded-full inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <><Loader2 size={16} className="animate-spin" /> Submitting…</>
                  ) : (
                    <>Submit Enquiry <ArrowRight size={16} /></>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── Contact strip ── */}
      <section className="py-10 md:py-12 bg-[#191717]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <p className="text-white font-bold text-lg mb-1">Prefer to talk directly?</p>
              <p className="text-white/60 text-sm">Our team is available Monday – Saturday, 9 AM – 6 PM</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+919995320886"
                className="inline-flex items-center gap-2 bg-[#aa8453] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#96733e] transition-colors"
              >
                <Phone size={16} /> +91 9995320886
              </a>
              <a
                href="mailto:info@mydealforever.com"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full text-sm hover:border-[#aa8453] transition-colors"
              >
                <Mail size={16} /> info@mydealforever.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}