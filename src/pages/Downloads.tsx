import { Download, FileText } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { downloadItems } from '../data/siteData';

export default function Downloads() {
  return (
    <div>
      <PageBanner
        title="Downloads"
        subtitle="Access important documents and resources"
        breadcrumbs={[{ label: 'Downloads' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="space-y-3">
            {downloadItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-[#faf8f5] rounded-xl hover:bg-[#f5f3ef] transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#aa8453]/10 flex items-center justify-center">
                    <FileText size={22} className="text-[#aa8453]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#191717] text-sm">{item.title}</h3>
                    <p className="text-xs text-[#888]">{item.type} | {item.size}</p>
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
