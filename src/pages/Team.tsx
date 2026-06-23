import PageBanner from "../components/PageBanner";
import { teamMembers } from "../data/siteData";

export default function () {
  return (
    <div>
      <PageBanner
        title="The Team"
        subtitle="Our Backbone"
        breadcrumbs={[{ label: "Team" }]}
      />

      {/* Team */}
      <section className="section-padding bg-[#faf8f5]">
        <div className="container-custom">
          {/* <div className="text-center mb-12">
            <p className="section-subtitle">Leadership</p>
            <h2 className="section-title">Our Team</h2>
          </div> */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm card-hover group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191717]/60 to-transparent" />
                </div>
                <div className="p-4 text-left">
                  <h3 className="font-bold text-[#191717] text-sm">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#aa8453] font-medium">
                    {member.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
