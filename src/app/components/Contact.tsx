import { useState } from "react";
import { MapPin, Phone, Mail, Send, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import contactHero from "../../../images/4.jpeg";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const apiBase = import.meta.env.VITE_API_BASE_URL || "";
    const endpoint = apiBase ? `${apiBase}/api/contact` : "/api/contact";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        return;
      }

      setStatus("error");
      setErrorMessage(data.error || "We saved your message, but email delivery failed.");
    } catch (error) {
      setStatus("error");
      setErrorMessage("Unable to send your message right now. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative text-white py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 79, 141, 0.75), rgba(26, 79, 141, 0.75)), url(${contactHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-1/2 after:bg-[#FEC629] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
              Get In Touch
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>

        {/* Curved Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,45 C160,85 380,0 600,45 C820,90 1040,10 1200,45 L1200,120 L0,120 Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-gray-50 relative">
        <svg className="pointer-events-none absolute left-8 top-12 hidden md:block" width="230" height="60" viewBox="0 0 230 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 42 C45 12 85 62 130 32 C170 2 205 42 225 18" stroke="#1A4F8D" strokeWidth="3" strokeLinecap="round"/>
        </svg>
        {/* Dotted Accent */}
        <div className="absolute right-0 top-1/4 opacity-10">
          <div className="grid grid-cols-4 gap-3 p-8">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-[#1A4F8D] rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl text-gray-900 mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "success" && (
                  <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                    Thank you! Your message was sent successfully.
                  </div>
                )}
                {status === "error" && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                    {errorMessage}
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1A4F8D] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1A4F8D] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1A4F8D] transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1A4F8D] transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex items-center justify-center w-full bg-[#1A4F8D] text-white px-8 py-4 rounded-lg hover:bg-[#1C5B78] transition-colors text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl text-gray-900 mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#1A4F8D]/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="w-6 h-6 text-[#1A4F8D]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      123 Innovation Street<br />
                      Tech City, TC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#1A4F8D]/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="w-6 h-6 text-[#1A4F8D]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
                      Phone
                    </h3>
                    <p className="text-gray-600">+250 798745247</p>
                    <p className="text-gray-600">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#1A4F8D]/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="w-6 h-6 text-[#1A4F8D]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
                      Email
                    </h3>
                    <p className="text-gray-600">Email: Coming Soon</p>
                    <p className="text-gray-600">support@bahotech.com</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg text-gray-900 mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#1A4F8D] rounded-lg flex items-center justify-center hover:bg-[#1C5B78] transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#1A4F8D] rounded-lg flex items-center justify-center hover:bg-[#1C5B78] transition-colors"
                  >
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#1A4F8D] rounded-lg flex items-center justify-center hover:bg-[#1C5B78] transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#1A4F8D] rounded-lg flex items-center justify-center hover:bg-[#1C5B78] transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curved Bottom Border */}
        <div className="relative mt-20">
          <svg className="w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,70 C220,20 420,110 600,70 C780,20 980,110 1200,70 L1200,120 L0,120 Z" fill="#F9FAFB"></path>
          </svg>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-8 text-center relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:h-1 after:w-1/2 after:-translate-x-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
            Find Us
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg h-96 bg-gray-300 flex items-center justify-center">
            {/* Placeholder for map - in production, this would use Google Maps or similar */}
            <div className="text-center">
              <MapPin className="w-16 h-16 text-[#1A4F8D] mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Interactive Map</p>
              <p className="text-gray-500">123 Innovation Street, Tech City, TC 12345</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA Section */}
      <section className="py-20 bg-[#1A4F8D] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-1/2 after:bg-[#FEC629] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
            Support Our Mission
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Help us continue creating innovative accessibility solutions that empower people with disabilities
          </p>
          <button className="bg-white text-[#1A4F8D] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg">
            Make a Donation
          </button>
        </div>
      </section>
    </div>
  );
}
