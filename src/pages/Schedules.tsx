import { Calendar, Clock, MapPin, User } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { scheduleItems } from "../data/siteData";

const typeColors: Record<string, string> = {
  Meeting: "#3498db",
  Training: "#2ecc71",
  Event: "#e67e22",
  Orientation: "#9b59b6",
};

const mapimage = import.meta.env.VITE_BASE_URL + "/images/maps.svg";

export default function Schedules() {
  return (
    <div>
      <PageBanner
        title="Schedules"
        subtitle="Upcoming events and meetings"
        breadcrumbs={[{ label: "Schedules" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-4">
            {scheduleItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-6 bg-[#faf8f5] rounded-xl card-hover"
              >
                <div
                  className="w-2 rounded-full shrink-0"
                  style={{
                    backgroundColor: typeColors[item.type] || "#aa8453",
                  }}
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-bold text-[#191717]">{item.title}</h3>
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                      style={{
                        backgroundColor: typeColors[item.type] || "#aa8453",
                      }}
                    >
                      {item.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-[#555]">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-[#aa8453]" />{" "}
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} className="text-[#aa8453]" /> {item.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-[#aa8453]" />{" "}
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} className="text-[#aa8453]" />{" "}
                      {item.faculty}
                    </span>

                    <span className="flex items-center gap-1">
                      <a
                        href={`https://www.google.com/maps?q=${item.lat},${item.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-black hover:text-red-600 text-sm font-medium transition-colors"
                      >
                        <img
                          src={mapimage}
                          alt="Google Maps"
                          className="w-8 h-8 object-contain"
                        />
                        <span>View on Google Maps</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
