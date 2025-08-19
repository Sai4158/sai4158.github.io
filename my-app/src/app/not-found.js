"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Custom404() {
  const pressTimer = useRef();
  const buttonPressTimer = useRef();

  const handleMouseDown = () => {
    pressTimer.current = setTimeout(() => {
      window.open("https://i.ibb.co/Jwxb67HY/lp-image.jpg", "_blank");
    }, 3500);
  };

  const handleMouseUp = () => {
    clearTimeout(pressTimer.current);
  };

  const handleClick = (e) => {
    e.preventDefault();
    window.open("https://www.pranavramesh.dev/", "_blank");
  };

  const handleButtonMouseDown = () => {
    buttonPressTimer.current = setTimeout(() => {
      window.open("https://i.ibb.co/bjLk8rnh/IMG-8989.png", "_blank");
    }, 3500);
  };

  const handleButtonMouseUp = () => {
    clearTimeout(buttonPressTimer.current);
  };

  useEffect(() => {
    return () => {
      clearTimeout(pressTimer.current);
      clearTimeout(buttonPressTimer.current);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-screen mt-11 mb-10"
    >
      <div className="flex flex-col md:flex-row justify-center text-white px-6 font-thin">
        <a
          href="https://www.pranavramesh.dev/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
        >
          <motion.div whileTap={{ scale: 0.95 }}>
            <Image
              src="/FunnyPranav.jpg"
              alt="Loading..."
              className="lg:h-96 rounded-lg mb-4 md:mb-0 md:mr-8 transition-transform duration-300 ease-in-out transform hover:scale-105"
              width={384}
              height={576}
              onDragStart={(e) => e.preventDefault()}
              style={{ userSelect: "none", WebkitTouchCallout: "none" }}
            />
          </motion.div>
        </a>
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            className="text-9xl font-bold text-red-200"
          >
            404!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
            className="text-6xl mb-5 mt-10"
          >
            This page is playing hide and seek.
          </motion.p>
          <div>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
              className="mt-8 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <motion.div whileTap={{ scale: 0.95 }}>
                <a
                  href="/"
                  className="bg-blue-800 hover:bg-blue-600 text-white py-4 px-10 text-xl rounded-lg transition-all duration-300 ease-in-out"
                  onMouseDown={handleButtonMouseDown}
                  onMouseUp={handleButtonMouseUp}
                  onTouchStart={handleButtonMouseDown}
                  onTouchEnd={handleButtonMouseUp}
                >
                  Take me back home
                </a>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
