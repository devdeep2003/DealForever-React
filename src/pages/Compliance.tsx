import { useState, useEffect } from 'react';
import { Download, FileText } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { DealsForeverApi } from '../services/api';

const complianceDocsFallback = [
  { id: 1, title: 'GST Registration Certificate', type: 'PDF', size: '0.8 MB' },
  { id: 2, title: 'Company Registration Certificate', type: 'PDF', size: '1.2 MB' },
  { id: 3, title: 'PAN Card - Deal Forever Enterprises LLP', type: 'PDF', size: '0.5 MB' },
  { id: 4, title: 'Direct Selling License', type: 'PDF', size: '0.9 MB' },
  { id: 5, title: 'ISO Certification', type: 'PDF', size: '0.7 MB' },
  { id: 6, title: 'FSSAI License', type: 'PDF', size: '0.6 MB' },
];

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

export default function Compliance() {
  const [documents, setDocuments] = useState<any[]>(complianceDocsFallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComplianceDocs = async () => {
      try {
        setLoading(true);
        const data = await DealsForeverApi.getAllCompliance();
        if (Array.isArray(data) && data.length > 0) {
          const activeDocs = data.filter((d: any) => d.isActive !== false);
          setDocuments(activeDocs);
        }
        setError(null);
      } catch (err: any) {
        console.error('Failed to load compliance documents:', err);
        setError('Failed to fetch compliance documents. Showing offline resources.');
      } finally {
        setLoading(false);
      }
    };

    fetchComplianceDocs();
  }, []);

  return (
    <div>
      <PageBanner
        title="Compliance Documents"
        subtitle="Official registration and compliance certificates"
        breadcrumbs={[{ label: 'Downloads' }, { label: 'Compliance' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <p className="text-[#555] text-sm mb-8">
            Deal Forever Enterprises LLP operates in full compliance with all applicable laws and regulations.
            Below are our registration and compliance documents for your reference.
          </p>

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
              {documents.map((doc, i) => {
                const title = doc.title || '';
                const docType = doc.type || getDocType(doc.docFilePath);
                const sizeText = doc.size ? ` | ${doc.size}` : '';
                const fileUrl = getFullDocUrl(doc.docFilePath || doc.filePath);

                return (
                  <div key={doc.complianceId || doc.id || i} className="flex items-center justify-between p-4 bg-[#faf8f5] rounded-xl hover:bg-[#f5f3ef] transition-colors">
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
