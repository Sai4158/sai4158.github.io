"use client";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Page() {
  const greetings = ["Hi", "Hola", "Hello", "Bonjour", "Greetings", "Welcome"];
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const magneticRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 5000); // Slower change: 5 seconds

    return () => clearInterval(interval);
  }, [greetings.length]);

  return (
    <motion.div
      className="pb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <main className="px-4">
        <motion.div
          className="flex justify-center min-h-screen"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="w-full max-w-7xl"
          >
            <motion.div
              ref={magneticRef}
              className="relative w-full lg:h-[525px] bg-opacity-40 px-6 pb-10 rounded-lg shadow-lg overflow-hidden bg-black"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
                setMousePosition({ x: 0, y: 0 });
              }}
              onMouseMove={(e) => {
                if (!magneticRef.current) return;
                const rect = magneticRef.current.getBoundingClientRect();
                const rawX = e.clientX - (rect.left + rect.width / 2);
                const rawY = e.clientY - (rect.top + rect.height / 2);
                const clamp = (v, max) => Math.max(-max, Math.min(max, v));
                const offsetX = clamp(rawX, rect.width * 0.25);
                const offsetY = clamp(rawY, rect.height * 0.25);
                setMousePosition({ x: offsetX * 0.015, y: offsetY * 0.015 });
              }}
              animate={{
                x: isHovered ? mousePosition.x : 0,
                y: isHovered ? mousePosition.y : 0,
                rotateX: isHovered ? mousePosition.y * 0.01 : 0,
                rotateY: isHovered ? -mousePosition.x * 0.01 : 0,
              }}
              transition={{ type: "tween", ease: "linear", duration: 0.001 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Background Image */}
              <motion.div
                className="absolute inset-0 hidden lg:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.8 }}
              >
                <Image
                  src="https://i.ibb.co/dQGwy7w/Sai-Profile-pic.jpg"
                  alt="Sai Rangineeni"
                  fill
                  style={{ objectFit: "cover" }}
                  className="opacity-15 blur-md pointer-events-none"
                />
              </motion.div>

              {/* Content Section */}
              <div className="relative flex flex-col md:flex-row items-center justify-center w-full h-full">
                {/* Profile Picture Section */}
                <motion.div
                  className="relative w-full md:w-1/3 flex justify-center md:justify-end p-4 md:p-8 lg:p-16"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                >
                  <motion.div
                    className="relative w-64 h-48 md:w-80 md:h-56 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
                    initial={{ scale: 0.8, rotateY: -20 }}
                    animate={{ scale: 1, rotateY: 0 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  >
                    <a href="/378xfs01/FindTheSecretHereLOL/11long">
                      <Image
                        src="https://i.ibb.co/dQGwy7w/Sai-Profile-pic.jpg"
                        alt="Sai Rangineeni"
                        width={320}
                        height={240}
                        className="w-full h-full object-cover"
                      />
                    </a>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="w-full md:w-2/3 mt-6 md:mt-0 md:ml-6 text-center md:text-left px-4 md:px-0"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                >
                  <br />
                  <br />
                  <motion.h1
                    className="text-3xl md:text-5xl text-white mb-4 flex flex-col md:flex-row items-center"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                  >
                    <motion.div
                      className="flex items-center"
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentGreeting} // Unique key for each greeting
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                          className="inline-block text-center md:text-left"
                        >
                          {greetings[currentGreeting] + "!"}
                        </motion.div>
                      </AnimatePresence>
                    </motion.div>
                    <motion.div
                      layout
                      className="inline-block mt-2 md:mt-0 md:ml-4 text-center md:text-left"
                    >
                      {"I'm Sai Rangineeni".split("").map((char, index) => (
                        <motion.span
                          key={`${char}-${index}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 1.0,
                            delay: 1.2 + index * 0.08,
                            ease: "easeInOut",
                          }}
                          style={{ display: "inline-block" }}
                        >
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.h1>

                  <motion.p
                    className="text-lg md:text-md text-gray-300 mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                  >
                    Senior at <span className="font-light">Penn State</span>{" "}
                    pursuing a{" "}
                    <span className="font-light">
                      B.S. in Application Development
                    </span>
                    .
                  </motion.p>

                  <motion.p
                    className="text-lg md:text-md text-gray-300 mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                  >
                    I enjoy solving problems, building applications, and
                    learning.
                  </motion.p>

                  <motion.p
                    className="text-md md:text-md text-gray-300 mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
                  >
                    Explore my portfolio to view my{" "}
                    <a href="/Projects" className="hover:underline">
                      <span className="font-light">projects</span>
                    </a>{" "}
                    and{" "}
                    <a href="/Experience" className="hover:underline">
                      <span className="font-light">experience</span>
                    </a>
                    .
                  </motion.p>

                  <motion.a
                    href="/Contact"
                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-extralight py-2 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 2, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Me
                  </motion.a>
                  <motion.div
                    className="mt-6 flex justify-center md:justify-start space-x-6"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
                  >
                    {[
                      {
                        href: "https://www.linkedin.com/in/sairangineeni/",
                        icon: FaLinkedin,
                        color: "text-blue-500",
                        label: "Linkedin",
                      },
                      {
                        href: "https://github.com/Sai4158",
                        icon: FaGithub,
                        color: "text-gray-200",
                        label: "Github",
                      },
                      {
                        href: "https://leetcode.com/u/Sairangineeni/",
                        icon: SiLeetcode,
                        color: "text-orange-500",
                        label: "Leetcode",
                      },
                      {
                        href: "mailto:sairangineeni1@gmail.com",
                        icon: FaEnvelope,
                        color: "text-slate-200",
                        label: "Email",
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
                        className={`${social.color} hover:text-blue-400 transition duration-300`}
                        aria-label={social.label}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 2.4 + index * 0.1,
                          ease: "easeOut",
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <social.icon size={30} />
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}
