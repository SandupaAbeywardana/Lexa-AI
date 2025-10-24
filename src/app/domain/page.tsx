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
            <div className="card p-8 space-y-4 text-gray-700 leading-relaxed">
              <p>
                Artificial Intelligence (AI) has transformed criminal
                investigations from traditional, manual processes into
                data-driven methodologies. Early rule-based systems in policing
                demonstrated AI's ability to detect criminal patterns and
                enhance decision-making{" "}
                <a href="#ref-1" className="text-primary hover:underline">
                  <sup>[1]</sup>
                </a>
                ,{" "}
                <a href="#ref-6" className="text-primary hover:underline">
                  <sup>[6]</sup>
                </a>
                . Later studies by Singh and Patel analyzed 120 articles and
                confirmed a significant expansion of AI use in crime forecasting
                across 34 crime types{" "}
                <a href="#ref-7" className="text-primary hover:underline">
                  <sup>[7]</sup>
                </a>
                .
              </p>

              <p>
                Predictive policing remains a major application, enabling
                proactive law enforcement through crime forecasting{" "}
                <a href="#ref-8" className="text-primary hover:underline">
                  <sup>[8]</sup>
                </a>
                . Yet, real-world implementations like Chicago's SSL system
                revealed algorithmic bias and transparency issues, leading to
                its deactivation{" "}
                <a href="#ref-6" className="text-primary hover:underline">
                  <sup>[6]</sup>
                </a>
                ,{" "}
                <a href="#ref-9" className="text-primary hover:underline">
                  <sup>[9]</sup>
                </a>
                .
              </p>

              <p>
                Behavioral analysis and interrogation technologies have evolved
                from subjective observation to multimodal analysis combining
                facial, speech, and physiological data. While early Behavioral
                Analysis Interviews showed limitations{" "}
                <a href="#ref-10" className="text-primary hover:underline">
                  <sup>[10]</sup>
                </a>
                , CNN-based frameworks achieved accuracies up to 98.6% in
                emotion detection{" "}
                <a href="#ref-11" className="text-primary hover:underline">
                  <sup>[11]</sup>
                </a>
                . Multimodal integration using eye-tracking and LLM inference
                offers deeper insights and redundancy when one modality fails{" "}
                <a href="#ref-10" className="text-primary hover:underline">
                  <sup>[10]</sup>
                </a>
                .
              </p>

              <p>
                Speech Emotion Recognition (SER) now assists lie detection and
                behavioral profiling through CNN-BiLSTM models with 72%
                validation accuracy, though stability issues across languages
                persist{" "}
                <a href="#ref-12" className="text-primary hover:underline">
                  <sup>[12]</sup>
                </a>
                ,{" "}
                <a href="#ref-13" className="text-primary hover:underline">
                  <sup>[13]</sup>
                </a>
                . Similarly, NLP applications in legal documents employ Named
                Entity Recognition and Legal-BERT to summarize and classify text
                efficiently, though annotated datasets and domain bias remain
                challenges{" "}
                <a href="#ref-5" className="text-primary hover:underline">
                  <sup>[5]</sup>
                </a>
                ,{" "}
                <a href="#ref-12" className="text-primary hover:underline">
                  <sup>[12]</sup>
                </a>
                .
              </p>

              <p>
                Multimodal fusion further enhances behavioral analytics but
                introduces synchronization and data-quality challenges{" "}
                <a href="#ref-9" className="text-primary hover:underline">
                  <sup>[9]</sup>
                </a>
                ,{" "}
                <a href="#ref-14" className="text-primary hover:underline">
                  <sup>[14]</sup>
                </a>
                . Ethical and privacy concerns are critical, as bias in AI
                systems risks discriminatory outcomes{" "}
                <a href="#ref-15" className="text-primary hover:underline">
                  <sup>[15]</sup>
                </a>
                .
              </p>

              <p>
                Research gaps persist due to limited integration of end-to-end
                AI systems and inconsistent performance measures{" "}
                <a href="#ref-15" className="text-primary hover:underline">
                  <sup>[15]</sup>
                </a>
                ,{" "}
                <a href="#ref-16" className="text-primary hover:underline">
                  <sup>[16]</sup>
                </a>
                . Recent surveys stress the need for unified architectures
                integrating NLP, behavioral analysis, and pattern recognition{" "}
                <a href="#ref-6" className="text-primary hover:underline">
                  <sup>[6]</sup>
                </a>
                ,{" "}
                <a href="#ref-8" className="text-primary hover:underline">
                  <sup>[8]</sup>
                </a>
                .
              </p>

              <p>
                Future directions include explainable and human-in-the-loop AI
                to maintain investigator control, emphasizing fairness,
                accountability, and legality in next-generation investigative
                platforms.
              </p>

              <div className="mt-8 pt-6 border-t border-gray-300">
                <h3 className="font-bold text-lg mb-4 text-primary">
                  References
                </h3>
                <div className="space-y-2 text-sm">
                  <p id="ref-1">
                    [1] R. Choudhary, AI in Criminal Investigations: From
                    Automation to Predictive Analytics, Forensic Science Int,
                    2022.
                  </p>
                  <p id="ref-2">
                    [2] S. Liu and J. Miller, Challenges in Multilingual Legal
                    Document Processing, J.Law & Tech., 2021.
                  </p>
                  <p id="ref-3">
                    [3] K. Robinson, "Predictive Policing and AI in Law
                    Enforcement: A Systematic Review," Policing & Society, Vols.
                    vol. 31, no. 5, pp. 567-583, 2021.
                  </p>
                  <p id="ref-4">
                    [4] H. Kim, LAPIS: Language Model-Augmented Police
                    Investigation System, arXiv preprint arXiv:2401.12345, 2024.
                  </p>
                  <p id="ref-5">
                    [5] A. Maheshwari, AI for Legal Document Review: Comparative
                    Analysis of Current Platforms, ACM Legal Tech Conf, 2020.
                  </p>
                  <p id="ref-6">
                    [6] N. Dunsin, AI and ML in Digital Forensics and Incident
                    Response, Forensic Comput. Sci., 2022.
                  </p>
                  <p id="ref-7">
                    [7] J. Singh and P. Patel, Multimodal AI in Forensic
                    Applications: A Scoping Review, Front. AI, 2022.
                  </p>
                  <p id="ref-8">
                    [8] M. Gonzalez, "OCR in Legal and Forensic Domains:
                    Pitfalls and Advances," IEEE Access, vol. vol. 9, p. pp.
                    145320–145333, 2021.
                  </p>
                </div>
              </div>
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
              ].map((gap) => (
                <div
                  key={gap.title}
                  className="card p-6 border-l-4 border-primary"
                >
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
              <p className="text-gray-700 leading-relaxed mb-6">
                The proposed AI-augmented criminal investigation system mainly
                can be divided among four main components/phases.
              </p>
              <div className="space-y-4">
                {[
                  "1. The Automated Data Collection and Management phase.",
                  "2. Dynamic Question Generation and Response Analysis phase.",
                  "3. Multimodal Behavioral and Physiological Analysis phase.",
                  "4. Incident Correlation and Pattern Identification phase.",
                ].map((phase) => (
                  <div key={phase} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary text-white flex items-center justify-center font-bold">
                      {phase.charAt(0)}
                    </div>
                    <p className="text-lg text-gray-700">{phase}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-6">
                It combines automated data extraction, adaptive questioning,
                behavioral analysis, and predictive correlation to provide an
                integrated platform that enhances the efficiency of
                investigation as well as its accuracy.
                <br />
                <br />
                The overall system diagram presents the workflow of the proposed
                platform:
              </p>
              <div className="my-8 flex justify-center">
                <img
                  src="/images/System-Diagram.jpg"
                  alt="AI-Assisted Criminal Investigation Platform System Diagram"
                  className="max-w-4xl w-full  object-contain"
                />
              </div>
              <p className="text-gray-700 leading-relaxed mt-6">
                At its center is the suspect, who acts as the hub of multimodal
                data acquisition. Inputs are gathered through three key
                channels: video streams for facial expression analysis, heart
                rate signals for physiological stress detection, and audio for
                speech emotion recognition and content extraction. These streams
                are processed by a multimodal fusion processor that combines
                them to create comprehensive behavioral analysis reports. This
                fusion provides more accurate stress evaluations than any single
                modality alone. Alongside these behavioral signals, the system
                integrates structured and unstructured inputs such as witness
                statements, new incident reports, and historical case data into
                an enhanced classification model.
                <br />
                <br />
                Two AI components drive the investigative workflow: the Question
                Generation Model, which produces interrogation questions based
                on case data and investigator feedback, and the Pattern
                Recognition Model, which identifies correlations and generates
                insights from prior cases. All system outputs including
                behavioral dashboards, dynamically created questions, and
                pattern-based findings are consolidated into a single
                investigator interface that ensures real-time decision support
                while maintaining investigator control.
              </p>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h2 className="section-title">Technologies Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: "Frontend",
                  techs: ["Next.js", "Tailwind CSS"],
                },
                {
                  category: "Backend",
                  techs: ["Python", "FastAPI", "Node.js"],
                },
                {
                  category: "AI/ML",
                  techs: ["TensorFlow", "PyTorch", "Scikit-learn"],
                },
                {
                  category: "NLP",
                  techs: ["Gemini", "OpenAI", "BERT"],
                },
                {
                  category: "Computer Vision",
                  techs: ["OpenCV", "CNNs"],
                },
                {
                  category: "Database",
                  techs: ["MongoDB"],
                },
              ].map((tech) => (
                <div key={tech.category} className="card p-6">
                  <h3 className="font-bold text-lg mb-4 text-primary">
                    {tech.category}
                  </h3>
                  <ul className="space-y-2">
                    {tech.techs.map((item) => (
                      <li
                        key={item}
                        className="text-gray-700 flex items-center"
                      >
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
