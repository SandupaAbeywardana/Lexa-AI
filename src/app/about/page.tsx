import { projectData } from "@/data/projectData";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Meet the team behind the AI-Assisted Criminal Investigation Platform
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Our Team</h2>
            <p className="text-lg text-gray-600">
              A dedicated group of researchers, developers, and designers
              working together to create an innovative platform for modern
              criminal investigations.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectData.team.map((member) => (
              <div
                key={member.id}
                className="card overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Profile Image */}
                <div className="w-full h-48 bg-gradient-primary flex items-center justify-center">
                  <span className="text-5xl">👤</span>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">
                    {member.role}
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <h2 className="section-title">Project Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-gray-700">
                To develop an innovative AI-assisted platform that modernizes
                criminal investigations through automated data processing,
                intelligent questioning support, behavioral analysis, and
                cross-case pattern identification.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-gray-700">
                A future where criminal investigations are faster, more
                transparent, and evidence-driven, with AI supporting human
                investigators while maintaining human oversight and control.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4">Goals</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Improve investigation efficiency by 40%+</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Reduce manual data entry by 80%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Increase cross-case correlations</span>
                </li>
              </ul>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4">Impact</h3>
              <p className="text-gray-700">
                This research aims to set new standards for AI-assisted
                investigations in Sri Lanka and contribute to global best
                practices in law enforcement technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏆",
                title: "Research Excellence",
                desc: "Published findings in peer-reviewed journals",
              },
              {
                icon: "🔬",
                title: "Innovation",
                desc: "Novel multimodal analysis approach",
              },
              {
                icon: "🚀",
                title: "Scalability",
                desc: "Cloud-ready architecture for deployment",
              },
            ].map((achievement, index) => (
              <div key={index} className="text-center card p-6">
                <div className="text-5xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
