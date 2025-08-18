"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const education = {
  university: "The Pennsylvania State University",
  degree: "B.S. in Application Development",
  focus: "Data Science",
  gpa: "3.78",
  deansList: "Dean's List",
  graduation: "May 2026",
  courses: [
    "Application Development Studio I",
    "Complex Software Systems",
    "Database Administration",
    "Database Management and Administration",
    "Design in HCDD",
    "Distributed Object Computing",
    "Elementary Statistics",
    "Foundations of HCDD",
    "IT Project Management",
    "Introduction to Application Development",
    "Introduction to Data Science",
    "Introduction to Systems Design",
    "Language, Logic, and Discrete Mathematics",
    "Network Security",
    "Networking and Telecommunications",
    "Object-Oriented Application Development",
    "Object-Oriented Design and Software",
    "Organization of Data",
    "Overview of Information Security",
    "Programming for the Web",
    "Technical Calculus I",
  ],
  url: "https://www.psu.edu/",
};

const internships = [
  {
    company: "STiBaRC, LLC",
    role: "Software Engineer Intern",
    duration: "May 2025 - August 2025",
    location: "Delaware, OH",
    logo: "/stibarc.png",
    url: "https://stibarc.com/",
  },
  {
    company: "CTFGuide",
    role: "Software Engineer Intern",
    duration: "May 2024 - August 2024",
    location: "State College, PA",
    logo: "/Ctfguide.png",
    url: "https://ctfguide.com",
  },
];

