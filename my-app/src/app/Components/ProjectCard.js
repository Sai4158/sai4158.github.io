"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="bg-white/5 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer border border-white/10"
      onClick={() =>
        window.open(project.liveUrl || project.githubUrl, "_blank")
      }
    >
      {project.imageUrl ? (
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={400}
          height={200}
          className="w-full h-44 object-cover"
        />
      ) : (
        <div className="h-44 flex items-center justify-center">
          <h3 className="text-2xl font-light text-white/50">{project.title}</h3>
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-light mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4 h-12 overflow-hidden">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/10 text-white/80 text-xs font-light px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-end items-center gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub size={24} />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
