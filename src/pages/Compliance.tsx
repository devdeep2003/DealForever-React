import { Download, FileText } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const complianceDocs = [
  { id: 1, title: 'GST Registration Certificate', type: 'PDF', size: '0.8 MB' },
  { id: 2, title: 'Company Registration Certificate', type: 'PDF', size: '1.2 MB' },
  { id: 3, title: 'PAN Card - Deal Forever Enterprises LLP', type: 'PDF', size: '0.5 MB' },
  { id: 4, title: 'Direct Selling License', type: 'PDF', size: '0.9 MB' },
  { id: 5, title: 'ISO Certification', type: 'PDF', size: '0.7 MB' },
  { id: 6, title: 'FSSAI License', type: 'PDF', size: '0.6 MB' },
];

export default function Compliance() {
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
          <div className="space-y-3">
            {complianceDocs.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 bg-[#faf8f5] rounded-xl hover:bg-[#f5f3ef] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#aa8453]/10 flex items-center justify-center">
                    <FileText size={22} className="text-[#aa8453]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#191717] text-sm">{doc.title}</h3>
                    <p className="text-xs text-[#888]">{doc.type} | {doc.size}</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-[#aa8453] font-semibold text-sm hover:underline">
                  <Download size={16} />
                  <span className="hidden sm:inline">Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
