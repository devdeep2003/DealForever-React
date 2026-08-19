import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; path?: string }[];
}

export default function PageBanner({ title, subtitle, breadcrumbs }: PageBannerProps) {
  const bannerUrl = (import.meta.env.VITE_BASE_URL || '') + '/images/BusinessOpportunity/UPDATED/01%20BANNER%20BUSINESS_OPPORTUNITY.jpg.jpeg';
  return (
    <div className="page-banner">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: `url('${bannerUrl}')` }}
      />
      <div className="relative container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 animate-fade-in-up">{title}</h1>
        {subtitle && <p className="text-white/70 text-lg max-w-2xl mx-auto animate-fade-in-up delay-100">{subtitle}</p>}
        {breadcrumbs && (
          <nav className="flex items-center justify-center gap-2 mt-4 text-sm animate-fade-in-up delay-200">
            <Link to="/" className="text-white/60 hover:text-[#aa8453] transition-colors flex items-center gap-1">
              <Home size={14} /> Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight size={14} className="text-white/40" />
                {crumb.path ? (
                  <Link to={crumb.path} className="text-white/60 hover:text-[#aa8453] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#aa8453] font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}
