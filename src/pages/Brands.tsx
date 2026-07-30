import { useState } from "react";
import { Search } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { products, siteConfig } from "../data/siteData";

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

const brandTabs = [
  { label: "All", slug: "" },
  ...siteConfig.brands.map((brand) => ({
    label: brand,
    slug: brand.toLowerCase(),
  })),
];

export default function Brands() {
  const [search, setSearch] = useState("");
  const [activeBrand, setActiveBrand] = useState("");

  const meta = brandMeta[activeBrand] ?? {
    title: "All Brands",
    subtitle: "Explore our complete range of products across every brand",
  };

  const filtered = products.filter((p) => {
    const productSlug = p.brand?.toLowerCase();
    const matchBrand = activeBrand === "" || productSlug === activeBrand;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
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
                    activeBrand === tab.slug
                      ? "bg-[#aa8453] text-white"
                      : "bg-[#faf8f5] text-[#555] hover:bg-[#f0e9df]"
                  }`}
                >
                  {tab.label}
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

          {/* Products Grid with Flip Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {filtered.map((product) => (
              <div key={product.id} className="flip-card h-[440px] sm:h-[520px]">
                <div className="flip-card-inner relative w-full h-full">
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="w-full h-56 sm:h-80 md:h-[380px] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-3 sm:p-4 pt-6 sm:pt-8 flex flex-col gap-1">
                      <h3 className="font-semibold text-[#aa8453] text-sm line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#888]">{product.category}</p>
                      <div className="flex-col items-center justify-between mt-2">
                        <p className="text-sm font-semibold text-[#191717]">
                          MRP ₹ {product.price}.00 incl. of all taxes
                        </p>
                        <p className="text-xs text-[#888] bg-gray-100 px-2 py-0.5 rounded-full w-fit">
                          Net Content : {product.netContent}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 bg-[#aa8453] rounded-xl shadow-md p-6 flex flex-col text-white">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-white/70">
                      {product.brand}
                    </p>
                    <h3 className="font-bold text-lg mb-3">{product.name}</h3>
                    <p className="text-sm text-white/80 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#888] text-lg">
                No products found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}