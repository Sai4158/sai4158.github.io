"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const ProjectCard = ({ project, index = 0 }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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
      className="bg-black/20 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden cursor-pointer border border-white/10 group"
      onClick={() =>
        window.open(project.liveUrl || project.githubUrl, "_blank")
      }
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
      <div className="relative overflow-hidden">
        {project.imageUrl ? (
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-44 object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        ) : (
          <div className="h-44 flex items-center justify-center bg-gradient-to-br from-gray-800/50 to-gray-900/50">
            <motion.h3
              className="text-2xl font-light text-white/50"
              whileHover={{ opacity: 0.7 }}
              transition={{ duration: 0.6 }}
            >
              {project.title}
            </motion.h3>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-xl font-light mb-2 text-white">{project.title}</h3>
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
