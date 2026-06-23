import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, ArrowLeft } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { products } from '../data/siteData';

const categoryMeta: Record<string, { title: string; subtitle: string }> = {
  'health-&-wellness': {
    title: 'Health & Wellness',
    subtitle: 'Premium health supplements, immunity boosters, and wellness products crafted with natural ingredients.',
  },
  'personal-care': {
    title: 'Personal Care',
    subtitle: 'Gentle, effective personal care products made from organic and herbal ingredients for daily use.',
  },
  'home-care': {
    title: 'Home Care',
    subtitle: 'Eco-friendly cleaning and home care solutions that are tough on dirt but gentle on the environment.',
  },
  'digital-products': {
    title: 'Digital Products',
    subtitle: 'Comprehensive digital learning packages and software tools for personal and professional growth.',
  },
};

export default function CategoryDetail() {
  const { slug = '' } = useParams();
  const [search, setSearch] = useState('');

  const meta = categoryMeta[slug] ?? { title: 'Category', subtitle: 'Explore our products' };

  const filtered = products.filter((p) => {
    const matchCat = p.category?.toLowerCase().replace(/\s+/g, '-') === slug;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div>
      <PageBanner
        title={meta.title}
        subtitle={meta.subtitle}
        breadcrumbs={[{ label: 'Categories', path: '/categories' }, { label: meta.title }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 text-[#aa8453] font-semibold text-sm hover:underline"
            >
              <ArrowLeft size={16} /> Back to Categories
            </Link>
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

          {/* Products Grid with Flip Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <div key={product.id} className="flip-card h-[440px]">
                <div className="flip-card-inner relative w-full h-full">
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 bg-white rounded-xl shadow-md overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-64   object-cover" />
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
                  <div className="flip-card-back absolute inset-0 bg-[#aa8453] rounded-xl shadow-md p-6 flex flex-col justify-center text-white">
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