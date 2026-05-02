"use client";

import "animate.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to MongoDB 
    console.log("Form submitted:", formData);
    alert("Form submission Successful! (This is a placeholder. Backend integration coming soon.)");
  };

  return (
    <section id="contact" className="py-24 bg-[#34353A] text-[#C9C9C9]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white">
            Get In <span className="bg-gradient-to-r from-[#746465] to-[#C9C9C9] bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#746465] to-[#C9C9C9] mx-auto mt-4 rounded-full"></div>
          <p className="text-[#C9C9C9]/70 mt-4 text-lg">
            I'm always open to new opportunities, collaborations, or just a friendly chat!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          <div className="space-y-6">
            {/* Email */}
            <motion.a
              href="mailto:saornob2001@gmail.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group block bg-[#424654]/30 border border-[#424654] rounded-2xl p-6 text-center hover:border-[#746465] hover:bg-[#424654]/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#746465]/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#746465]/30 transition-colors">
                <FaEnvelope className="w-6 h-6 text-[#746465]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
              <p className="text-[#C9C9C9]/70 text-sm">saornob2001@gmail.com</p>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group block bg-[#424654]/30 border border-[#424654] rounded-2xl p-6 text-center hover:border-[#746465] hover:bg-[#424654]/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#746465]/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#746465]/30 transition-colors">
                <FaPhone className="w-6 h-6 text-[#746465]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
              <p className="text-[#C9C9C9]/70 text-sm">+8801723630099</p>
              <p className="text-[#C9C9C9]/70 text-sm">+8801886066632</p>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/8801886066632"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group block bg-[#424654]/30 border border-[#424654] rounded-2xl p-6 text-center hover:border-[#746465] hover:bg-[#424654]/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#746465]/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#746465]/30 transition-colors">
                <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">WhatsApp</h3>
              <p className="text-[#C9C9C9]/70 text-sm">+8801886066632</p>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#424654]/30 border border-[#424654] rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 text-center lg:text-left">
              Send Me a <span className="text-[#746465]">Message</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#C9C9C9]/80 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#34353A] border border-[#424654] rounded-lg px-4 py-3 text-white placeholder-[#C9C9C9]/50 focus:border-[#746465] focus:outline-none transition-colors"
                  placeholder="Mr Bean"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#C9C9C9]/80 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#34353A] border border-[#424654] rounded-lg px-4 py-3 text-white placeholder-[#C9C9C9]/50 focus:border-[#746465] focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#C9C9C9]/80 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-[#34353A] border border-[#424654] rounded-lg px-4 py-3 text-white placeholder-[#C9C9C9]/50 focus:border-[#746465] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#746465] hover:bg-[#5C5051] text-white rounded-lg transition-all duration-300 font-semibold"
              >
                <FaPaperPlane className="w-4 h-4" /> Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-[#C9C9C9]/50 text-sm"
        >
          <p>📍 Based in Dhaka, Bangladesh</p>
        </motion.div>
      </div>
    </section>
  );
}