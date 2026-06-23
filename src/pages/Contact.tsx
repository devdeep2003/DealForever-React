import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { siteConfig } from "../data/siteData";

export default function Contact() {
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
                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#555] mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
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
                        placeholder="Doe"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#555] mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#555] mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 9876543210"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="btn-primary rounded-lg w-full sm:w-auto"
                    >
                      Send Message
                    </button>
                  </div>{" "}
                </form>
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
