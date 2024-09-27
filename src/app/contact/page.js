"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import styles from "./ContactForm.module.css"; // Import the CSS module

const LoadingSpinner = () => (
  <motion.div
    className="flex justify-center items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="w-12 h-12 border-4 border-t-transparent border-white dark:border-gray-800 rounded-full animate-spin"></div>
  </motion.div>
);

export default function ContactUs() {
  const { theme } = useTheme();
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
    setIsLoading(true);

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
        setFormData({ name: "", email: "", message: "" });
        setIsSuccess(true);
        setStatus("Your message has been sent successfully!");
      } else {
        setIsSuccess(false);
        setStatus(`Failed to send the message: ${data.error}`);
      }
    } catch (error) {
      setIsSuccess(false);
      setStatus("Error: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden transform -translate-y-[5%] bg-white dark:bg-[#18181b] text-black dark:text-white">
      {/* Interactive Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 dark:bg-gradient-to-r dark:from-purple-900 dark:via-indigo-900 dark:to-pink-900 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      {/* Contact Form Container */}
      <motion.div
        className={`${styles.contactContainer} relative z-10 w-full max-w-3xl mx-auto rounded-lg p-8 shadow-lg`}
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
              Get in{" "}
              <span className="text-indigo-400 dark:text-indigo-600">
                Touch
              </span>
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
                    className={`${styles.formInput} w-full p-4 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 transition duration-300`}
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
                    className={`${styles.formInput} w-full p-4 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 transition duration-300`}
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
                  className={`${styles.formInput} w-full p-4 h-32 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 transition duration-300`}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <motion.button
                  type="submit"
                  className={`${styles.formButton} bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-700 text-white py-3 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 transition duration-300`}
                  whileHover={{ scale: 1.05 }}
                  disabled={isLoading}
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
          <EnvelopeIcon className="w-6 h-6 text-indigo-400 dark:text-indigo-600" />
          <span>yonividalportfolio@gmail.com</span>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-2">
          <PhoneIcon className="w-6 h-6 text-indigo-400 dark:text-indigo-600" />
          <span>+972 542391194</span>
        </div>

        {/* Address */}
        <div className="flex items-center space-x-2">
          <MapPinIcon className="w-6 h-6 text-indigo-400 dark:text-indigo-600" />
          <span>Israel</span>
        </div>
      </motion.div>
    </div>
  );
}
