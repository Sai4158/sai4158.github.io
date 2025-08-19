"use client";

import ProjectCard from "../../Components/ProjectCard";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "GV Cricket",
    imageUrls: [
      "/gvLogo.webp",
      "/gv1.jpg",
      "/gv2.jpg",
      "/gvLogo.webp",
      "/gv3.jpg",
      "/gv4.jpg",
      "/gv5.jpg",
    ],
    description:
      "An end-to-end cricket scoring solution used by 50+ community members.",
    tags: ["Next.js", "TailwindCSS", "MongoDB", "Framer Motion"],
    githubUrl: "https://github.com/Sai4158/gvcricket",
    liveUrl: "https://gvcricket.com",
    isActive: true,
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
      "A GPT-4 powered customer support agent that won the Comcast prize at Philly Codefest.",
    tags: ["Next.js", "GPT-4", "Redis", "Clerk"],
    githubUrl: "https://github.com/Laphatize/comcast-inquire",
    liveUrl: "https://comcast-inquire.vercel.app/",
    awardUrl:
      "https://drexel.edu/cci/stories/hundreds-of-coders-harness-ai-for-social-good-at-philly-codefest-2024-sponsored-by-drexel-cci/#:~:text=Comcast%20Prize%20Winners",
    videoUrl: "https://www.youtube.com/watch?v=mzkpEsekaKg",
  },
  {
    title: "Engineering Project",
    imageUrl: "/CAD.png",
    description:
      "Engineered a marble ladder automata using CAD, laser cutting, and 3D printing.",
    tags: ["CAD", "Onshape", "3D Printing"],
    liveUrl:
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
    imageUrl: "/AirPollution.jpg",
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
  const cardVariants = [
    {
      initial: { opacity: 0, x: "-100vw", rotate: -15 },
      animate: { opacity: 1, x: 0, rotate: 0 },
    },
    {
      initial: { opacity: 0, y: "100vh", scale: 0.7 },
      animate: { opacity: 1, y: 0, scale: 1 },
    },
    {
      initial: { opacity: 0, x: "100vw", rotate: 15 },
      animate: { opacity: 1, x: 0, rotate: 0 },
    },
    {
      initial: { opacity: 0, x: "-100vw", y: "50vh", rotate: 15 },
      animate: { opacity: 1, x: 0, y: 0, rotate: 0 },
    },
    {
      initial: { opacity: 0, y: "-100vh", scale: 0.7 },
      animate: { opacity: 1, y: 0, scale: 1 },
    },
    {
      initial: { opacity: 0, x: "100vw", y: "-50vh", rotate: -15 },
      animate: { opacity: 1, x: 0, y: 0, rotate: 0 },
    },
  ];
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
          ></motion.h2>
          <motion.div
            className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
          >
            {featuredProjects.map((project, index) => {
              const variant = cardVariants[index % cardVariants.length];
              return (
                <motion.div
                  key={project.title}
                  initial={variant.initial}
                  animate={variant.animate}
                  transition={{
                    duration: 1.5,
                    delay: 0.5 + index * 0.25,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              );
            })}
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
            {otherProjects.map((project, index) => {
              const variantIndex =
                (index + featuredProjects.length) % cardVariants.length;
              const variant = cardVariants[variantIndex];
              return (
                <motion.div
                  key={project.title}
                  initial={variant.initial}
                  animate={variant.animate}
                  transition={{
                    duration: 1.5,
                    delay: 0.5 + (index + featuredProjects.length) * 0.25,
                    ease: "easeInOut",
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
              );
            })}
          </motion.div>
        </motion.section>
      </main>
    </motion.div>
  );
}
