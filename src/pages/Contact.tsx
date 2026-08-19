import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Loader2, CheckCircle2 } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { siteConfig } from "../data/siteData";
import { DealsForeverApi } from "../services/api";

const EMPTY_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState("");

  const setField = (field: keyof typeof EMPTY_FORM, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    if (formData.firstName.trim().length < 2) {
      return "First name must be at least 2 characters long.";
    }
    if (!formData.email.trim()) {
      return "Email address is required.";
    }
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      return "Please enter a valid 10-digit Indian phone number (starting with 6-9).";
    }
    if (formData.subject.trim().length < 3) {
      return "Subject must be at least 3 characters long.";
    }
    if (formData.message.trim().length < 3) {
      return "Message must be at least 3 characters long.";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const res = await DealsForeverApi.sendContactMessage({
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim() || null,
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });
      if (res === true) {
        setSuccessMessage("Your enquiry has been sent successfully.");
      } else {
        setSuccessMessage("Your enquiry has been sent successfully.");
      }
      setSubmitted(true);
      setFormData(EMPTY_FORM);
    } catch (err: any) {
      setError(err.message || "Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageBanner
        title="Contact Us"
        subtitle="We'd love to hear from you"
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-[#faf8f5] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center">
                    <Phone size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-[#191717]">Phone</h3>
                </div>
                <p className="text-sm text-[#555]">
                  Toll Free:{" "}
                  <a
                    href={`tel:${siteConfig.tollFree}`}
                    className="text-[#aa8453] hover:underline"
                  >
                    {siteConfig.tollFree}
                  </a>
                </p>
                <p className="text-sm text-[#555]">
                  Office:{" "}
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-[#aa8453] hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
              </div>

              <div className="bg-[#faf8f5] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center">
                    <Mail size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-[#191717]">Email</h3>
                </div>
                <p className="text-sm text-[#555]">
                  General:{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-[#aa8453] hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </p>
                <p className="text-sm text-[#555]">
                  Support:{" "}
                  <a
                    href={`mailto:${siteConfig.customerCareEmail}`}
                    className="text-[#aa8453] hover:underline"
                  >
                    {siteConfig.customerCareEmail}
                  </a>
                </p>
              </div>

              <div className="bg-[#faf8f5] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center">
                    <MessageCircle size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-[#191717]">WhatsApp</h3>
                </div>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
                  className="text-sm text-[#aa8453] hover:underline"
                >
                  {siteConfig.whatsapp}
                </a>
              </div>

              <div className="bg-[#faf8f5] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center">
                    <Clock size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-[#191717]">Business Hours</h3>
                </div>
                <p className="text-sm text-[#555]">
                  Monday - Saturday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-sm text-[#555]">Sunday: Closed</p>
              </div>

              <div className="bg-[#faf8f5] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-[#191717]">Address</h3>
                </div>
                <p className="text-sm text-[#555]">{siteConfig.address}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#191717] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-[#888] mb-6">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center space-y-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-green-950">Thank You!</h3>
                    <p className="text-sm text-green-800">
                      {successMessage || "Your enquiry has been sent successfully."}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-[#aa8453] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg p-4 text-xs font-medium">
                        {error}
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#555] mb-1">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text" required
                          value={formData.firstName}
                          onChange={(e) => setField("firstName", e.target.value)}
                          placeholder="John"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#555] mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setField("lastName", e.target.value)}
                          placeholder="Doe"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#555] mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email" required
                          value={formData.email}
                          onChange={(e) => setField("email", e.target.value)}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#555] mb-1">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel" required
                          value={formData.phone}
                          onChange={(e) => setField("phone", e.target.value)}
                          placeholder="9876543210"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#555] mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text" required
                        value={formData.subject}
                        onChange={(e) => setField("subject", e.target.value)}
                        placeholder="How can we help?"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#555] mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={5} required
                        value={formData.message}
                        onChange={(e) => setField("message", e.target.value)}
                        placeholder="Tell us more about your inquiry..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors resize-none"
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit" disabled={loading}
                        className="btn-primary rounded-lg w-full sm:w-auto flex items-center justify-center gap-2"
                      >
                        {loading && <Loader2 size={16} className="animate-spin" />}
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] bg-gray-100 p-[60px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.1716!2d75.7804!3d11.2588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE1JzMxLjciTiA3NcKwNDYnNDkuNCJF!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Deal Forever Office Location"
        />
      </section>
    </div>
  );
}
