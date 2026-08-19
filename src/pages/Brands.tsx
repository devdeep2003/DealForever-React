import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { products, siteConfig } from "../data/siteData";
import { DealsForeverApi } from "../services/api";

const brandMeta: Record<string, { title: string; subtitle: string }> = {
  assura: {
    title: "Assura",
    subtitle:
      "Explore the complete Assura range — health, wellness, and digital products built for everyday living.",
  },
  athulya: {
    title: "Athulya",
    subtitle:
      "Discover Athulya's personal and home care essentials, crafted with natural, gentle ingredients.",
  },
  orianna: {
    title: "Orianna",
    subtitle:
      "Shop Orianna's premium personal care and wellness products for a refined everyday routine.",
  },
};

const formatName = (name: string) => {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

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

export default function Brands() {
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const activeBrand = searchParams.get("brand") || "";

  const [productsList, setProductsList] = useState<any[]>(products);
  const [brandsList, setBrandsList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrandsAndProducts = async () => {
      try {
        setLoading(true);
        const [productsRes, brandsRes] = await Promise.all([
          DealsForeverApi.getAllProducts(),
          DealsForeverApi.getAllOurBrands({ PageSize: 100 }),
        ]);

        if (Array.isArray(productsRes) && productsRes.length > 0) {
          const activeProducts = productsRes.filter((p: any) => p.isActive !== false);
          setProductsList(activeProducts);
        }
        if (brandsRes && Array.isArray(brandsRes.items)) {
          setBrandsList(brandsRes.items);
        }
        setError(null);
      } catch (err: any) {
        console.error("Failed to load products/brands:", err);
        setError("Failed to fetch the latest products. Showing offline product list.");
      } finally {
        setLoading(false);
      }
    };

    fetchBrandsAndProducts();
  }, []);

  const setActiveBrand = (slug: string) => {
    if (slug === "") {
      setSearchParams({});
    } else {
      setSearchParams({ brand: slug });
    }
  };

  const brandTabs = [
    { label: "All", slug: "" },
    ...(brandsList.length > 0
      ? brandsList.map((b: any) => ({
          label: b.ourBrandName,
          slug: b.ourBrandName.toLowerCase().trim(),
        }))
      : siteConfig.brands.map((brand) => ({
          label: brand,
          slug: brand.toLowerCase(),
        }))),
  ];

  const currentBrandName = brandTabs.find((tab) => tab.slug === activeBrand.toLowerCase())?.label || activeBrand;
  const meta = brandMeta[activeBrand.toLowerCase()] ?? {
    title: formatName(currentBrandName) || "All Brands",
    subtitle: activeBrand
      ? `Explore our complete range of products for ${formatName(currentBrandName)}`
      : "Explore our complete range of products across every brand",
  };

  const filtered = productsList.filter((p) => {
    const productBrand = p.ourBrandName || p.brand || "";
    const matchBrand = activeBrand === "" || productBrand.toLowerCase().trim() === activeBrand.toLowerCase().trim();

    const productName = p.productName || p.name || "";
    const matchSearch = productName.toLowerCase().includes(search.toLowerCase());

    return matchBrand && matchSearch;
  });

  return (
    <div>
      <PageBanner
        title={meta.title}
        subtitle={meta.subtitle}
        breadcrumbs={[{ label: "Brands", path: "/brands" }, { label: meta.title }]}
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

          {/* Filters */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            {/* Horizontal scrollable filter tabs on mobile, with "All" pinned while scrolling */}
            <div className="flex gap-3 overflow-x-auto pb-1 w-full md:w-auto md:flex-wrap md:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {brandTabs.map((tab, idx) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveBrand(tab.slug)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap flex-shrink-0 ${
                    idx === 0 ? "sticky left-0 z-10 md:static" : ""
                  } ${
                    activeBrand.toLowerCase() === tab.slug
                      ? "bg-[#aa8453] text-white"
                      : "bg-[#faf8f5] text-[#555] hover:bg-[#f0e9df]"
                  }`}
                >
                  {formatName(tab.label)}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-auto">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888]"
              />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors w-full md:w-64"
              />
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-[#aa8453] border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-gray-500 font-medium">Loading products...</p>
            </div>
          ) : (
            <>
              {/* Products Grid with Flip Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
                {filtered.map((product, i) => {
                  const idVal = product.productId || product.id || i;
                  const nameVal = product.productName || product.name || "";
                  const categoryVal = product.categoryName || product.category || "";
                  const brandVal = product.ourBrandName || product.brand || "";
                  const netContentVal = product.netcontent || product.netContent || "";
                  const descVal = product.description || "";
                  const imgUrl = product.imagePath
                    ? getFullImageUrl(product.imagePath)
                    : product.image ||
                      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400";

                  return (
                    <div key={idVal} className="flip-card h-[320px] xs:h-[360px] sm:h-[420px] md:h-[460px] lg:h-[500px] xl:h-[520px]">
                      <div className="flip-card-inner relative w-full h-full">
                        {/* Front */}
                        <div className="flip-card-front absolute inset-0 bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                          <div className="w-full h-40 xs:h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden bg-gray-50 flex items-center justify-center">
                            <img
                              src={imgUrl}
                              alt={nameVal}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                          <div className="p-3 sm:p-4 pt-4 sm:pt-6 md:pt-8 flex flex-col gap-1">
                            <h3 className="font-semibold text-[#aa8453] text-xs sm:text-sm line-clamp-2">
                              {nameVal}
                            </h3>
                            <p className="text-xs text-[#888]">{formatName(categoryVal)}</p>
                            <div className="flex-col items-center justify-between mt-1">
                              <p className="text-xs sm:text-sm font-semibold text-[#191717]">
                                MRP ₹ {product.price}.00 incl. of all taxes
                              </p>
                              <p className="text-xs text-[#888] bg-gray-100 px-2 py-0.5 rounded-full w-fit">
                                Net Content : {netContentVal}
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Back */}
                        <div className="flip-card-back absolute inset-0 bg-[#aa8453] rounded-xl shadow-md p-4 sm:p-6 flex flex-col text-white">
                          <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-white/70">
                            {formatName(brandVal)}
                          </p>
                          <h3 className="font-bold text-base sm:text-lg mb-3">{nameVal}</h3>
                          <p className="text-sm text-white/80 mb-4 leading-relaxed line-clamp-6">
                            {descVal}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-[#888] text-lg">
                    No products found matching your criteria.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}