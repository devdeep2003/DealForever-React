import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white px-4 py-16 sm:py-24">
      <div className="text-center max-w-md w-full animate-fade-in-up">
        <h1 className="text-8xl sm:text-9xl font-extrabold text-[#aa8453]/20 tracking-wider mb-2 font-serif animate-pulse">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191717] tracking-tight mb-3">
          Page Not Found
        </h2>
        <p className="text-sm sm:text-base text-[#555] mb-8 leading-relaxed">
          The page you're looking for doesn't exist, has been removed, or has been moved to a new URL.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#aa8453] text-white px-8 py-3.5 rounded-full hover:bg-[#191717] transition-all duration-300 font-semibold shadow-md hover:shadow-lg text-sm sm:text-base"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
