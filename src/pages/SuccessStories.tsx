import { useState, useEffect, useMemo } from "react";
import PageBanner from "../components/PageBanner";
import { DealsForeverApi } from "../services/api";

interface SuccessStory {
  id: number;
  name: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  fullStory: string;
  location: string;
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    name: "Abdul Rahiman",
    title: "Diamond Distributor",
    category: "Health & Wellness",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    excerpt:
      "From a small town in Malappuram to building a network of over 5000 distributors across Kerala, Abdul's journey is nothing short of inspirational.",
    fullStory:
      "Abdul Rahiman started his journey with Deal Forever in 2019 as a part-time distributor while working as a school teacher. His dedication to understanding the products and helping others achieve their dreams led to remarkable growth. Within 18 months, he achieved the Diamond Distributor status. Today, he leads a team of over 5000 active distributors across Kerala, Tamil Nadu, and Karnataka. His story proves that with determination and the right platform, anyone can achieve financial independence.",
    location: "Malappuram, Kerala",
  },
  {
    id: 2,
    name: "Lakshmi Devi",
    title: "Platinum Distributor",
    category: "Personal Care",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    excerpt:
      "A homemaker who transformed her life and now inspires other women to become financially independent through her remarkable success story.",
    fullStory:
      "Lakshmi Devi was a dedicated homemaker for 15 years before discovering Deal Forever. Initially skeptical about direct selling, she started with a small investment and focused on sharing products she genuinely loved. Her authentic approach resonated with customers, and her business grew organically. Today, she earns consistently and has helped over 200 women start their entrepreneurial journey. She conducts regular training sessions and is a mentor for new distributors.",
    location: "Kochi, Kerala",
  },
  {
    id: 3,
    name: "Sanjay Kumar",
    title: "Gold Distributor",
    category: "Home Care",
    image:
      "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400",
    excerpt:
      "After losing his job during the pandemic, Sanjay found a new purpose and financial stability through Deal Forever's home care products division.",
    fullStory:
      "Sanjay Kumar was working as a sales executive when the COVID-19 pandemic cost him his job. With a family to support and mounting financial pressure, he was desperate for opportunities. A friend introduced him to Deal Forever's home care products. His sales experience proved valuable, and he quickly built a customer base. Within a year, he achieved Gold status and now runs a successful business from home, training others who faced similar challenges.",
    location: "Kannur, Kerala",
  },
  {
    id: 4,
    name: "Geeta Nair",
    title: "Diamond Distributor",
    category: "Digital Products",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    excerpt:
      "A tech-savvy professional who leveraged digital tools to build one of the fastest-growing networks in the company's history.",
    fullStory:
      "Geeta Nair was a software engineer looking for additional income opportunities. Her understanding of digital marketing and social media helped her build a unique approach to distributorship. She created online training modules, developed a digital onboarding system, and focused on reaching younger audiences. Her tech-forward approach resulted in one of the fastest-growing networks in the company. She now mentors distributors across India on using digital tools effectively.",
    location: "Thiruvananthapuram, Kerala",
  },
  {
    id: 5,
    name: "Mohammed Ashraf",
    title: "Platinum Distributor",
    category: "Health & Wellness",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    excerpt:
      "A fitness enthusiast who found his calling in promoting health and wellness products, building a thriving business across three states.",
    fullStory:
      "Mohammed Ashraf was passionate about fitness but working in a corporate job that left little time for his interests. Deal Forever's health and wellness products aligned perfectly with his lifestyle. He started by recommending products to his gym network, which grew organically through word of mouth. His authentic passion and product knowledge helped him build trust. Today, he operates across Kerala, Karnataka, and Tamil Nadu, combining his fitness expertise with successful distributorship.",
    location: "Kozhikode, Kerala",
  },
  {
    id: 6,
    name: "Sindhu Rani",
    title: "Gold Distributor",
    category: "Personal Care",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
    excerpt:
      "A beauty professional who expanded her salon business by integrating Deal Forever's personal care product line into her services.",
    fullStory:
      "Sindhu Rani owned a small beauty salon in Thrissur. When she discovered Deal Forever's personal care products, she saw an opportunity to enhance her services. She integrated the products into her treatments and began retailing them to satisfied customers. Her salon became a hub for product demonstrations, and she evolved into a successful distributor. Her dual business model now generates multiple income streams, and she's opened two additional salon branches.",
    location: "Thrissur, Kerala",
  },
  {
    id: 7,
    name: "Rajesh Menon",
    title: "Diamond Distributor",
    category: "Home Care",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
    excerpt:
      "A retired government employee who found new purpose and significant income in his retirement years through Deal Forever.",
    fullStory:
      "Rajesh Menon retired from government service with a modest pension. Seeking meaningful activity and additional income, he discovered Deal Forever. Approaching it professionally, he treated the opportunity as he did his government career—with dedication and systematic planning. His networking skills from decades of public service helped him build strong relationships. At 62, he leads one of the most successful distributor networks and proves age is no barrier to entrepreneurial success.",
    location: "Kottayam, Kerala",
  },
  {
    id: 8,
    name: "Anjali Krishnan",
    title: "Platinum Distributor",
    category: "Digital Products",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
    excerpt:
      "A stay-at-home mother who built a flourishing business while raising her children, becoming a role model for aspiring mompreneurs.",
    fullStory:
      "Anjali Krishnan left her corporate job to raise her children, missing the independence and professional identity. She started with Deal Forever as a way to stay connected professionally while maintaining flexibility. Working during school hours and evenings, she built her business systematically. Her story resonates particularly with other mothers seeking work-life balance. She now leads a network of predominantly women distributors and advocates for women's financial independence.",
    location: "Ernakulam, Kerala",
  },
];

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

