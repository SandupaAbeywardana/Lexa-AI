"use client";

import { useState } from "react";
import { projectData } from "@/data/projectData";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

      {/* Project Highlights */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-4">Project Highlights</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our AI-powered criminal investigation platform brings cutting-edge
            technology and research excellence to modern law enforcement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🤖",
                number: "5",
                title: "AI Components",
                description:
                  "Integrated machine learning modules for automated analysis and pattern recognition",
              },
              {
                icon: "🌍",
                number: "2",
                title: "Languages",
                description:
                  "Multilingual NLP support for Sinhala and English document processing",
              },
              {
                icon: "📊",
                number: "98.6%",
                title: "Accuracy",
                description:
                  "CNN-based emotion detection achieving industry-leading precision",
              },
              {
                icon: "⚡",
                number: "Real-time",
                title: "Processing",
                description:
                  "Live multimodal analysis with instant behavioral assessment",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>

                  {/* Counter with animation */}
                  <div className="mb-3">
                    <div className="text-4xl font-bold text-primary mb-1">
                      {item.number}
                    </div>
                    <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery & Demo Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-4">Gallery</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our platform in action with demo videos and screenshots
            showcasing the key features and user interface.
          </p>

          {/* Video Player */}
          <div className="mb-12">
            <div className="bg-black rounded-lg overflow-hidden shadow-xl">
              <video
                width="100%"
                height="auto"
                controls
                className="w-full aspect-video"
                poster="/images/gallery/photo-1.jpg"
              >
                <source src="/video/demo.mp4" type="video/mp4" />
                <track kind="captions" srcLang="en" label="English" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-center text-gray-600 mt-4 text-sm">
              Watch a comprehensive demo of the AI-Assisted Criminal
              Investigation Platform
            </p>
          </div>

          {/* Photo Gallery */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Platform Views
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  src: "/images/gallery/screenshot (1).png",
                  title: "Dashboard Overview",
                  description:
                    "Main investigative dashboard with real-time analytics",
                },
                {
                  src: "/images/gallery/screenshot (2).png",
                  title: "Interrogation Session Interface",
                  description:
                    "AI-assisted interface for conducting interviews",
                },
                {
                  src: "/images/gallery/screenshot (3).png",
                  title: "Investigation Analysis Interface",
                  description:
                    "Analytics interface for case and session overviews",
                },
                {
                  src: "/images/gallery/screenshot (4).png",
                  title: "Document Processing Interface",
                  description:
                    "Document analysis and information extraction tool",
                },
                {
                  src: "/images/gallery/screenshot (5).png",
                  title: "Person Registry",
                  description:
                    "Person database management with AI-driven insights",
                },
                {
                  src: "/images/gallery/screenshot (6).png",
                  title: "AI-Driven Predictions",
                  description:
                    "Predictive analytics for case outcomes and action recommendations",
                },
                {
                  src: "/images/gallery/screenshot (7).png",
                  title: "Trend Analysis Interface",
                  description:
                    "Visualizing crime trends and patterns over time",
                },
                {
                  src: "/images/gallery/screenshot (8).png",
                  title: "Criminal Analytics Interface",
                  description:
                    "In-depth analysis tools for criminal behavior insights",
                },
                {
                  src: "/images/gallery/screenshot (9).png",
                  title: "Investigation Creation Form",
                  description:
                    "Form interface for initiating new investigations",
                },
              ].map((photo) => (
                <button
                  key={photo.src}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer w-full text-left border-0 p-0 bg-transparent hover:bg-transparent"
                  onClick={() => setSelectedImage(photo.src)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedImage(photo.src);
                    }
                  }}
                  aria-label={`View ${photo.title}`}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-64 overflow-hidden bg-gray-200">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h4 className="text-white font-bold text-lg mb-2">
                      {photo.title}
                    </h4>
                    <p className="text-gray-200 text-sm">{photo.description}</p>
                    <p className="text-white text-xs mt-2">Click to enlarge</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <dialog
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 w-full h-full"
          open
        >
          <div className="relative max-w-5xl max-h-screen w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setSelectedImage(null);
                }
              }}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
              aria-label="Close modal"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <button
              onClick={() => setSelectedImage(null)}
              onKeyDown={(e) => {
                if (e.key === "Escape" || e.key === "Enter") {
                  setSelectedImage(null);
                }
              }}
              className="bg-transparent border-0 p-0 cursor-pointer hover:opacity-90 transition-opacity"
              aria-label="Click to close"
            >
              <img
                src={selectedImage}
                alt="Fullscreen view"
                className="max-w-full max-h-full object-contain"
              />
            </button>

            {/* Close on ESC hint */}
            <p className="absolute bottom-4 left-4 text-white/60 text-sm">
              Press ESC or click to close
            </p>
          </div>
        </dialog>
      )}

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
