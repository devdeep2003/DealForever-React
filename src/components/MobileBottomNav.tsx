import { Link, useLocation } from 'react-router-dom';
import { Home, Grid3x3 as Grid3X3, Layers, ShoppingBag, User } from 'lucide-react';
import { useState } from 'react';

const bottomNavItems = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'Brand', path: '/brands', icon: Layers },
  { label: 'Categories', path: '/categories', icon: Grid3X3 },
  { label: 'Shopping', path: '/shop', icon: ShoppingBag },
  { label: 'My Account', path: '#', icon: User },
];

const brandList = ['Assura', 'Athulya', 'Orianna'];
const categoryList = ['Health & Wellness', 'Personal Care', 'Home Care', 'Digital Products'];

export default function MobileBottomNav() {
  const location = useLocation();
  const [activeSheet, setActiveSheet] = useState<'brand' | 'category' | null>(null);

  const handleNavClick = (item: typeof bottomNavItems[0]) => {
    if (item.label === 'Brand') {
      setActiveSheet(activeSheet === 'brand' ? null : 'brand');
    } else if (item.label === 'Categories') {
      setActiveSheet(activeSheet === 'category' ? null : 'category');
    } else if (item.label === 'My Account') {
      // handled by auth modal in header
    } else {
      setActiveSheet(null);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Bottom Nav - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30 lg:hidden">
        <div className="flex items-center justify-around py-2">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const active = item.path !== '#' && isActive(item.path);
            return (
              <Link
                key={item.label}
                to={item.path === '#' ? '#' : item.path}
                onClick={(e) => {
                  if (item.path === '#') {
                    e.preventDefault();
                    handleNavClick(item);
                  } else if (item.label === 'Brand' || item.label === 'Categories') {
                    handleNavClick(item);
                  }
                }}
                className={`flex flex-col items-center gap-1 px-3 py-1 transition-colors ${
                  active ? 'text-[#aa8453]' : 'text-[#888]'
                }`}
              >
                <Icon size={20} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom Sheet Overlay */}
      {activeSheet && (
        <div className="bottom-sheet-overlay lg:hidden" onClick={() => setActiveSheet(null)} />
      )}

      {/* Brand Bottom Sheet */}
      <div className={`bottom-sheet lg:hidden max-h-[60vh] ${activeSheet === 'brand' ? 'open' : ''}`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#191717]">Our Brands</h3>
            <button onClick={() => setActiveSheet(null)} className="text-[#888] hover:text-[#191717]">
              &#10005;
            </button>
          </div>
          <div className="space-y-2">
            {brandList.map((brand) => (
              <Link
                key={brand}
                to={`/brands?brand=${brand.toLowerCase()}`}
                onClick={() => setActiveSheet(null)}
                className="block px-4 py-3 bg-[#faf8f5] rounded-lg text-sm font-medium text-[#555] hover:text-[#aa8453] hover:bg-[#f5f3ef] transition-colors"
              >
                {brand}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Category Bottom Sheet */}
      <div className={`bottom-sheet lg:hidden max-h-[60vh] ${activeSheet === 'category' ? 'open' : ''}`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#191717]">Categories</h3>
            <button onClick={() => setActiveSheet(null)} className="text-[#888] hover:text-[#191717]">
              &#10005;
            </button>
          </div>
          <div className="space-y-2">
            {categoryList.map((cat) => (
              <Link
                key={cat}
                to={`/categories?cat=${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveSheet(null)}
                className="block px-4 py-3 bg-[#faf8f5] rounded-lg text-sm font-medium text-[#555] hover:text-[#aa8453] hover:bg-[#f5f3ef] transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
