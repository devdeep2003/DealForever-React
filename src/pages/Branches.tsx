import { useState } from 'react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { branches } from '../data/siteData';

const states = ['All', ...new Set(branches.map((b) => b.state))];
const districts = ['All', ...new Set(branches.map((b) => b.district))];
const categories = ['All', ...new Set(branches.map((b) => b.category))];

export default function Branches() {
  const [stateFilter, setStateFilter] = useState('All');
  const [districtFilter, setDistrictFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filtered = branches.filter((b) => {
    const matchState = stateFilter === 'All' || b.state === stateFilter;
    const matchDistrict = districtFilter === 'All' || b.district === districtFilter;
    const matchCategory = categoryFilter === 'All' || b.category === categoryFilter;
    return matchState && matchDistrict && matchCategory;
  });

  return (
    <div>
      <PageBanner
        title="Our Branches"
        subtitle="Find a Deal Forever branch near you"
        breadcrumbs={[{ label: 'Branches' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 p-4 bg-[#faf8f5] rounded-xl">
            <div>
              <label className="block text-xs font-semibold text-[#555] mb-1">State</label>
              <select
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none bg-white"
              >
                {states.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#555] mb-1">District</label>
              <select
                value={districtFilter}
                onChange={(e) => setDistrictFilter(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none bg-white"
              >
                {districts.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#555] mb-1">Category</label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none bg-white"
              >
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {/* Branches Table */}
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-[#191717] text-white">
                  <th className="text-left px-6 py-4 text-sm font-semibold">Branch</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">State</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">District</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">Category</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">Address</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">Contact</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">Map</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((branch, i) => (
                  <tr key={branch.id} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-[#faf8f5]'} hover:bg-[#aa8453]/5 transition-colors`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-[#aa8453]" />
                        <span className="font-semibold text-sm text-[#191717]">{branch.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#555]">{branch.state}</td>
                    <td className="px-6 py-4 text-sm text-[#555]">{branch.district}</td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#aa8453]/10 text-[#aa8453]">
                        {branch.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#555]">{branch.address}</td>
                    <td className="px-6 py-4">
                      <a href={`tel:${branch.phone}`} className="flex items-center gap-1 text-sm text-[#aa8453] hover:underline">
                        <Phone size={14} /> {branch.phone}
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address + ', ' + branch.district + ', ' + branch.state)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-[#aa8453] hover:underline"
                      >
                        <ExternalLink size={14} /> View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#888]">No branches found matching your filters.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}