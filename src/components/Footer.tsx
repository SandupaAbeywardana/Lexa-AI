import { projectData } from "@/data/projectData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-8">
          {/* About */}
          <div className="md:col-span-2">
            <img
              src="/images/whiteLogo.png"
              alt="Project Logo"
              className="h-14 w-auto mb-6"
            />
            <p className="text-gray-400 text-sm">
              AI-Assisted Criminal Investigation Platform - A research
              initiative focused on leveraging machine learning and NLP for
              modern investigative processes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/domain" className="text-gray-400 hover:text-white">
                  Domain
                </a>
              </li>
              <li>
                <a href="/documents" className="text-gray-400 hover:text-white">
                  Documents
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/presentations"
                  className="text-gray-400 hover:text-white"
                >
                  Presentations
                </a>
              </li>
              <li>
                <a
                  href="/milestones"
                  className="text-gray-400 hover:text-white"
                >
                  Milestones
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                Email:&nbsp;
                <a
                  href={`mailto:${projectData.contact.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {projectData.contact.email}
                </a>
              </li>
              <li>
                Phone:&nbsp;
                <a
                  href={`tel:${projectData.contact.phone}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {projectData.contact.phone}
                </a>
              </li>
              <li className="text-gray-400">
                Address: {projectData.contact.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} LexaAI. All rights reserved.
              </p>
              <span className="text-gray-600 hidden md:inline">•</span>
              <p className="text-gray-500 text-sm md:ml-2">
                Built with ❤️ by{" "}
                <span className="text-white font-semibold">Team LexaAI</span>
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
