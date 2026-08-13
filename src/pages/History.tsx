import PageBanner from '../components/PageBanner';

const milestones = [
  { year: '2020', title: 'Company Founded', description: 'Deal Forever Enterprises LLP was established in Kozhikode, Kerala with a vision to create an ethical direct selling company.' },
  { year: '2021', title: 'First Products Launched', description: 'Launched our initial range of health & wellness products under the Assura brand.' },
  { year: '2022', title: 'Expanded to 3 Brands', description: 'Added Athulya and Orianna brands, expanding our product portfolio to personal care and home care.' },
  { year: '2023', title: 'Branch Expansion', description: 'Opened branch offices across Kerala and expanded operations to Karnataka and Tamil Nadu.' },
  { year: '2024', title: '1000+ Distributors', description: 'Crossed the milestone of 1000 active distributors across South India.' },
  { year: '2025', title: 'National Expansion', description: 'Expanding operations to Maharashtra and other states with enhanced product lines and digital tools.' },
];

export default function History() {
  return (
    <div>
      <PageBanner
        title="Our History"
        subtitle="The journey of Deal Forever"
        breadcrumbs={[{ label: 'About' }, { label: 'History' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#aa8453]/20 md:-translate-x-0.5" />

            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <div key={i} className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full gradient-gold -translate-x-1/2 mt-1 z-10 ring-4 ring-white" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <span className="text-[#aa8453] font-bold text-lg">{milestone.year}</span>
                    <h3 className="font-bold text-[#191717] text-lg mb-1">{milestone.title}</h3>
                    <p className="text-sm text-[#555] leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
