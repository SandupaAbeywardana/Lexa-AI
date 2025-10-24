"use client";

import { useState } from "react";
import { projectData } from "@/data/projectData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("loading");

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">Get in touch with our team</p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Email */}
              <div className="card p-6 flex items-center gap-4">
                <div className="text-3xl">✉️</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Email</h3>
                  <a
                    href={`mailto:${projectData.contact.email}`}
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    {projectData.contact.email || "[Your Email]"}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="card p-6 flex items-center gap-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Phone</h3>
                  <a
                    href={`tel:${projectData.contact.phone}`}
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    {projectData.contact.phone || "[Your Phone]"}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="card p-6 flex items-center gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Address</h3>
                  <p className="text-gray-700">
                    {projectData.contact.address || "[Your Address]"}
                  </p>
                  <p className="text-gray-600 mt-2 text-sm">
                    {projectData.contact.institution || "[Your Institution]"}
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="card p-6 bg-blue-50">
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="text-primary hover:text-secondary">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/domain"
                      className="text-primary hover:text-secondary"
                    >
                      Research Domain
                    </a>
                  </li>
                  <li>
                    <a
                      href="/documents"
                      className="text-primary hover:text-secondary"
                    >
                      Documents
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Message subject"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  {/* Status Message */}
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800">
                        ✓ Message sent successfully! We'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800">
                        ✗ Failed to send message. Please try again.
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitStatus === "loading"}
                    className="w-full px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitStatus === "loading" ? "Sending..." : "Send Message"}
                  </button>
                </form>

                <p className="text-sm text-gray-500 mt-4 text-center">
                  We typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <h2 className="section-title text-center">Find Us</h2>
          <div className="w-full h-96 bg-gray-300 rounded-lg overflow-hidden shadow-lg border-0">
            <iframe
              width="100%"
              height="100%"
              className="border-0"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3616.0548284707406!2d-71.00163592407476!3d24.998252839729112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU5JzUzLjciTiA3MMKwNTknNTYuNiJX!5e0!3m2!1sen!2slk!4v1761322608979!5m2!1sen!2slk"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lexa AI"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
