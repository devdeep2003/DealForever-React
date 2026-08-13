import { useState, useEffect } from "react";
import PageBanner from "../components/PageBanner";
import { teamMembers } from "../data/siteData";
import { DealsForeverApi } from "../services/api";

const getFullImageUrl = (path: string) => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) return path;

  let baseUrl = import.meta.env.VITE_API_BASE_URL || "";
  if (!baseUrl) {
    baseUrl = "https://mydealforever.com/api";
  } else {
    baseUrl = baseUrl.replace(/\/+$/, "");
  }
  return `${baseUrl}/${path.replace(/^\/+/, "")}`;
};

export default function Team() {
  const [teamList, setTeamList] = useState<any[]>(teamMembers);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        setLoading(true);
        const data = await DealsForeverApi.getAllTeam();
        if (Array.isArray(data) && data.length > 0) {
          const activeTeam = data
            .filter((m: any) => m.isActive !== false)
            .sort((a: any, b: any) => (a.priority ?? 0) - (b.priority ?? 0))
            .map((m: any) => {
              const matchedMock = teamMembers.find(
                (tm) => tm.name.toLowerCase() === m.name.toLowerCase()
              );
              return {
                id: m.teamId,
                name: m.name,
                designation: m.designation,
                image: m.imagePath
                  ? getFullImageUrl(m.imagePath)
                  : matchedMock?.image ||
                    "https://images.pexels.com/photos/3184368/pexels-photo-3184368.jpeg?auto=compress&cs=tinysrgb&w=400",
              };
            });
          setTeamList(activeTeam);
        }
        setError(null);
      } catch (err: any) {
        console.error("Failed to load team members:", err);
        setError("Failed to fetch team members. Showing offline team list.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  return (
    <div>
      <PageBanner
        title="The Team"
        subtitle="Our Backbone"
        breadcrumbs={[{ label: "Team" }]}
      />

      {/* Team */}
      <section className="section-padding bg-[#faf8f5]">
        <div className="container-custom">
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
              <p className="text-gray-500 font-medium">Loading team members...</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamList.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm card-hover group"
                >
                  <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-gray-50">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#191717]/60 to-transparent" />
                  </div>
                  <div className="p-4 text-left">
                    <h3 className="font-bold text-[#191717] text-sm">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#aa8453] font-medium">
                      {member.designation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
