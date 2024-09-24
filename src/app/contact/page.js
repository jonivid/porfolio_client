"use client";
import { motion } from "framer-motion";
import { useState } from "react";
// Updated imports for Heroicons v2
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

// Loading Spinner Component
const LoadingSpinner = () => (
  <motion.div
    className="flex justify-center items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
  </motion.div>
);

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    try {
      setStatus("Sending...");
      setIsSuccess(null);

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" }); // Clear the form
        setIsSuccess(true);
        setStatus("Your message has been sent successfully!"); // Show success message
      } else {
        setIsSuccess(false);
        setStatus(`Failed to send the message: ${data.error}`);
      }
    } catch (error) {
      setIsSuccess(false);
      setStatus("Error: " + error.message);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="relative min-h-screen bg-[#18181b] text-white flex items-center justify-center overflow-hidden transform -translate-y-[5%]">
      {/* Interactive Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 flex justify-center items-center">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-white rounded-full absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: ["0%", "100%", "0%"] }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Contact Form Container */}
      <motion.div
        className="relative z-10 w-full max-w-3xl mx-auto bg-[#1f1f24] rounded-lg p-8 shadow-lg"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Show Loading Spinner */}
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {/* Header */}
            <h2 className="text-4xl font-bold mb-8 text-center">
              Get in <span className="text-indigo-400">Touch</span>
            </h2>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-4 bg-[#2a2a31] text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-[#2a2a31] text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full p-4 h-32 bg-[#2a2a31] text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <motion.button
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  disabled={isLoading} // Disable button while loading
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </>
        )}

        {/* Status Message */}
        {status && (
          <p
            className={`mt-4 font-medium ${
              isSuccess ? "text-green-500" : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </motion.div>

      {/* Contact Information */}
      <motion.div
        className="absolute bottom-12 transform translate-y-[5%] flex justify-center space-x-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        {/* Email */}
        <div className="flex items-center space-x-2">
          <EnvelopeIcon className="w-6 h-6 text-indigo-400" />
          <span>yonivid@gmail.com</span>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-2">
          <PhoneIcon className="w-6 h-6 text-indigo-400" />
          <span>+972 542391194</span>
        </div>

        {/* Address */}
        <div className="flex items-center space-x-2">
          <MapPinIcon className="w-6 h-6 text-indigo-400" />
          <span>Israel</span>
        </div>
      </motion.div>
    </div>
  );
}
