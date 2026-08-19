import { useState, useEffect } from "react";
import { Calendar, X, ArrowRight, User } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { newsItems } from "../data/siteData";
import { DealsForeverApi } from "../services/api";

const getFullImageUrl = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) return path;
  
  const apiUrl = import.meta.env.VITE_API_BASE_URL || 'https://mydealforever.com/api';
  const baseApiUrl = apiUrl.replace(/\/api\/api\/?$/, '/api');
  return `${baseApiUrl.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
};

export default function News() {
  const [newsList, setNewsList] = useState<any[]>(newsItems);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await DealsForeverApi.getAllNewsAndMedia();
        const activeNews = (Array.isArray(data) ? data : [])
          .filter((item: any) => item.isActive)
          .map((item: any) => ({
            id: item.blogId,
            image: getFullImageUrl(item.imagePath),
            title: item.title,
            date: item.blogDate,
            excerpt: item.content,
            description: item.content,
            from: "Admin"
          }));
        if (activeNews.length > 0) {
          setNewsList(activeNews);
        }
      } catch (err) {
        console.error("Failed to load news and media:", err);
      }
    };
    fetchNews();
  }, []);

  return (
    <div>
      <PageBanner
        title="News & Media"
        subtitle="Latest updates from Deal Forever"
        breadcrumbs={[{ label: "News & Media" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsList.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-md card-hover group"
              >
                <div className="relative h-80 sm:h-96 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col"> 
                  <div className="flex items-center gap-2 text-xs text-[#aa8453] font-semibold mb-3 justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {new Date(item.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>

                    <div className="flex items-center gap-">
                      <User size={14} className="text-[#aa8453] font-bold" />
                      <span className="text-xs text-[#aa8453] ml-1">{item.from}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#191717] mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#888] line-clamp-3 mb-4">
                    {item.excerpt}
                  </p>
                  <div className="flex justify-end">
                    <button
                      onClick={() => setSelectedItem(item)}
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

      {/* Article Popup */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hero Image — fixed, does not scroll */}
            <div className="relative h-48 sm:h-56 md:h-64 w-full flex-shrink-0">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-1.5 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Article Content */}
            <div className="overflow-y-auto flex-1 px-8 py-8">
              {/* Meta */}
              <div className="flex items-center gap-2 text-xs text-[#aa8453] font-semibold mb-4">
                <Calendar size={13} />
                {new Date(selectedItem.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-[#191717] leading-snug mb-4">
                {selectedItem.title}
              </h2>

              {/* Divider */}
              <div className="w-16 h-1 bg-[#aa8453] rounded-full mb-6" />

              {/* Excerpt as lead paragraph */}
              {/* <p className="text-base font-semibold text-[#444] leading-relaxed mb-5 border-l-4 border-[#aa8453] pl-4 italic">
                {selectedItem.excerpt}
              </p> */}

              {/* Full Description */}
              <p className="text-sm text-[#666] leading-7 text-justify">
                {selectedItem.description}
              </p>

              {/* Footer */}
              <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-[#aaa]">
                  Deal Forever Enterprises — Official News
                </span>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-sm text-[#aa8453] font-semibold hover:underline"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
