export default function Domain() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Research Domain</h1>
          <p className="text-lg text-gray-600">
            Comprehensive overview of our research background, objectives, and
            methodology
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container-custom">
          {/* Literature Survey */}
          <div className="mb-16">
            <h2 className="section-title">Literature Survey</h2>
            <div className="card p-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Artificial intelligence has rapidly evolved as a cornerstone of
                modern criminal investigations, integrating NLP, multimodal
                analytics, and predictive modeling to improve speed, accuracy,
                and transparency across case work. Early efforts in
                law-enforcement AI moved from expert/rule-based systems toward
                data-driven machine learning that can surface hidden patterns
                and support proactive decision-making.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Studies show that predictive policing and incident-link analysis
                can prioritize resources and forecast risk, while also revealing
                challenges around bias, explainability, and
                governance—underscoring the need for human-in-the-loop controls
                and accountable model design.
              </p>
            </div>
          </div>

          {/* Research Gap */}
          <div className="mb-16">
            <h2 className="section-title">Research Gap</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Automated Data Collection and Structuring",
                  description:
                    "Most existing systems in law enforcement rely on manual entry or limited OCR tools for processing police reports and court documents. Current literature lacks robust multilingual document-processing pipelines.",
                },
                {
                  title: "Dynamic Question Generation and Response Analysis",
                  description:
                    "Research into adaptive AI-driven interrogation support remains scarce. Prior systems use static question banks that fail to adjust based on context or prior responses.",
                },
                {
                  title: "Multimodal Behavioral and Physiological Analysis",
                  description:
                    "Integration of multiple synchronized behavioral and physiological stress indicators for field-grade multimodal analysis is still limited. Existing studies seldom fuse multiple signal types with synchronization.",
                },
                {
                  title: "Incident Correlation and Pattern Identification",
                  description:
                    "Current AI models for crime prediction typically operate on historical crime datasets without linking narrative testimonies or cross-case context.",
                },
              ].map((gap, index) => (
                <div key={index} className="card p-6 border-l-4 border-primary">
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {gap.title}
                  </h3>
                  <p className="text-gray-700">{gap.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Research Problem */}
          <div className="mb-16">
            <h2 className="section-title">Research Problem</h2>
            <div className="card p-8 bg-red-50 border-l-4 border-red-500">
              <p className="text-gray-800 leading-relaxed">
                Criminal investigations in Sri Lanka remain largely manual, with
                fragmented records, subjective judgments, and limited data
                integration. Investigators struggle to process unstructured,
                multilingual reports and correlate related cases, leading to
                delays and inconsistencies. Traditional interrogation methods
                also lack objective tools to assess stress or credibility,
                increasing bias risks.
              </p>
            </div>
          </div>

          {/* Objectives */}
          <div className="mb-16">
            <h2 className="section-title">Research Objectives</h2>
            <div className="space-y-4">
              {[
                {
                  num: 1,
                  title: "Automated Data Collection and Extraction",
                  desc: "Develop a system capable of extracting and structuring information from unstructured legal documents in Sinhala and English.",
                },
                {
                  num: 2,
                  title: "Dynamic Question Generation and Response Analysis",
                  desc: "Create an adaptive interrogation support module that generates context-aware questions using LLMs and reinforcement learning.",
                },
                {
                  num: 3,
                  title: "Multimodal Behavioral and Physiological Analysis",
                  desc: "Integrate facial, vocal, and physiological signal analysis to assess emotional state and credibility during interrogations.",
                },
                {
                  num: 4,
                  title: "Incident Correlation and Pattern Identification",
                  desc: "Implement ML models that correlate new incidents with historical cases using structured attributes and unstructured narratives.",
                },
                {
                  num: 5,
                  title: "Visualization and Web Application",
                  desc: "Design a web-based dashboard consolidating all system outputs into a unified interface for investigators.",
                },
              ].map((obj) => (
                <div key={obj.num} className="card p-6 flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white font-bold">
                      {obj.num}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold mb-2">{obj.title}</h3>
                    <p className="text-gray-600">{obj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <div className="mb-16">
            <h2 className="section-title">Methodology</h2>
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6">
                Four-Phase Architecture
              </h3>
              <div className="space-y-4">
                {[
                  "Phase 1: Automated Data Collection & Digitization",
                  "Phase 2: Dynamic Questioning & Response Analysis",
                  "Phase 3: Multimodal Behavioral & Physiological Analysis",
                  "Phase 4: Incident Correlation & Pattern Identification",
                ].map((phase, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p className="text-lg text-gray-700">{phase}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h2 className="section-title">Technologies Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: "Frontend",
                  techs: ["Next.js", "React", "Tailwind CSS"],
                },
                {
                  category: "Backend",
                  techs: ["Python", "FastAPI/Flask", "Node.js"],
                },
                {
                  category: "AI/ML",
                  techs: ["TensorFlow", "PyTorch", "Scikit-learn", "NLTK"],
                },
                {
                  category: "NLP",
                  techs: ["Transformers", "spaCy", "Hugging Face"],
                },
                {
                  category: "Computer Vision",
                  techs: ["OpenCV", "MediaPipe", "CNNs"],
                },
                {
                  category: "Database",
                  techs: ["PostgreSQL", "MongoDB", "Redis"],
                },
              ].map((tech, index) => (
                <div key={index} className="card p-6">
                  <h3 className="font-bold text-lg mb-4 text-primary">
                    {tech.category}
                  </h3>
                  <ul className="space-y-2">
                    {tech.techs.map((item, i) => (
                      <li key={i} className="text-gray-700 flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
