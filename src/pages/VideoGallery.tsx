import { useState, useEffect } from 'react';
import { Youtube } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { videoItems } from '../data/siteData';
import { DealsForeverApi } from '../services/api';

const getYoutubeId = (linkOrId: string) => {
  if (!linkOrId) return '';
  if (!linkOrId.includes('/') && !linkOrId.includes('.')) return linkOrId;

  try {
    const url = new URL(linkOrId);
    if (url.hostname.includes('youtube.com')) {
      return url.searchParams.get('v') || '';
    } else if (url.hostname.includes('youtu.be')) {
      return url.pathname.replace(/^\/+/, '');
    }
  } catch (e) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = linkOrId.match(regExp);
    if (match && match[2].length === 11) {
      return match[2];
    }
  }
  return linkOrId;
};

export default function VideoGallery() {
  const [videos, setVideos] = useState<any[]>(videoItems);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const data = await DealsForeverApi.getAllVideoGallery();
        if (Array.isArray(data) && data.length > 0) {
          const activeVideos = data.filter((v: any) => v.isActive !== false);
          setVideos(activeVideos);
        }
        setError(null);
      } catch (err: any) {
        console.error('Failed to load videos:', err);
        setError('Failed to fetch the latest videos. Showing offline videos.');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

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

          {error && (
            <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl flex items-center justify-between text-amber-800 text-sm max-w-4xl mx-auto">
              <span>{error}</span>
              <button
                onClick={() => setError(null)}
                className="text-amber-500 hover:text-amber-700 font-semibold"
              >
                Dismiss
              </button>
            </div>
          )}

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-[#aa8453] border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-gray-500 font-medium">Loading videos...</p>
            </div>
          ) : (
            /* Videos Grid */
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {videos.map((video, i) => {
                const youtubeId = getYoutubeId(video.youtubeLink || video.youtubeId);
                const categoryText = video.category || video.title || '';
                const titleText = video.subTitle || video.title || '';

                return (
                  <div
                    key={video.videoGalleryId || video.id || i}
                    className="rounded-xl overflow-hidden border border-gray-100 shadow-sm"
                  >
                    <div className="aspect-video w-full">
                      {youtubeId ? (
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${youtubeId}`}
                          title={titleText}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                          No Video Link
                        </div>
                      )}
                    </div>

                    <div className="p-3">
                      <p className="text-xs text-[#aa8453] font-semibold mb-1">
                        {categoryText}
                      </p>

                      <h3 className="font-semibold text-[#191717] text-sm line-clamp-2">
                        {titleText}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>
    </div>
  );
}