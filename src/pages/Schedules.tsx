import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, User } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { scheduleItems } from "../data/siteData";
import { DealsForeverApi } from "../services/api";

const typeColors: Record<string, string> = {
  Meeting: "#3498db",
  Training: "#2ecc71",
  Event: "#e67e22",
  Orientation: "#9b59b6",
};

const mapimage = import.meta.env.VITE_BASE_URL + "/images/maps.svg";

const formatTime = (timeStr: string) => {
  if (!timeStr) return "";
  try {
    const parts = timeStr.split(":");
    if (parts.length >= 2) {
      const hrs = parseInt(parts[0], 10);
      const mins = parts[1];
      const ampm = hrs >= 12 ? "PM" : "AM";
      const formattedHrs = hrs % 12 || 12;
      return `${formattedHrs}:${mins} ${ampm}`;
    }
  } catch (e) {
    // ignore
  }
  return timeStr;
};

export default function Schedules() {
  const [schedulesList, setSchedulesList] = useState<any[]>(scheduleItems);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        setLoading(true);
        const data = await DealsForeverApi.getAllSchedules();
        if (Array.isArray(data) && data.length > 0) {
          const activeSchedules = data
            .filter((s: any) => s.isActive !== false)
            .map((s: any) => {
              const matchedMock = scheduleItems.find(
                (m) => m.title.toLowerCase() === s.title.toLowerCase()
              );

              const formattedDate = s.scheduleDisplay ||
                (s.scheduleDate ? new Date(s.scheduleDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }) : "");

              return {
                id: s.scheduleId,
                title: s.title || s.scheduleName || "Meeting",
                type: s.scheduleName || "Meeting",
                date: formattedDate || matchedMock?.date || "TBD",
                time: s.startTime ? `${formatTime(s.startTime)} - ${formatTime(s.endTime)}` : matchedMock?.time || "TBD",
                location: s.branchName || matchedMock?.location || "TBD",
                faculty: s.speakerName || matchedMock?.faculty || "TBD",
                googleMapUrl: s.googleMapUrl || matchedMock?.googleMapUrl || "https://www.google.com/maps",
                colorCode: s.colorCode || null,
              };
            });
          setSchedulesList(activeSchedules);
        }
        setError(null);
      } catch (err: any) {
        console.error("Failed to load schedules:", err);
        setError("Failed to fetch schedules. Showing offline schedule list.");
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  return (
    <div>
      <PageBanner
        title="Schedules"
        subtitle="Upcoming events and meetings"
        breadcrumbs={[{ label: "Schedules" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {error && (
            <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl flex items-center justify-between text-amber-800 text-sm">
              <span>{error}</span>
              <button
                onClick={() => setError(null)}
                className="text-amber-500 hover:text-amber-700 font-semibold"
              >
                Dismiss
              </button>
            </div>
          )}

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-[#aa8453] border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-gray-500 font-medium">Loading schedules...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {schedulesList.map((item) => {
                const borderBgColor = item.colorCode || typeColors[item.type] || "#aa8453";
                return (
                  <div
                    key={item.id}
                    className="flex gap-4 p-6 bg-[#faf8f5] rounded-xl card-hover"
                  >
                    <div
                      className="w-2 rounded-full shrink-0"
                      style={{
                        backgroundColor: borderBgColor,
                      }}
                    />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-bold text-[#191717]">{item.title}</h3>
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                          style={{
                            backgroundColor: borderBgColor,
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

                        <span className="flex items-center gap-1 ml-auto sm:ml-0">
                          <a
                            href={item.googleMapUrl}
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
                );
              })}

              {schedulesList.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-[#888]">No schedules found.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
