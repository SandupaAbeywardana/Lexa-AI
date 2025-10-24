import { projectData } from "@/data/projectData";

export default function Documents() {
  const categories = Array.from(
    new Set(projectData.documents.map((doc) => doc.category))
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Project Documents</h1>
          <p className="text-lg text-gray-600">
            Access project documentation and reports
          </p>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16">
        <div className="container-custom">
          {categories.map((category) => (
            <div key={category} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-primary">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectData.documents
                  .filter((doc) => doc.category === category)
                  .map((doc) => (
                    <div key={doc.id} className="card p-6 flex flex-col">
                      <div className="mb-4">
                        <div className="text-3xl mb-3">📄</div>
                        <h3 className="text-lg font-bold mb-2">{doc.title}</h3>
                        <p className="text-gray-600 text-sm">
                          {doc.description}
                        </p>
                      </div>
                      <div className="mt-auto pt-4 border-t border-gray-200">
                        <a
                          href={doc.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-secondary font-semibold transition-colors"
                        >
                          <span>Download PDF</span>
                          <span className="ml-2">↓</span>
                        </a>
                        <p className="text-xs text-gray-500 mt-2">
                          [PDF - Placeholder]
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}

          {/* Empty State */}
          {projectData.documents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No documents available yet
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