const skills = [
  "Java",
  "AWS",
  "Spring Boot",
  "JavaScript",
  "React.js",
  "Next.js",
  "Express.js",
  "Node.js",
  "SQL",
  "MongoDB",
  "RESTful API",
  "MVC",
  "OOP",
  "DSA",
  "Tailwind CSS",
  "HTML5",
  "React Native",
  "Postman",
  "Wireframes",
  "Web Design",
  "Git",
  "CAD",
  "FL Studio",
  "Adobe Audition",
  "Adobe Illustrator",
  "After Effects",
  "Adobe Photoshop",
  "Microsoft Office",
  "Python",
];

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <main className="pt-1 pb-20 px-4">
        <motion.section
          id="experience"
          className=""
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl text-center mb-10"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            Experience
          </motion.h2>
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="bg-black/20 backdrop-blur-lg rounded-xl shadow-lg p-6 mb-8 border border-white/10"
              initial={{ x: -100, opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <motion.h3
                className="text-2xl mb-8 flex items-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="white"
                  className="mr-2"
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.2,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  <path d="M146.67-120q-27 0-46.84-19.83Q80-159.67 80-186.67v-466.66q0-27 19.83-46.84Q119.67-720 146.67-720H320v-93.33q0-27 19.83-46.84Q359.67-880 386.67-880h186.66q27 0 46.84 19.83Q640-840.33 640-813.33V-720h173.33q27 0 46.84 19.83Q880-680.33 880-653.33v466.66q0 27-19.83 46.84Q840.33-120 813.33-120H146.67Zm0-66.67h666.66v-466.66H146.67v466.66Zm240-533.33h186.66v-93.33H386.67V-720Zm-240 533.33v-466.66 466.66Z" />
                </motion.svg>
                Experience
              </motion.h3>

              <motion.div
                className="relative border-l-2 border-blue-400/30 ml-3 mt-4 pt-2"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
              >
                {internships.map((internship, index) => (
                  <motion.div
                    key={index}
                    className="mb-10 pl-8 relative group"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 1.0 + index * 0.18,
                      ease: "easeOut",
                    }}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  >
                    <motion.div
                      className="absolute left-[-9px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-800 border-2 border-blue-400 group-hover:bg-blue-300 transition-colors duration-300"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 1.2 + index * 0.18,
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    ></motion.div>
                    <motion.div
                      className="flex justify-between items-center"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 1.3 + index * 0.18,
                        ease: "easeOut",
                      }}
                    >
                      <div>
                        <motion.p
                          className="text-lg text-white"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 1.45 + index * 0.18,
                          }}
                        >
                          <a
                            href={internship.url}
                            target="_blank"
                            className="font-light hover:underline"
                          >
                            {internship.company}
                          </a>
                          , {internship.role}
                        </motion.p>
                        <motion.p
                          className="text-sm text-gray-400"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 1.6 + index * 0.18,
                          }}
                        >
                          {internship.duration}
                        </motion.p>
                        <motion.p
                          className="text-sm text-gray-400"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 1.75 + index * 0.18,
                          }}
                        >
                          {internship.location}
                        </motion.p>
                      </div>
                      <motion.div
                        initial={{ x: 50, opacity: 0, scale: 0.8 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: 1.9 + index * 0.18,
                          ease: "easeOut",
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Image
                          src={internship.logo}
                          alt={`${internship.company} Logo`}
                          width={150}
                          height={150}
                          className="rounded-xl cursor-pointer w-36 h-auto hover:opacity-90 z-20 transition-opacity duration-300"
                          onClick={() => window.open(internship.url, "_blank")}
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="bg-black/20 backdrop-blur-lg rounded-xl shadow-lg p-6 mb-8 border border-white/10 relative"
              initial={{ x: 100, opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 2.8, ease: "easeOut" }}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <motion.div
                className="flex justify-between items-start"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 3.0, ease: "easeOut" }}
              >
                <div>
                  <motion.h3
                    className="text-2xl mb-2 flex items-center flex-wrap"
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 3.15, ease: "easeOut" }}
                  >
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="40px"
                      viewBox="0 -960 960 960"
                      width="40px"
                      fill="white"
                      className="mr-2"
                      initial={{ rotate: -180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 3.3,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                    >
                      <path d="M479.33-120 192.67-276.67v-240L40-600l439.33-240L920-600v318h-66.67v-280L766-516.67v240L479.33-120Zm0-316 301.34-164-301.34-162-300 162 300 164Zm0 240.33 220-120.66v-162.34L479.33-360l-220-120v163.67l220 120.66ZM480-436Zm-.67 79.33Zm0 0Z" />
                    </motion.svg>
                    <a
                      href={education.url}
                      target="_blank"
                      className="hover:underline"
                    >
                      {education.university}
                    </a>
                  </motion.h3>
                  <motion.div
                    className="flex items-center gap-2 mb-2 flex-wrap"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 3.45, ease: "easeOut" }}
                  >
                    <p className="leading-loose text-white whitespace-nowrap">
                      {education.degree}
                    </p>
                    <motion.span
                      className="bg-black/10 backdrop-blur-lg text-yellow-400 px-2 py-0.5 rounded-full text-xs font-medium hidden sm:block"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {education.deansList}
                    </motion.span>
                  </motion.div>
                </div>
                <motion.div
                  className="flex-shrink-0 ml-4 flex flex-col items-end"
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 3.6, ease: "easeOut" }}
                >
                  <p className="text-sm text-gray-400 mb-1">
                    {education.graduation}
                  </p>
                  <p className="text-sm text-blue-300 font-medium">
                    GPA: {education.gpa}
                  </p>
                  <motion.span
                    className="bg-black/10 backdrop-blur-lg text-yellow-400 px-2 py-0.5 rounded-full text-xs font-medium sm:hidden mt-2"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {education.deansList}
                  </motion.span>
                </motion.div>
              </motion.div>

              <motion.div
                className="mt-6 flex flex-wrap justify-center gap-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 3.8, ease: "easeOut" }}
              >
                {education.courses.map((course, index) => (
                  <motion.span
                    key={index}
                    className="bg-transparent text-white/85 py-1.5 px-3 rounded-xl text-xs font-medium border border-white/20 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] hover:border-white/40 hover:bg-white/5 transition-colors"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 4.0 + index * 0.025,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {course}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-black/20 backdrop-blur-lg rounded-xl shadow-lg p-6 mb-8 border border-white/10"
              initial={{ y: 100, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 4.5, ease: "easeOut" }}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <motion.h3
                className="text-2xl mb-4 flex items-center"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 4.7, ease: "easeOut" }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="white"
                  className="mr-2"
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 4.85,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  <path d="m320-241.33-240-240 241.33-241.34L369-675 175-481l192.33 192.33L320-241.33ZM638.67-240 591-287.67l194-194L592.67-674 640-721.33l240 240L638.67-240Z" />
                </motion.svg>
                Skills
              </motion.h3>

              <motion.div
                className="flex flex-wrap justify-center gap-3 mt-6"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 5.0, ease: "easeOut" }}
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="bg-transparent text-white/85 py-1.5 px-3 rounded-xl text-xs font-medium border border-white/20 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] hover:border-white/40 hover:bg-white/5 transition-colors"
                    initial={{ scale: 0, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 5.2 + index * 0.025,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
    </motion.div>
  );
}
