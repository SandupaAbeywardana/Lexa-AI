import { projectData } from "@/data/projectData";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-primary text-white pt-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="pb-20">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {projectData.name}
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                {projectData.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/domain"
                  className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100"
                >
                  Learn More
                </a>
                <a
                  href="/contact"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:bg-opacity-10"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/lexaRobo.png"
                alt="Hero Image"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "📄",
                title: "Automated Data Extraction",
                description:
                  "Extract and structure information from legal documents",
              },
              {
                icon: "💬",
                title: "Dynamic Questioning",
                description: "AI-powered adaptive questioning support system",
              },
              {
                icon: "😊",
                title: "Behavioral Analysis",
                description: "Multimodal stress and credibility assessment",
              },
              {
                icon: "🔗",
                title: "Incident Correlation",
                description: "Pattern identification and case linking",
              },
            ].map((feature, index) => (
              <div key={index} className="card p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "Team Members", value: projectData.team.length },
              { label: "Milestones", value: projectData.milestones.length },
              { label: "Documents", value: projectData.documents.length },
              {
                label: "Presentations",
                value: projectData.presentations.length,
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-700 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Explore Our Work</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our research domain, view project milestones, access
            documentation, and learn about our team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/domain"
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90"
            >
              Domain & Research
            </a>
            <a
              href="/milestones"
              className="px-6 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-opacity-90"
            >
              Milestones
            </a>
            <a
              href="/about"
              className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-opacity-90"
            >
              About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
