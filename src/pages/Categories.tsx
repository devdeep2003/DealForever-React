import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { DealsForeverApi } from "../services/api";

const offlineCategories = [
  {
    name: "Health & Wellness",
    description: "Premium health supplements, immunity boosters, and wellness products crafted with natural ingredients.",
    image: "https://images.pexels.com/photos/4040752/pexels-photo-4040752.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 24,
    color: "#2ecc71",
  },
  {
    name: "Personal Care",
    description: "Gentle, effective personal care products made from organic and herbal ingredients for daily use.",
    image: "https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 18,
    color: "#3498db",
  },
  {
    name: "Home Care",
    description: "Eco-friendly cleaning and home care solutions that are tough on dirt but gentle on the environment.",
    image: "https://images.pexels.com/photos/4040754/pexels-photo-4040754.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 12,
    color: "#e67e22",
  },
  {
    name: "Digital Products",
    description: "Premium wellness solutions, digital learning resources, and software tools for daily lifestyle enhancement.",
    image: "https://images.pexels.com/photos/4041393/pexels-photo-4041393.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 8,
    color: "#9b59b6",
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

export default function Categories() {
  const [categoriesList, setCategoriesList] = useState<any[]>(offlineCategories);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoriesAndProductCount = async () => {
      try {
        setLoading(true);
        const [categoriesRes, productsRes] = await Promise.all([
          DealsForeverApi.getAllCategories(),
          DealsForeverApi.getAllProducts(),
        ]);

        const catItems = categoriesRes && Array.isArray(categoriesRes.items) ? categoriesRes.items : [];
        const prodItems = Array.isArray(productsRes) ? productsRes : [];

        if (catItems.length > 0) {
          const activeCats = catItems.filter((cat: any) => cat.isActive !== false);
          const colors = ["#2ecc71", "#3498db", "#e67e22", "#9b59b6", "#e74c3c", "#1abc9c"];

          const mappedCats = activeCats.map((cat: any, idx: number) => {
            const productCount = prodItems.filter(
              (p: any) => p.categoryId === cat.categoryId && p.isActive !== false
            ).length;

            // Find matching offline image or fallback placeholder
            const matchedOffline = offlineCategories.find(
              (oc) => oc.name.toLowerCase() === cat.categoryName.toLowerCase()
            );

            return {
              name: cat.categoryName,
              description: cat.description || matchedOffline?.description || "",
              image: cat.imagePath
                ? getFullImageUrl(cat.imagePath)
                : matchedOffline?.image ||
                  "https://images.pexels.com/photos/4040752/pexels-photo-4040752.jpeg?auto=compress&cs=tinysrgb&w=600",
              count: productCount || matchedOffline?.count || 0,
              color: matchedOffline?.color || colors[idx % colors.length],
            };
          });

          setCategoriesList(mappedCats);
        }
        setError(null);
      } catch (err: any) {
        console.error("Failed to load categories/products count:", err);
        setError("Failed to fetch latest category data. Showing offline category list.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoriesAndProductCount();
  }, []);

  return (
    <div>
      <PageBanner
        title="Categories"
        subtitle="Explore our wide range of product categories"
        breadcrumbs={[{ label: "Categories" }]}
      />

      <section className="section-padding bg-white">
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
              <p className="text-gray-500 font-medium">Loading categories...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {categoriesList.map((cat, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl overflow-hidden shadow-lg card-hover h-[360px] sm:h-[320px] md:h-[300px]"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191717] via-[#191717]/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 pt-12 sm:pt-10 md:pt-6 flex flex-col justify-end min-h-[210px] sm:min-h-[190px] md:min-h-0">
                    <div
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 w-fit"
                      style={{ backgroundColor: cat.color }}
                    >
                      {cat.count} Products
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{cat.name}</h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-2">{cat.description}</p>
                    <div className="flex items-center justify-end mt-auto">
                      <Link
                        to={`/categories/${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-flex items-center gap-2 text-[#aa8453] font-semibold text-sm hover:underline"
                      >
                        View Products <ArrowRight size={16} />
                      </Link>
                    </div>
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