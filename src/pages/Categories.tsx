import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const categories = [
  {
    name: 'Health & Wellness',
    description: 'Premium health supplements, immunity boosters, and wellness products crafted with natural ingredients.',
    image: 'https://images.pexels.com/photos/4040752/pexels-photo-4040752.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 24,
    color: '#2ecc71',
  },
  {
    name: 'Personal Care',
    description: 'Gentle, effective personal care products made from organic and herbal ingredients for daily use.',
    image: 'https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 18,
    color: '#3498db',
  },
  {
    name: 'Home Care',
    description: 'Eco-friendly cleaning and home care solutions that are tough on dirt but gentle on the environment.',
    image: 'https://images.pexels.com/photos/4040754/pexels-photo-4040754.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 12,
    color: '#e67e22',
  },
  {
    name: 'Digital Products',
    description: 'Comprehensive digital learning packages and software tools for personal and professional growth.',
    image: 'https://images.pexels.com/photos/4041393/pexels-photo-4041393.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 8,
    color: '#9b59b6',
  },
];

export default function Categories() {
  return (
    <div>
      <PageBanner
        title="Categories"
        subtitle="Explore our wide range of product categories"
        breadcrumbs={[{ label: 'Categories' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden shadow-lg card-hover h-[300px]"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191717] via-[#191717]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3"
                    style={{ backgroundColor: cat.color }}
                  >
                    {cat.count} Products
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{cat.name}</h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">{cat.description}</p>
                  <div className="flex items-center justify-end">
                    <Link
                      to={`/categories/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center gap-2 text-[#aa8453] font-semibold text-sm hover:underline"
                    >
                      View Products <ArrowRight size={16} />
                    </Link>
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