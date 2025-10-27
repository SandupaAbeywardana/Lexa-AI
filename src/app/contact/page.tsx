"use client";

import { useState } from "react";
import { projectData } from "@/data/projectData";
import { Icon } from "@iconify/react";
import { motion, Variants } from "framer-motion";

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="overflow-x-hidden"
    >
      {/* Hero Section */}
      <motion.section
        variants={itemVariants}
        className="relative bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20"
      >
        <div className="absolute inset-0 bg-[url('/images/tech/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container-custom relative">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold mb-4 text-center text-gray-800 dark:text-white"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 text-center"
          >
            We&apos;d love to hear from you. Get in touch with our team.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Information & Form */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Email */}
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                }}
                className="card p-6 flex items-start gap-4 transition-all duration-300"
              >
                <Icon
                  icon="lucide:mail"
                  className="text-3xl text-primary mt-1"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <a
                    href={`mailto:${projectData.contact.email}`}
                    className="text-primary hover:underline transition-colors"
                  >
                    {projectData.contact.email || "[Your Email]"}
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                }}
                className="card p-6 flex items-start gap-4 transition-all duration-300"
              >
                <Icon
                  icon="lucide:phone"
                  className="text-3xl text-primary mt-1"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <a
                    href={`tel:${projectData.contact.phone}`}
                    className="text-primary hover:underline transition-colors"
                  >
                    {projectData.contact.phone || "[Your Phone]"}
                  </a>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                }}
                className="card p-6 flex items-start gap-4 transition-all duration-300"
              >
                <Icon
                  icon="lucide:map-pin"
                  className="text-3xl text-primary mt-1"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">Address</h3>
                  <p className="text-gray-700">
                    {projectData.contact.address || "[Your Address]"}
                  </p>
                  <p className="text-gray-500 mt-2 text-sm">
                    {projectData.contact.institution || "[Your Institution]"}
                  </p>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                variants={itemVariants}
                className="card p-6 bg-blue-50 dark:bg-gray-800 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Icon icon="lucide:link" className="mr-2" /> Quick Links
                </h3>
                <ul className="space-y-3">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/domain", label: "Research Domain" },
                    { href: "/documents", label: "Documents" },
                  ].map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="flex items-center text-primary hover:underline hover:text-secondary transition-all duration-300 group"
                      >
                        <Icon
                          icon="lucide:chevron-right"
                          className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform"
                        />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="card p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold mb-2 text-gray-600 dark:text-gray-300"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <Icon
                          icon="lucide:user"
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold mb-2 text-gray-600 dark:text-gray-300"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <Icon
                          icon="lucide:at-sign"
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold mb-2 text-gray-600 dark:text-gray-300"
                    >
                      Subject
                    </label>
                    <div className="relative">
                      <Icon
                        icon="lucide:edit-3"
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Message subject"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-2 text-gray-600 dark:text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={submitStatus === "loading"}
                    className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2"
                  >
                    {submitStatus === "loading" ? (
                      <>
                        <Icon icon="lucide:loader" className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Icon icon="lucide:send" className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>

                <p className="text-sm text-gray-500 mt-6 text-center">
                  We typically respond within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <motion.section
        variants={itemVariants}
        className="py-24 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Find Us On Map</h2>
          <div className="w-full h-96 bg-gray-300 rounded-xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
            <iframe
              width="100%"
              height="100%"
              className="border-0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.046731105953!2d79.9715533!3d6.9189572!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1677058867339!5m2!1sen!2slk"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lexa AI Location"
            ></iframe>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
