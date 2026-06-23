import { Youtube } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { videoItems } from '../data/siteData';

export default function VideoGallery() {
  return (
    <div>
      <PageBanner
        title="Video Gallery"
        subtitle="Watch videos from Deal Forever"
        breadcrumbs={[{ label: 'Video Gallery' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">

          {/* Subscribe Section */}
          <div className="text-center mb-10">
            <p className="text-[#555] text-sm mb-4">
              To watch more videos, subscribe to our Official YouTube Channel
            </p>

            <a
              href="https://www.youtube.com/@dealforever"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors px-6 py-3 rounded-lg text-white font-bold text-sm"
            >
              <Youtube size={20} />
              Subscribe
            </a>
          </div>

          {/* Videos Grid */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {videoItems.map((video) => (
              <div
                key={video.id}
                className="rounded-xl overflow-hidden border border-gray-100 shadow-sm"
              >
                <div className="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                <div className="p-3">
                  <p className="text-xs text-[#aa8453] font-semibold mb-1">
                    {video.category}
                  </p>

                  <h3 className="font-semibold text-[#191717] text-sm line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}