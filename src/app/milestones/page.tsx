import { projectData } from "@/data/projectData";

export default function Milestones() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return "✓";
      case "in-progress":
        return "⟳";
      case "pending":
        return "◯";
      default:
        return "◯";
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Project Milestones</h1>
          <p className="text-lg text-gray-600">
            Track our project progress through key milestones and assessments
          </p>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {projectData.milestones.map((milestone, index) => (
                <div key={milestone.id} className="relative">
                  {/* Timeline line */}
                  {index !== projectData.milestones.length - 1 && (
                    <div className="absolute left-6 top-12 w-1 h-12 bg-primary opacity-30"></div>
                  )}

                  {/* Milestone content */}
                  <div className="flex gap-6">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                          milestone.status === "completed"
                            ? "bg-green-500"
                            : milestone.status === "in-progress"
                            ? "bg-blue-500"
                            : "bg-gray-400"
                        }`}
                      >
                        {getStatusIcon(milestone.status)}
                      </div>
                    </div>

                    {/* Card */}
                    <div className="flex-grow card p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-2xl font-bold">
                            {milestone.name}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {milestone.date}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                            milestone.status
                          )}`}
                        >
                          {milestone.status.charAt(0).toUpperCase() +
                            milestone.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3">
                        {milestone.description}
                      </p>
                      {milestone.marks && (
                        <div className="pt-3 border-t border-gray-200">
                          <p className="text-sm">
                            <span className="font-semibold">Marks:</span>{" "}
                            {milestone.marks}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: "Total Milestones",
                value: projectData.milestones.length,
              },
              {
                label: "Completed",
                value: projectData.milestones.filter(
                  (m) => m.status === "completed"
                ).length,
              },
              {
                label: "In Progress",
                value: projectData.milestones.filter(
                  (m) => m.status === "in-progress"
                ).length,
              },
            ].map((stat, i) => (
              <div key={i} className="text-center card p-6">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-700 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
