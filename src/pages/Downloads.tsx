import { useState, useEffect } from 'react';
import { Download, FileText } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { downloadItems } from '../data/siteData';
import { DealsForeverApi } from '../services/api';

const getDocType = (path: string) => {
  if (!path) return 'FILE';
  const ext = path.split('.').pop()?.toUpperCase() || 'FILE';
  return ext;
};

const getFullDocUrl = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) return path;

  let baseUrl = import.meta.env.VITE_API_BASE_URL || '';
  if (!baseUrl) {
    baseUrl = 'https://mydealforever.com/api';
  } else {
    baseUrl = baseUrl.replace(/\/+$/, '');
  }
  return `${baseUrl}/${path.replace(/^\/+/, '')}`;
};

export default function Downloads() {
  const [documents, setDocuments] = useState<any[]>(downloadItems);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        setLoading(true);
        const data = await DealsForeverApi.getAllDocuments();
        if (Array.isArray(data) && data.length > 0) {
          const activeDocs = data.filter((d: any) => d.isActive !== false);
          setDocuments(activeDocs);
        }
        setError(null);
      } catch (err: any) {
        console.error('Failed to load documents:', err);
        setError('Failed to fetch the latest documents. Showing offline resources.');
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div>
      <PageBanner
        title="Downloads"
        subtitle="Access important documents and resources"
        breadcrumbs={[{ label: 'Downloads' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          {error && (
            <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl flex items-center justify-between text-amber-800 text-sm">
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
              <p className="text-gray-500 font-medium">Loading documents...</p>
            </div>
          ) : (
            <div className="space-y-3">
              {documents.map((item, i) => {
                const title = item.title || '';
                const docType = item.type || getDocType(item.docFilePath);
                const sizeText = item.size ? ` | ${item.size}` : '';
                const fileUrl = getFullDocUrl(item.docFilePath || item.filePath);

                return (
                  <div key={item.documentId || item.id || i} className="flex items-center justify-between p-4 bg-[#faf8f5] rounded-xl hover:bg-[#f5f3ef] transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#aa8453]/10 flex items-center justify-center">
                        <FileText size={22} className="text-[#aa8453]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#191717] text-sm">{title}</h3>
                        <p className="text-xs text-[#888]">{docType}{sizeText}</p>
                      </div>
                    </div>
                    <a
                      href={fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#aa8453] font-semibold text-sm hover:underline"
                    >
                      <Download size={16} />
                      <span className="hidden sm:inline">Download</span>
                    </a>
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
