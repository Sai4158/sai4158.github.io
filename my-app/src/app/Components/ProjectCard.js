"use client";

import Image from "next/image";
import { FaGithub, FaYoutube, FaAward } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";

// Global cache to store preloaded images and prevent duplicate requests
const imageCache = new Set();

const ProjectCard = ({ project, index = 0 }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const autoplayTimeoutRef = useRef(null);

  // Memoize images array to prevent unnecessary re-renders and re-preloading
  const images = useMemo(() => {
    const imageArray =
      project.imageUrls || (project.imageUrl ? [project.imageUrl] : []);
    // Remove duplicates by converting to Set and back to Array
    return [...new Set(imageArray)];
  }, [project.imageUrls, project.imageUrl]);

  const startAutoplay = () => {
    if (images.length <= 1) return;
    stopAutoplay(); // Clear existing timer
    autoplayTimeoutRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1500);
  };

  const stopAutoplay = () => {
    if (autoplayTimeoutRef.current) {
      clearInterval(autoplayTimeoutRef.current);
      autoplayTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    // Preload images only if they haven't been cached yet
    images.forEach((src) => {
      if (!imageCache.has(src)) {
        const img = new window.Image();
        img.onload = () => {
          imageCache.add(src);
        };
        img.onerror = () => {
          console.warn(`Failed to preload image: ${src}`);
        };
        img.src = src;
      }
    });
  }, [images]); // Depend on memoized images array

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [images.length]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Very fast and responsive magnetic effect
    setMousePosition({ x: mouseX * 0.12, y: mouseY * 0.12 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className="bg-black/20 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden border border-white/10 group"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isHovered ? 1.02 : 1,
        rotateX: mousePosition.y * 0.1,
        rotateY: mousePosition.x * 0.1,
      }}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 8,
        mass: 0.2,
      }}
      whileHover={{
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
        transition: {
          type: "spring",
          stiffness: 800,
          damping: 5,
        },
      }}
    >
      <div
        className="relative overflow-hidden h-44 cursor-pointer"
        onClick={() =>
          window.open(project.liveUrl || project.githubUrl, "_blank")
        }
      >
        {images.length > 0 ? (
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImage}
              className="absolute inset-0"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src={images[currentImage]}
                alt={`${project.title} screenshot ${currentImage + 1}`}
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-800/50 to-gray-900/50">
            <h3 className="text-2xl font-light text-white/50">
              {project.title}
            </h3>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-light text-white">{project.title}</h3>
          {project.isActive && (
            <span className="bg-green-500/20 text-green-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Active
            </span>
          )}
        </div>
        <p className="text-gray-300 text-sm mb-4 h-12 overflow-hidden">
          {project.description}
        </p>

        <motion.div
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.4 + index * 0.15,
            ease: "easeOut",
          }}
        >
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              className="bg-white/10 text-white/80 text-xs font-light px-2.5 py-1 rounded-full"
              initial={{ scale: 0, y: 20, rotate: -45 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.5 + index * 0.15 + tagIndex * 0.05,
                type: "spring",
                stiffness: 300,
                damping: 10,
              }}
              whileHover={{
                scale: 1.2,
                y: -3,
                backgroundColor: "rgba(255,255,255,0.2)",
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                },
              }}
              whileTap={{
                scale: 0.9,
                transition: {
                  type: "spring",
                  stiffness: 600,
                  damping: 15,
                },
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-end items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.6 + index * 0.15,
            ease: "easeOut",
          }}
        >
          {project.awardUrl && (
            <motion.a
              href={project.awardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-500"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0, rotate: -360, y: 50 }}
              animate={{ scale: 1, rotate: 0, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.7 + index * 0.15,
                type: "spring",
                stiffness: 200,
                damping: 8,
              }}
              whileHover={{
                scale: 1.3,
                rotate: 15,
                color: "#FBBF24",
                y: -5,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                },
              }}
              whileTap={{
                scale: 0.8,
                rotate: -15,
                transition: {
                  type: "spring",
                  stiffness: 600,
                  damping: 15,
                },
              }}
            >
              <FaAward size={24} />
            </motion.a>
          )}
          {project.videoUrl && (
            <motion.a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors duration-500"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0, rotate: 360, y: 50 }}
              animate={{ scale: 1, rotate: 0, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.8 + index * 0.15,
                type: "spring",
                stiffness: 200,
                damping: 8,
              }}
              whileHover={{
                scale: 1.3,
                rotate: -15,
                color: "#EF4444",
                y: -5,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                },
              }}
              whileTap={{
                scale: 0.8,
                rotate: 15,
                transition: {
                  type: "spring",
                  stiffness: 600,
                  damping: 15,
                },
              }}
            >
              <FaYoutube size={24} />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-500"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0, rotate: -360, y: 50 }}
              animate={{ scale: 1, rotate: 0, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.7 + index * 0.15,
                type: "spring",
                stiffness: 200,
                damping: 8,
              }}
              whileHover={{
                scale: 1.3,
                rotate: 15,
                color: "#ffffff",
                y: -5,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                },
              }}
              whileTap={{
                scale: 0.8,
                rotate: -15,
                transition: {
                  type: "spring",
                  stiffness: 600,
                  damping: 15,
                },
              }}
            >
              <FaGithub size={24} />
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-500"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0, rotate: 360, y: 50 }}
              animate={{ scale: 1, rotate: 0, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.8 + index * 0.15,
                type: "spring",
                stiffness: 200,
                damping: 8,
              }}
              whileHover={{
                scale: 1.3,
                rotate: -15,
                color: "#ffffff",
                y: -5,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                },
              }}
              whileTap={{
                scale: 0.8,
                rotate: 15,
                transition: {
                  type: "spring",
                  stiffness: 600,
                  damping: 15,
                },
              }}
            >
              <FiExternalLink size={24} />
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
