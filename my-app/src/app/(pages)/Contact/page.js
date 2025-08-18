"use client";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!formRef.current) return;

    const rect = formRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rawX = e.clientX - centerX;
    const rawY = e.clientY - centerY;

    // Clamp offsets and reduce sensitivity for a minimal, professional feel
    const clamp = (v, max) => Math.max(-max, Math.min(max, v));
    const offsetX = clamp(rawX, rect.width * 0.2);
    const offsetY = clamp(rawY, rect.height * 0.2);

    setMousePosition({ x: offsetX * 0.01, y: offsetY * 0.01 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  // Function to send the email
  function sendEmail(e) {
    e.preventDefault();

    // Set spinner to true when button is clicked
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent! Check your email for a confirmation.", {
            position: "top-center",
            autoClose: 11000,
          });
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error(
            "Failed to send the message. Please try again or email me.",
            {
              position: "bottom-center",
            }
          );
          setLoading(false);
        }
      );
    e.target.reset();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <main className="pt-1 mb-64 px-4">
        <motion.section
          id="contact"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl text-center text-white mb-12"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            Contact Me
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-center items-stretch max-w-6xl mx-auto">
            {/* Info Card */}
            <motion.div
              className="hidden md:flex flex-col justify-center bg-black/20 backdrop-blur-lg p-8 rounded-l-xl shadow-lg border border-r-0 border-white/10 md:w-1/2"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.h3
                className="text-2xl text-white mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Let&apos;s Connect
              </motion.h3>
              <motion.p
                className="text-gray-300 mb-8"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your visions.
              </motion.p>
              <motion.div
                className="mt-10 text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
              >
                <motion.p
                  className="text-lg mb-4 text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                >
                  Or reach me via:
                </motion.p>
                <motion.div
                  className="flex justify-center space-x-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  {[
                    {
                      href: "https://www.linkedin.com/in/sairangineeni/",
                      icon: FaLinkedin,
                      color: "text-white hover:text-blue-400",
                      label: "LinkedIn",
                    },
                    {
                      href: "https://github.com/Sai4158",
                      icon: FaGithub,
                      color: "text-white hover:text-gray-600",
                      label: "GitHub",
                    },
                    {
                      href: "mailto:sairangineeni1@gmail.com",
                      icon: SiGmail,
                      color: "hover:text-red-400",
                      label: "Gmail",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={
                        social.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`${social.color} transition duration-300`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 1.8 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                      whileHover={{
                        scale: 1.2,
                        y: -5,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{
                        scale: 0.9,
                        transition: { duration: 0.1 },
                      }}
                    >
                      <social.icon size={30} />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Form Card */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <motion.form
                ref={formRef}
                onSubmit={sendEmail}
                className="bg-black/20 backdrop-blur-lg p-8 rounded-xl md:rounded-l-none shadow-lg border border-white/10 h-full"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                animate={{
                  x: mousePosition.x,
                  y: mousePosition.y,
                  scale: isHovered ? 1.005 : 1,
                  rotateX: mousePosition.y * 0.01,
                  rotateY: mousePosition.x * 0.01,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 28,
                  mass: 0.5,
                }}
                whileHover={{
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  transition: { duration: 0.2 },
                }}
                initial={{ scale: 0.95, opacity: 0 }}
              >
                <motion.div
                  className="mb-6"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
                >
                  <motion.label
                    className="block text-white text-lg mb-2"
                    htmlFor="from_name"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    Name
                  </motion.label>
                  <motion.input
                    type="text"
                    name="from_name"
                    id="from_name"
                    required
                    placeholder="Enter Name"
                    className="bg-black bg-opacity-30 backdrop:blur-3xl shadow appearance-none border border-transparent rounded w-full py-2 px-3 text-white font-extralight leading-tight focus:outline-none focus:shadow-outline transition duration-300"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                  />
                </motion.div>
                <motion.div
                  className="mb-6"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
                >
                  <motion.label
                    className="block text-white text-lg mb-2"
                    htmlFor="reply_to"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    Email
                  </motion.label>
                  <motion.input
                    type="email"
                    name="reply_to"
                    id="reply_to"
                    required
                    placeholder="Enter Email"
                    className="bg-black bg-opacity-30 backdrop:blur-3xl shadow appearance-none border border-transparent rounded w-full py-2 px-3 text-white font-extralight leading-tight focus:outline-none focus:shadow-outline transition duration-300"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                  />
                </motion.div>
                <motion.div
                  className="mb-6"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
                >
                  <motion.label
                    className="block text-white text-lg mb-2"
                    htmlFor="message"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    Message
                  </motion.label>
                  <motion.textarea
                    name="message"
                    id="message"
                    required
                    placeholder=". . ."
                    className="bg-black bg-opacity-30 backdrop:blur-3xl shadow appearance-none border border-transparent rounded w-full py-2 px-3 text-white font-extralight leading-tight focus:outline-none focus:shadow-outline transition duration-300"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                  ></motion.textarea>
                </motion.div>
                <motion.div
                  className="flex items-center justify-between"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1, ease: "easeOut" }}
                >
                  <motion.button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 w-32"
                    disabled={loading}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: { duration: 0.1 },
                    }}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.1 }}
                  >
                    {loading ? (
                      <ClipLoader size={24} color={"#ffffff"} />
                    ) : (
                      "Send"
                    )}
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
};

export default ContactPage;
