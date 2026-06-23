import { ShoppingCart, Eye } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { products } from '../data/siteData';

export default function Shop() {
  return (
    <div>
      <PageBanner
        title="Shop Products"
        subtitle="Browse and purchase Deal Forever products"
        breadcrumbs={[{ label: 'Shop' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md card-hover group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#aa8453] hover:text-white transition-colors text-[#555]">
                      <ShoppingCart size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#aa8453] hover:text-white transition-colors text-[#555]">
                      <Eye size={18} />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-[#aa8453] font-semibold mb-1">{product.brand}</p>
                  <h3 className="font-bold text-[#191717] text-sm line-clamp-2 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-[#191717]">Rs. {product.price}</p>
                    <p className="text-xs text-[#888]">BV: {product.bv}</p>
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
