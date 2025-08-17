"use client";

import ProjectCard from "../../Components/ProjectCard";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "GV Cricket Scorekeeper",
    imageUrl: "/gvLogo.webp",
    description:
      "A complete, end-to-end solution for managing and scoring cricket matches.",
    tags: ["Next.js", "React 19", "MongoDB", "Framer Motion"],
    githubUrl: "https://github.com/Sai4158/gvcricket",
    liveUrl: "https://gvcricket.com",
  },
  {
    title: "Fruit Storefront",
    imageUrl: "/FruitStoreFront.jpg",
    description:
      "A feature-rich online storefront with browsing, search, cart, and full CRUD operations.",
    tags: ["AngularJS", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Sai4158/IST256_StoreFront",
    liveUrl: "https://storefront256.vercel.app/",
  },
  {
    title: "Comcast Inquire",
    imageUrl: "/ComcastInquire.png",
    description:
      "An AI-powered customer support agent that leverages GPT-4 to provide intelligent assistance and enhance customer service efficiency.",
    tags: ["Next.js", "GPT-4", "Redis", "Clerk"],
    githubUrl: "https://github.com/Laphatize/comcast-inquire",
    liveUrl: "https://comcast-inquire.vercel.app/",
  },
  {
    title: "Engineering Projects",
    imageUrl: "/CAD.png",
    description:
      "Engineered a marble ladder automata using CAD, laser cutting, and 3D printing.",
    tags: ["CAD", "Onshape", "3D Printing"],
    githubUrl:
      "https://cad.onshape.com/documents/6a68262e48e7c9e68fd6c306/w/3fef6bd3b3b6402fe55b3bde/e/55f373827c28c5ed5f97f078?renderMode=0&uiState=65fcf8b5362fd31ffcd07ff2",
  },
  {
    title: "UMoments",
    imageUrl: "/UMoment.png",
    description:
      "A centralized platform for university students to discover and track campus events.",
    tags: ["Next.js", "Express.js", "Auth0", "MongoDB"],
    githubUrl: "https://github.com/umoment-tech",
    liveUrl: "https://umoment-frontend.vercel.app/",
  },
  {
    title: "Air-Pollution-App",
    description:
      "Web tool fetching and displaying real-time air quality data using OpenWeatherMap API.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    githubUrl: "https://github.com/Sai4158/Air-Pollution-App",
    liveUrl: "https://sai4158.github.io/Air-Pollution-App/",
  },
];

const otherProjects = [
  {
    title: "Bill Generator",
    description:
      "Demonstrated OOP principles through a comprehensive billing system.",
    tags: ["Java", "OOP"],
    githubUrl:
      "https://github.com/Sai4158/JavaPractice/tree/master/src/pizza_bill_genrator_project",
  },
  {
    title: "Icecream-store",
    description: "A responsive ice cream store website with a modern design.",
    tags: ["React", "Vite", "TailwindCSS"],
    githubUrl: "https://github.com/Sai4158/Icecream-store",
    liveUrl: "https://icecream-storee.vercel.app/",
  },
  {
    title: "Banking App",
    description: "Demonstrated OOP principles in a simple banking application.",
    tags: ["Java", "OOP"],
    githubUrl:
      "https://github.com/Sai4158/JavaPractice/tree/master/src/bankingApp",
  },
  {
    title: "Telecommunication Project",
    description:
      "Implemented a telecommunication system showcasing advanced Java concepts.",
    tags: ["Java", "OOP"],
    githubUrl:
      "https://github.com/Sai4158/JavaPractice/tree/master/src/telecommunicationProject",
  },
  {
    title: "Random-Color-Generator",
    description: "Developed a tool for generating random gradient backgrounds.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Sai4158/Random-Color-Generator",
    liveUrl: "https://sai4158.github.io/Random-Color-Generator/",
  },
  {
    title: "Cookie-Clicker",
    description: "Built a simple cookie clicker game.",
    tags: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/Sai4158/Cookie-Clicker",
    liveUrl: "https://sai4158.github.io/Cookie-Clicker/",
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <main className="pt-2 px-4 pb-12 mb-14">
        <motion.section
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl text-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            My Projects
          </motion.h1>
        </motion.section>

        <motion.section
          className="max-w-6xl mx-auto mt-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl font-light text-white mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: 0.9,
              ease: "easeOut",
            }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{
                  y: 30,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.4,
                  delay: 1.25 + index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="max-w-6xl mx-auto mt-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.4, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl font-light text-white mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: 1.6,
              ease: "easeOut",
            }}
          >
            Other Projects
          </motion.h2>
          <motion.div
            className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.75, ease: "easeOut" }}
          >
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{
                  y: 30,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.4,
                  delay: 2 + index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                <ProjectCard
                  project={project}
                  index={index + featuredProjects.length}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </main>
    </motion.div>
  );
}
