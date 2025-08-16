"use client";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Page() {
  const greetings = ["Hi", "Hola", "Hello", "Bonjour", "Greetings", "Welcome"];
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 4000); // Slower change: 4 seconds

    return () => clearInterval(interval);
  }, [greetings.length]);

  return (
    <div className="pb-10">
      <main className="px-4">
        <div className="flex justify-center min-h-screen">
          <div className="relative w-full lg:h-[525px] max-w-7xl bg-opacity-40 px-6 pb-10 rounded-lg shadow-lg overflow-hidden bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 hidden lg:block">
              <Image
                src="https://i.ibb.co/dQGwy7w/Sai-Profile-pic.jpg"
                alt="Sai Rangineeni"
                fill
                style={{ objectFit: "cover" }}
                className="opacity-15 blur-md pointer-events-none"
              />
            </div>

            {/* Content Section */}
            <div className="relative flex flex-col md:flex-row items-center justify-center w-full h-full">
              {/* Profile Picture Section */}
              <div className="relative w-full md:w-1/3 flex justify-center md:justify-end p-4 md:p-8 lg:p-16">
                <div className="relative w-64 h-48 md:w-80 md:h-56 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                  <a href="/404LOL">
                    <Image
                      src="https://i.ibb.co/dQGwy7w/Sai-Profile-pic.jpg"
                      alt="Sai Rangineeni"
                      width={320}
                      height={240}
                      className="w-full h-full object-cover"
                    />
                  </a>
                </div>
              </div>

              <div className="w-full md:w-2/3 mt-6 md:mt-0 md:ml-6 text-center md:text-left px-4 md:px-0">
                <br />
                <br />
                <h1 className="text-3xl md:text-5xl text-white mb-4 flex flex-col md:flex-row items-center">
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
                        initial={{ opacity: 0, filter: "blur(4px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(4px)" }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="inline-block text-center md:text-left"
                      >
                        {greetings[currentGreeting] + "!"}
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                  <motion.div
                    layout
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{
                      type: "spring",
                      damping: 20,
                      stiffness: 100,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                    className="inline-block mt-2 md:mt-0 md:ml-4 text-center md:text-left"
                  >
                    I&apos;m Sai Rangineeni
                  </motion.div>
                </h1>

                <p className="text-lg md:text-md text-gray-300 mb-4">
                  Senior at <span className="font-light">Penn State</span>{" "}
                  pursuing a{" "}
                  <span className="font-light">
                    B.S. in Application Development
                  </span>
                  .
                </p>
                {/* <p className="text-sm md:text-sm text-gray-300 mb-4">
                   <b>Skilled in</b> <br /> 
                  Java, Python, Next.js, JavaScript, React.js, Node.js,
                  Express.js, SQL, MongoDB & TailwindCSS.
                </p> */}

                <p className="text-lg md:text-md text-gray-300 mb-4">
                  I enjoy solving problems, building applications, and learning.
                </p>

                <p className="text-md md:text-md text-gray-300 mb-6">
                  Explore my portfolio to view my{" "}
                  <a href="/Projects" className="hover:underline">
                    <span className="font-light">projects</span>
                  </a>{" "}
                  and{" "}
                  <a href="/Experience" className="hover:underline">
                    <span className="font-light">experience</span>
                  </a>
                  .
                </p>

                <a
                  href="/Contact"
                  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-extralight py-2 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
                >
                  Contact Me
                </a>
                <div className="mt-6 flex justify-center md:justify-start space-x-6">
                  <a
                    href="https://www.linkedin.com/in/sairangineeni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 transition duration-300"
                    aria-label="Linkedin"
                  >
                    <FaLinkedin size={30} />
                  </a>
                  <a
                    href="https://github.com/Sai4158"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-blue-400 transition duration-300"
                    aria-label="Github"
                  >
                    <FaGithub size={30} />
                  </a>
                  <a
                    href="https://leetcode.com/u/Sairangineeni/"
                    target="_blank"
                    className="text-orange-500 hover:text-blue-400 transition duration-300"
                    aria-label="Leetcode"
                  >
                    <SiLeetcode size={30} />
                  </a>
                  <a
                    href="mailto:sairangineeni1@gmail.com"
                    className="text-slate-200 hover:text-blue-400 transition duration-300"
                    aria-label="Email"
                  >
                    <FaEnvelope size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
