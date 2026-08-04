import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// ── Lazy-loaded pages (route-level code splitting) ──────────────────────────
const Home             = lazy(() => import('./pages/Home'));
const About            = lazy(() => import('./pages/About'));
const Brands           = lazy(() => import('./pages/Brands'));
const Categories       = lazy(() => import('./pages/Categories'));
const Branches         = lazy(() => import('./pages/Branches'));
const BusinessOpportunity = lazy(() => import('./pages/BusinessOpportunity'));
const Contact          = lazy(() => import('./pages/Contact'));
const FAQ              = lazy(() => import('./pages/FAQ'));
const Policy           = lazy(() => import('./pages/Policy'));
const News             = lazy(() => import('./pages/News'));
const Gallery          = lazy(() => import('./pages/Gallery'));
const VideoGallery     = lazy(() => import('./pages/VideoGallery'));
const Downloads        = lazy(() => import('./pages/Downloads'));
const Schedules        = lazy(() => import('./pages/Schedules'));
const Offers           = lazy(() => import('./pages/Offers'));
const Shop             = lazy(() => import('./pages/Shop'));
const Testimonials     = lazy(() => import('./pages/Testimonials'));
const Grievance        = lazy(() => import('./pages/Grievance'));
const History          = lazy(() => import('./pages/History'));
const Compliance       = lazy(() => import('./pages/Compliance'));
const Team             = lazy(() => import('./pages/Team'));
const SuccessStories   = lazy(() => import('./pages/SuccessStories'));
const StartBusiness    = lazy(() => import('./pages/StartABusiness'));
const CategoryDetail   = lazy(() => import('./pages/CategoryDetail'));

// ── Minimal fallback shown while a page chunk loads ─────────────────────────
function PageLoader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <div style={{ width: 40, height: 40, border: '3px solid #aa8453', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/"                      element={<Home />} />
            <Route path="/about"                 element={<About />} />
            <Route path="/history"               element={<History />} />
            <Route path="/team"                  element={<Team />} />
            <Route path="/brands"                element={<Brands />} />
            <Route path="/categories"            element={<Categories />} />
            <Route path="/branches"              element={<Branches />} />
            <Route path="/business-opportunity"  element={<BusinessOpportunity />} />
            <Route path="/contact"               element={<Contact />} />
            <Route path="/success-stories"       element={<SuccessStories />} />
            <Route path="/faq"                   element={<FAQ />} />
            <Route path="/policy/:type"          element={<Policy />} />
            <Route path="/news"                  element={<News />} />
            <Route path="/gallery"               element={<Gallery />} />
            <Route path="/video-gallery"         element={<VideoGallery />} />
            <Route path="/downloads"             element={<Downloads />} />
            <Route path="/compliance"            element={<Compliance />} />
            <Route path="/schedules"             element={<Schedules />} />
            <Route path="/offers"                element={<Offers />} />
            <Route path="/shop"                  element={<Shop />} />
            <Route path="/testimonials"          element={<Testimonials />} />
            <Route path="/grievance"             element={<Grievance />} />
            <Route path="/start-a-business"      element={<StartBusiness />} />
            <Route path="/categories/:slug"      element={<CategoryDetail />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
