import { useState } from 'react';
import { Search } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { products } from '../data/siteData';

const categories = ['All', ...new Set(products.map((p) => p.category))];
// const brands = ['All', ...new Set(products.map((p) => p.brand))];

export default function Brands() {
  const [activeCategory, setActiveCategory] = useState('All');
  // const [activeBrand, setActiveBrand] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    // const matchBrand = activeBrand === 'All' || p.brand === activeBrand;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div>
      <PageBanner
        title="Our Brands"
        subtitle="Discover quality products from Deal Forever"
        breadcrumbs={[{ label: 'Brands' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-[#aa8453] text-white'
                      : 'bg-[#faf8f5] text-[#555] hover:bg-[#aa8453]/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-auto">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888]" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors w-full md:w-64"
              />
            </div>
          </div>

          {/* Brand Filter */}
          {/* <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-sm font-medium text-[#555] mr-2">Brand:</span>
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setActiveBrand(brand)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  activeBrand === brand
                    ? 'bg-[#191717] text-white'
                    : 'bg-gray-100 text-[#555] hover:bg-gray-200'
                }`}
              >
                {brand}
              </button>
            ))}
          </div> */}

          {/* Products Grid with Flip Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <div key={product.id} className="flip-card h-[400px] sm:h-[440px]">
                <div className="flip-card-inner relative w-full h-full">
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 bg-white rounded-xl shadow-md overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-48 sm:h-56 md:h-[300px] object-cover" />
                    <div className="p-4 flex flex-col gap-1">
                      {/* <p className="text-xs text-[#aa8453] font-semibold">{product.brand}</p> */}
                      <h3 className="font-semibold text-[#aa8453] text-sm line-clamp-2">{product.name}</h3>
                      <p className="text-xs text-[#888]">{product.category}</p>
                      <div className="flex-col items-center justify-between mt-2">
                        <p className="text-sm font-semibold text-[#191717]">MRP ₹ {product.price}.00 incl. of all taxes</p>
                        <p className="text-xs text-[#888] bg-gray-100 px-2 py-0.5 rounded-full w-fit">Net Content : {product.netContent}</p>
                      </div>
                    </div>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 bg-[#aa8453] rounded-xl shadow-md p-6 flex flex-col text-white">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-white/70">{product.brand}</p>
                    <h3 className="font-bold text-lg mb-3">{product.name}</h3>
                    <p className="text-sm text-white/80 mb-4 leading-relaxed">{product.description}</p>
                    {/* <div className="flex items-center justify-between mt-auto">
                      <div>
                        <p className="text-xs text-white/60">BV: {product.bv}</p>
                        <p className="text-lg font-bold">Rs. {product.price}</p>
                      </div>
                      <button className="bg-white text-[#aa8453] font-semibold text-sm px-4 py-2 rounded-lg hover:bg-white/90 transition-colors">
                        View Details
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#888] text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}