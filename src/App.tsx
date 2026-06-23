import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Brands from './pages/Brands';
import Categories from './pages/Categories';
import Branches from './pages/Branches';
import BusinessOpportunity from './pages/BusinessOpportunity';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Policy from './pages/Policy';
import News from './pages/News';
import Gallery from './pages/Gallery';
import VideoGallery from './pages/VideoGallery';
import Downloads from './pages/Downloads';
import Schedules from './pages/Schedules';
import Offers from './pages/Offers';
import Shop from './pages/Shop';
import Testimonials from './pages/Testimonials';
import Grievance from './pages/Grievance';
import History from './pages/History';
import Compliance from './pages/Compliance';
import Team from './pages/Team';
import SuccessStories from './pages/SuccessStories';
import StartBusiness from './pages/StartABusiness';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/team" element={<Team />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/business-opportunity" element={<BusinessOpportunity />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/policy/:type" element={<Policy />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/video-gallery" element={<VideoGallery />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/grievance" element={<Grievance />} />
          <Route path="/start-a-business" element={<StartBusiness/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
