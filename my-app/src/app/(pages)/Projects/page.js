"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "GV Cricket Scorekeeper",
      image: "/gvLogo.webp",
      description:
        "A complete, end-to-end solution for managing and scoring cricket matches. Features a dynamic UI, session management, team selection, an interactive coin toss, live umpire and spectator modes, and a final results page with charts.",
      techStack:
        "Next.js, React 19, Tailwind CSS, MongoDB, Mongoose, Framer Motion, Vercel",
      github: "https://github.com/Sai4158/gvcricket",
      live: "https://gvcricket.com",
    },
    {
      title: "Fruit Storefront",
      image: "/FruitStoreFront.jpg",
      description:
        "A feature-rich online storefront with browsing, search, cart, and full CRUD operations for products & shoppers. Live data updates and mobile-first responsive design.",
      techStack:
        "HTML, CSS, Bootstrap, AngularJS, Node.js, Express, MongoDB Atlas, Vercel",
      github: "https://github.com/Sai4158/IST256_StoreFront",
      live: "https://storefront256.vercel.app/",
    },
    {
      title: "Comcast Inquire",
      image: "/ComcastInquire.png",
      description:
        "Developed a chat assistant leveraging GPT-4 for enhancing Comcast sales and marketing efficiency. Utilized Next.js for server-side rendering, Clerk for authentication, Redis for caching, and Railway for deployment.",
      techStack: "Next.js, GPT-4, Clerk, Redis, Railway",
      github: "https://github.com/Laphatize/comcast-inquire",
      live: "https://comcast-inquire.vercel.app/",
      video: "https://www.youtube.com/watch?v=mzkpEsekaKg",
      article:
        "https://drexel.edu/cci/stories/hundreds-of-coders-harness-ai-for-social-good-at-philly-codefest-2024-sponsored-by-drexel-cci/#:~:text=for%20Comcast%20Products%3A-,Comcast%20Inquirer,-Members%3A%20Sai",
      award: "Winning project at Philly Codefest",
      team: "Pranav Ramesh, Sai Rangineeni",
    },
    {
      title: "UMoments",
      image: "/UMoment.png",
      description:
        "Created a centralized platform for university students to discover and track campus events. Built with Next.js for fast and dynamic UI, TailwindCSS for styling, Express.js and Node.js for the backend, Auth0 for authentication, and MongoDB for database management.",
      techStack: "Next.js, TailwindCSS, Express.js, Node.js, Auth0, MongoDB",
      github: "https://github.com/umoment-tech",
      live: "https://umoment-frontend.vercel.app/",
      hackathon: "HackPSU Spring 2024",
      team: "5 members",
    },
    {
      title: "Engineering Projects",
      image: "/CAD.png",
      description:
        "Engineered a marble ladder automata using CAD. Crafted with laser cutting and 3D printing techniques.",
      techStack: "CAD, Onshape, Laser Cutting, 3D Printing",
      live: "https://cad.onshape.com/documents/6a68262e48e7c9e68fd6c306/w/3fef6bd3b3b6402fe55b3bde/e/55f373827c28c5ed5f97f078?renderMode=0&uiState=65fcf8b5362fd31ffcd07ff2",
    },
    {
      title: "Pizza Bill Generator",
      image: null,
      description:
        "Demonstrated OOP principles through a comprehensive pizza billing system. Included inheritance, encapsulation, and polymorphism concepts. Built with Java, it calculates the final bill based on selected toppings and extras.",
      techStack: "Java, OOP",
      github:
        "https://github.com/Sai4158/JavaPractice/tree/master/src/pizza_bill_genrator_project",
    },
  ];
  return (
    <div>
      <main className="pt-2 px-4 pb-12 mb-14">
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Projects
          </h1>
          <p className="text-lg mt-4 text-gray-300">
            A showcase of my hackathons and project experiences.
          </p>
        </section>

        <section className="max-w-7xl mx-auto mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg h-48 w-full object-cover mb-4"
                  width={400}
                  height={225}
                />
              )}
              <h2 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm mb-4 flex-grow">
                {project.description}
              </p>
              <div className="mt-auto">
                <p className="text-gray-400 text-xs mb-4">
                  <span className="font-semibold">Tech Stack:</span>{" "}
                  {project.techStack}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        <FaGithub size={24} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        <FaExternalLinkAlt size={24} />
                      </a>
                    )}
                  </div>
                  {project.award && (
                    <span className="text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full">
                      {project.award}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
