"use client";

import "animate.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaWhatsapp, FaPaperPlane, FaCopy, FaCheck } from "react-icons/fa";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [copied, setCopied] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      emailjs.init(publicKey);

      const result = await emailjs.sendForm(
        serviceID,
        templateID,
        formRef.current,
        publicKey
      );

      if (result.status === 200) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("❌ Failed to send. Please try again later.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("❌ Something went wrong. Please check your connection.");
    } finally {
      setIsSending(false);
    }
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(""), 2000);
    });
  };

  const contactItems = [
    {
      icon: <FaEnvelope className="w-5 h-5 text-[#c026d3] dark:text-[#e879f9]" />,
      title: "Email",
      value: "saornob2001@gmail.com",
      href: "mailto:saornob2001@gmail.com",
      label: "email",
    },
    {
      icon: <FaPhone className="w-5 h-5 text-[#c026d3] dark:text-[#e879f9]" />,
      title: "Phone",
      value: "+8801723630099",
      href: "tel:+8801723630099",
      label: "phone1",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5 text-[#25D366]" />,
      title: "WhatsApp",
      value: "+8801886066632",
      href: "https://wa.me/8801886066632",
      label: "whatsapp",
    },
  ];

  return (
    <>
      <ToastContainer position="top-center" theme="dark" />
      <section id="contact" className="py-24 bg-[#f0e6f6] dark:bg-[#1a1525] text-[#6b21a8] dark:text-[#c4b5fd] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#6b21a8] dark:text-[#c4b5fd] transition-colors duration-300">
              Get In <span className="bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] mx-auto mt-4 rounded-full"></div>
            <p className="text-[#6b21a8]/70 dark:text-[#c4b5fd]/70 mt-4 text-lg">
              I&apos;m always open to new opportunities, collaborations, or just a friendly chat!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Column: Contact Cards */}
            <div className="space-y-6">
              {contactItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group block bg-white/70 dark:bg-[#1a1525]/70 backdrop-blur-md border border-gray-300/50 dark:border-[#3d2d5c]/50 rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-[#c084fc]/20 dark:hover:shadow-[#7c3aed]/20 hover:border-[#c026d3] dark:hover:border-[#e879f9] transition-all duration-300"
                >
                  <a
                    href={item.href || "#"}
                    target={item.label === "whatsapp" ? "_blank" : "_self"}
                    rel={item.label === "whatsapp" ? "noopener noreferrer" : ""}
                    className="block"
                  >
                    {/* ✅ IMPROVED: Changed solid hover color to a subtle /30 tint so the icon remains visible */}
                    <div className="w-14 h-14 bg-[#c026d3]/10 dark:bg-[#e879f9]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#c026d3]/30 dark:group-hover:bg-[#e879f9]/30 group-hover:scale-110 transition-all duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[#6b21a8] dark:text-[#c4b5fd] mb-1 transition-colors duration-300">{item.title}</h3>
                  </a>

                  <div className="flex items-center justify-center gap-2">
                    <span className="text-gray-600 dark:text-[#c4b5fd]/80 text-sm select-all cursor-pointer transition-colors duration-300">
                      {item.value}
                    </span>
                    <button
                      onClick={() => copyToClipboard(item.value, item.label)}
                      className="text-[#c026d3]/60 dark:text-[#e879f9]/60 hover:text-[#c026d3] dark:hover:text-[#e879f9] transition-colors p-1 rounded hover:bg-[#c026d3]/10 dark:hover:bg-[#e879f9]/10"
                      title="Copy to clipboard"
                    >
                      {copied === item.label ? (
                        <FaCheck className="w-4 h-4 text-green-400" />
                      ) : (
                        <FaCopy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/70 dark:bg-[#1a1525]/70 backdrop-blur-md border border-gray-300/50 dark:border-[#3d2d5c]/50 rounded-2xl p-8 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-[#6b21a8] dark:text-[#c4b5fd] mb-6 text-center lg:text-left transition-colors duration-300">
                Send Me a <span className="text-[#c026d3] dark:text-[#e879f9]">Message</span>
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-[#c4b5fd]/80 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#f0e6f6]/50 dark:bg-[#1a1525]/50 border border-gray-300/50 dark:border-[#3d2d5c]/50 rounded-lg px-4 py-3 text-[#6b21a8] dark:text-[#c4b5fd] placeholder-[#6b21a8]/50 dark:placeholder-[#c4b5fd]/50 focus:border-[#c026d3] dark:focus:border-[#e879f9] focus:outline-none transition-colors"
                    placeholder="Mr Visitor"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-[#c4b5fd]/80 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#f0e6f6]/50 dark:bg-[#1a1525]/50 border border-gray-300/50 dark:border-[#3d2d5c]/50 rounded-lg px-4 py-3 text-[#6b21a8] dark:text-[#c4b5fd] placeholder-[#6b21a8]/50 dark:placeholder-[#c4b5fd]/50 focus:border-[#c026d3] dark:focus:border-[#e879f9] focus:outline-none transition-colors"
                    placeholder="visitor@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-[#c4b5fd]/80 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-[#f0e6f6]/50 dark:bg-[#1a1525]/50 border border-gray-300/50 dark:border-[#3d2d5c]/50 rounded-lg px-4 py-3 text-[#6b21a8] dark:text-[#c4b5fd] placeholder-[#6b21a8]/50 dark:placeholder-[#c4b5fd]/50 focus:border-[#c026d3] dark:focus:border-[#e879f9] focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                {/* Smooth Send Button */}
                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] hover:from-[#c084fc] hover:to-[#7c3aed] dark:hover:from-[#c084fc] dark:hover:to-[#a78bfa] text-white font-medium shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <>
                      <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-4 h-4" /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12 text-gray-400 dark:text-[#c4b5fd]/50 text-sm"
          >
            <p>📍 Based in Dhaka, Bangladesh</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}