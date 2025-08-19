"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function Custom404() {
  const pressTimer = useRef();
  const buttonPressTimer = useRef();
  const [popup, setPopup] = useState({
    visible: false,
    url: "",
    title: "",
    message: "",
  });

  const handleMouseDown = () => {
    pressTimer.current = setTimeout(() => {
      setPopup({
        visible: true,
        url: "https://i.ibb.co/Jwxb67HY/lp-image.jpg",
        title: "Secret 1",
        message: "You've found a hidden image. Click to view.",
      });
    }, 2500);
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
      setPopup({
        visible: true,
        url: "https://i.ibb.co/bjLk8rnh/IMG-8989.png",
        title: "Secret 2",
        message: "You've discovered another hidden gem. Click to view.",
      });
    }, 2500);
  };

  const handleButtonMouseUp = () => {
    clearTimeout(buttonPressTimer.current);
  };

  const closePopup = () => {
    setPopup({ visible: false, url: "", title: "", message: "" });
  };

  useEffect(() => {
    return () => {
      clearTimeout(pressTimer.current);
      clearTimeout(buttonPressTimer.current);
    };
  }, []);

  return (
    <>
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
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
                className="mt-8 transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                <motion.div whileTap={{ scale: 0.95 }}>
                  <a
                    href="/"
                    className="bg-blue-800 hover:bg-blue-600 text-white py-4 px-10 text-xl rounded-lg transition-all duration-300 ease-in-out relative inline-block select-none"
                    onMouseDown={handleButtonMouseDown}
                    onMouseUp={handleButtonMouseUp}
                    onTouchStart={handleButtonMouseDown}
                    onTouchEnd={handleButtonMouseUp}
                    onDragStart={(e) => e.preventDefault()}
                    style={{
                      userSelect: "none",
                      WebkitUserSelect: "none",
                      msUserSelect: "none",
                      WebkitTouchCallout: "none",
                      pointerEvents: "none",
                    }}
                  >
                    <span>Take me back home</span>
                    <div
                      className="absolute inset-0"
                      style={{ pointerEvents: "auto" }}
                    ></div>
                  </a>
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {popup.visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-md"
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: -30 }}
              animate={{ scale: 1, opacity: 1, y: -80 }}
              exit={{ scale: 0.9, opacity: 0, y: -30 }}
              transition={{ type: "spring", stiffness: 150, damping: 30 }}
              className="bg-black/20 backdrop-blur-lg border border-white/10 text-white rounded-lg shadow-xl p-6 m-4 w-full max-w-xs sm:max-w-md relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closePopup}
                className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
              >
                <FiX size={24} />
              </button>
              <h3 className="text-2xl font-light mb-4">{popup.title}</h3>
              <p className="mb-6 font-light text-white/80">{popup.message}</p>
              <a
                href={popup.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-800 hover:bg-blue-600 text-white text-center font-light py-3 px-4 rounded-lg transition-all duration-300 ease-in-out"
              >
                Click to View
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
