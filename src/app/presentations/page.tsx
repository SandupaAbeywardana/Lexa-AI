import { projectData } from "@/data/projectData";

export default function Presentations() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Presentations</h1>
          <p className="text-lg text-gray-600">
            Project presentations and slide decks
          </p>
        </div>
      </section>

      {/* Presentations Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectData.presentations.map((presentation) => (
              <div
                key={presentation.id}
                className="card overflow-hidden hover:shadow-2xl transition-shadow"
              >
                {/* Thumbnail */}
                <div className="bg-gradient-primary h-48 flex items-center justify-center">
                  <span className="text-6xl">🎯</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {presentation.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {presentation.description}
                  </p>

                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold">Date:</span>{" "}
                      {presentation.date}
                    </p>
                  </div>

                  <a
                    href={presentation.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-semibold"
                  >
                    <span>View Presentation</span>
                    <span className="ml-2">→</span>
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    [PDF - Placeholder]
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {projectData.presentations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No presentations available yet
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">
            New presentation slides will be added as we progress through the
            project milestones.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-semibold"
          >
            Get Updates
          </a>
        </div>
      </section>
    </div>
  );
}
