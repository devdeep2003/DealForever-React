import { useState, useEffect } from 'react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { branches } from '../data/siteData';
import { DealsForeverApi } from '../services/api';

const formatName = (name: string) => {
  if (!name) return '';
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export default function Branches() {
  const [branchesList, setBranchesList] = useState<any[]>(branches);
  const [statesList, setStatesList] = useState<any[]>([]);
  const [districtsList, setDistrictsList] = useState<any[]>([]);
  const [categoriesList, setCategoriesList] = useState<any[]>([]);

  const [stateFilter, setStateFilter] = useState('All');
  const [districtFilter, setDistrictFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const [branchesRes, statesRes, districtsRes, categoriesRes] = await Promise.all([
          DealsForeverApi.getAllBranches(),
          DealsForeverApi.getAllStates(),
          DealsForeverApi.getAllDistricts(),
          DealsForeverApi.getAllBranchCategories(),
        ]);

        if (Array.isArray(branchesRes) && branchesRes.length > 0) {
          const activeBranches = branchesRes.filter((b: any) => b.isActive !== false);
          setBranchesList(activeBranches);
        }
        if (Array.isArray(statesRes)) {
          setStatesList(statesRes);
        }
        if (Array.isArray(districtsRes)) {
          setDistrictsList(districtsRes);
        }
        if (Array.isArray(categoriesRes)) {
          setCategoriesList(categoriesRes);
        }
        setError(null);
      } catch (err: any) {
        console.error('Failed to fetch branch data:', err);
        setError('Failed to fetch latest branch data. Showing offline branches.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const handleStateChange = (val: string) => {
    setStateFilter(val);
    setDistrictFilter('All');
  };

  const states = statesList.length > 0
    ? ['All', ...Array.from(new Set(statesList.map((s: any) => s.stateName)))]
    : ['All', ...Array.from(new Set(branchesList.map((b: any) => b.state)))];

  const filteredDistricts = stateFilter === 'All'
    ? districtsList
    : districtsList.filter(
        (d: any) => d.stateName?.toLowerCase().trim() === stateFilter.toLowerCase().trim()
      );

  const districts = districtsList.length > 0
    ? ['All', ...Array.from(new Set(filteredDistricts.map((d: any) => d.districtName)))]
    : ['All', ...Array.from(new Set(
        branchesList
          .filter((b: any) => stateFilter === 'All' || b.state?.toLowerCase().trim() === stateFilter.toLowerCase().trim())
          .map((b: any) => b.district)
      ))];

  const categories = categoriesList.length > 0
    ? ['All', ...Array.from(new Set(categoriesList.map((c: any) => c.categoryName)))]
    : ['All', ...Array.from(new Set(branchesList.map((b: any) => b.category)))];

  const filtered = branchesList.filter((b: any) => {
    const branchState = b.stateName || b.state || '';
    const branchDistrict = b.districtName || b.district || '';
    const branchCategory = b.categoryName || b.category || '';

    const matchState =
      stateFilter === 'All' ||
      branchState.toLowerCase().trim() === stateFilter.toLowerCase().trim();
    const matchDistrict =
      districtFilter === 'All' ||
      branchDistrict.toLowerCase().trim() === districtFilter.toLowerCase().trim();
    const matchCategory =
      categoryFilter === 'All' ||
      branchCategory.toLowerCase().trim() === categoryFilter.toLowerCase().trim();

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

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 p-4 bg-[#faf8f5] rounded-xl">
            <div>
              <label className="block text-xs font-semibold text-[#555] mb-1">State</label>
              <select
                value={stateFilter}
                onChange={(e) => handleStateChange(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none bg-white min-w-[150px]"
              >
                {states.map((s) => (
                  <option key={s} value={s}>
                    {formatName(s)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#555] mb-1">District</label>
              <select
                value={districtFilter}
                onChange={(e) => setDistrictFilter(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none bg-white min-w-[150px]"
              >
                {districts.map((d) => (
                  <option key={d} value={d}>
                    {formatName(d)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#555] mb-1">Category</label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none bg-white min-w-[150px]"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {formatName(c)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-[#aa8453] border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-gray-500 font-medium">Loading branches...</p>
            </div>
          ) : (
            <>
              {/* Branches Table */}
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#191717] text-white">
                      <th className="text-left px-6 py-4 text-sm font-semibold whitespace-nowrap">Branch</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold whitespace-nowrap">State</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold whitespace-nowrap">District</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold whitespace-nowrap">Category</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold whitespace-nowrap">Address</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold whitespace-nowrap">Contact</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold whitespace-nowrap">Map</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((branch, i) => {
                      const branchName = branch.branchName || branch.name || '';
                      const stateVal = branch.stateName || branch.state || '';
                      const districtVal = branch.districtName || branch.district || '';
                      const categoryVal = branch.categoryName || branch.category || '';
                      const contactVal = branch.contactNo || branch.phone || '';
                      const addressVal = branch.address || '';
                      const mapUrl = branch.googleMapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${addressVal}, ${districtVal}, ${stateVal}`)}`;

                      return (
                        <tr key={branch.branchId || branch.id || i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-[#faf8f5]'} hover:bg-[#aa8453]/5 transition-colors`}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <MapPin size={16} className="text-[#aa8453]" />
                              <span className="font-semibold text-sm text-[#191717]">{branchName}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-[#555] whitespace-nowrap">{formatName(stateVal)}</td>
                          <td className="px-6 py-4 text-sm text-[#555] whitespace-nowrap">{formatName(districtVal)}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#aa8453]/10 text-[#aa8453]">
                              {categoryVal}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-[#555] whitespace-wrap">{addressVal}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {contactVal ? (
                              <a href={`tel:${contactVal}`} className="flex items-center gap-1 text-sm text-[#aa8453] hover:underline">
                                <Phone size={14} /> {contactVal}
                              </a>
                            ) : (
                              <span className="text-sm text-gray-400">N/A</span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <a href={mapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm text-[#aa8453] hover:underline"
                            >
                              <ExternalLink size={14} /> View
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-[#888]">No branches found matching your filters.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}