export default function SuccessStories() {
  const [storiesList, setStoriesList] = useState<SuccessStory[]>(successStories);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSuccessStories = async () => {
      try {
        setLoading(true);
        const data = await DealsForeverApi.getAllSuccessStories({ PageSize: 100 });
        const items = data && Array.isArray(data.items) ? data.items : [];
        if (items.length > 0) {
          const mappedStories = items.map((item: any) => {
            const matchedMock = successStories.find(
              (ss) => ss.name.toLowerCase() === item.title.toLowerCase()
            );

            const desc = item.description || "";
            const excerpt = desc.length > 150 ? desc.slice(0, 150) + "..." : desc;

            return {
              id: item.id,
              name: item.title,
              title: item.subTitle || matchedMock?.title || "Distributor",
              category: item.categoryName || matchedMock?.category || "General",
              image: item.imagePath
                ? getFullImageUrl(item.imagePath)
                : matchedMock?.image ||
                  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
              excerpt: excerpt || matchedMock?.excerpt || "",
              fullStory: desc || matchedMock?.fullStory || "",
              location: item.place || matchedMock?.location || "",
            };
          });
          setStoriesList(mappedStories);
        }
        setError(null);
      } catch (err: any) {
        console.error("Failed to load success stories:", err);
        setError("Failed to fetch success stories. Showing offline stories.");
      } finally {
        setLoading(false);
      }
    };

    fetchSuccessStories();
  }, []);

  const filterCategories = useMemo(() => {
    return ["All", ...Array.from(new Set(storiesList.map((story) => story.category)))];
  }, [storiesList]);

  // Adjust active category if it is no longer present in the dynamic categories list
  useEffect(() => {
    if (!filterCategories.includes(activeCategory)) {
      setActiveCategory("All");
    }
  }, [filterCategories, activeCategory]);

  const filteredStories = useMemo(() => {
    return activeCategory === "All"
      ? storiesList
      : storiesList.filter((story) => story.category === activeCategory);
  }, [storiesList, activeCategory]);

  const openModal = (story: SuccessStory) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  return (
    <div>
      <PageBanner
        title="Success Stories"
        subtitle="Inspiring journeys of our successful distributors"
        breadcrumbs={[{ label: "Success Stories" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
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
              <p className="text-gray-500 font-medium">Loading success stories...</p>
            </div>
          ) : (
            <>
              {/* Category Filters */}
              <div className="flex gap-3 overflow-x-auto pb-1 w-full md:w-auto md:flex-wrap md:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mb-8">
                {filterCategories.map((cat, idx) => (
                  <div
                    key={cat}
                    className={
                      idx === 0
                        ? "sticky left-0 z-10 bg-white pr-3 md:static md:bg-transparent md:pr-0 flex-shrink-0"
                        : "flex-shrink-0"
                    }
                  >
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                        activeCategory === cat
                          ? "bg-[#aa8453] text-white"
                          : "bg-[#faf8f5] text-[#555] hover:bg-[#f0ebe3] hover:text-[#191717]"
                      }`}
                    >
                      {cat}
                    </button>
                  </div>
                ))}
              </div>

              {/* Stories Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredStories.map((story) => (
                  <div
                    key={story.id}
                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-square bg-gray-50">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-bold text-[#191717] text-base mt-1 mb-1 line-clamp-1">
                        {story.name}
                      </h3>
                      <p className="text-xs text-[#888] mb-3">{story.title}</p>
                      <p className="text-sm text-[#555] leading-relaxed line-clamp-3 mb-4 flex-1">
                        {story.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <p className="text-xs text-[#aa8453] max-w-[120px] truncate">{story.location}</p>
                        <button
                          onClick={() => openModal(story)}
                          className="text-sm font-medium text-[#aa8453] hover:text-[#8f6d42] transition-colors underline-offset-4 hover:underline"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {filteredStories.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-[#888]">
                    No success stories found in this category.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-scale-in">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-[#555] hover:bg-[#aa8453] hover:text-white transition-colors shadow-md"
            >
              <span className="text-lg font-semibold">&times;</span>
            </button>

            {/* Image Header */}
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-50">
              <img
                src={selectedStory.image}
                alt={selectedStory.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191717] via-[#191717]/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="font-bold text-2xl mt-3">
                  {selectedStory.name}
                </h3>
                <p className="text-white/80 mt-1 text-sm">
                  {selectedStory.title} | {selectedStory.location}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[40vh]">
              <p className="text-[#555] leading-relaxed text-sm whitespace-pre-line">
                {selectedStory.fullStory}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
