"use client";

import React from "react";
import Image from "next/image";

const education = {
  university: "The Pennsylvania State University",
  degree: "B.S. in Application Development",
  focus: "Data Science",
  gpa: "3.78",
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
    duration: "May 2025 - August 2025 (4 mos)",
    location: "Delaware, OH",
    logo: "/stibarc.png",
    url: "https://stibarc.com/",
  },
  {
    company: "CTFGuide",
    role: "Software Engineer Intern",
    duration: "May 2024 - August 2024 (4 mos)",
    location: "State College, PA",
    logo: "/Ctfguide.png",
    url: "https://ctfguide.com",
  },
];

const skills = [
  "Java",
  "Spring Boot",
  "JavaScript",
  "AWS",
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
    <div>
      <main className="pt-1 pb-20 px-4">
        <section id="experience" className="">
          <h2 className="text-3xl text-center mb-10">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/20 backdrop-blur-lg rounded-xl shadow-lg p-6 mb-8 border border-white/10 hover:scale-105 transition-transform duration-700">
              <h3 className="text-2xl mb-8 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="white"
                  className="mr-2"
                >
                  <path d="M146.67-120q-27 0-46.84-19.83Q80-159.67 80-186.67v-466.66q0-27 19.83-46.84Q119.67-720 146.67-720H320v-93.33q0-27 19.83-46.84Q359.67-880 386.67-880h186.66q27 0 46.84 19.83Q640-840.33 640-813.33V-720h173.33q27 0 46.84 19.83Q880-680.33 880-653.33v466.66q0 27-19.83 46.84Q840.33-120 813.33-120H146.67Zm0-66.67h666.66v-466.66H146.67v466.66Zm240-533.33h186.66v-93.33H386.67V-720Zm-240 533.33v-466.66 466.66Z" />
                </svg>
                Experience
              </h3>

              <div className="relative border-l-2 border-blue-400/30 ml-3 mt-4 pt-2">
                {internships.map((internship, index) => (
                  <div key={index} className="mb-10 pl-8 relative group">
                    <div className="absolute left-[-9px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-800 border-2 border-blue-400 group-hover:bg-blue-300 transition-colors duration-300"></div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-lg text-white">
                          <a
                            href={internship.url}
                            target="_blank"
                            className="font-light hover:underline"
                          >
                            {internship.company}
                          </a>
                          , {internship.role}
                        </p>
                        <p className="text-sm text-gray-400">
                          {internship.duration}
                        </p>
                        <p className="text-sm text-gray-400">
                          {internship.location}
                        </p>
                      </div>
                      <Image
                        src={internship.logo}
                        alt={`${internship.company} Logo`}
                        width={150}
                        height={150}
                        className="rounded-xl cursor-pointer w-36 h-auto hover:opacity-90 hover:scale-110 z-20 transition-transform duration-700"
                        onClick={() => window.open(internship.url, "_blank")}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-black/20 backdrop-blur-lg rounded-xl shadow-lg p-6 mb-8 border border-white/10 hover:scale-105 transition-transform duration-700 relative">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="40px"
                      viewBox="0 -960 960 960"
                      width="40px"
                      fill="white"
                      className="mr-2"
                    >
                      <path d="M479.33-120 192.67-276.67v-240L40-600l439.33-240L920-600v318h-66.67v-280L766-516.67v240L479.33-120Zm0-316 301.34-164-301.34-162-300 162 300 164Zm0 240.33 220-120.66v-162.34L479.33-360l-220-120v163.67l220 120.66ZM480-436Zm-.67 79.33Zm0 0Z" />
                    </svg>
                    <a
                      href={education.url}
                      target="_blank"
                      className="hover:underline"
                    >
                      {education.university}
                    </a>
                  </h3>
                  <p className="leading-loose mb-4 text-white">
                    {education.degree}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">
                    {education.graduation}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {education.courses.map((course, index) => (
                  <span
                    key={index}
                    className="bg-white/10 text-white/80 py-0.5 px-2 rounded-full text-[10px] leading-tight"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-lg rounded-xl shadow-lg p-6 mb-8 border border-white/10 hover:scale-105 transition-transform duration-700">
              <h3 className="text-2xl mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="white"
                  className="mr-2"
                >
                  <path d="m320-241.33-240-240 241.33-241.34L369-675 175-481l192.33 192.33L320-241.33ZM638.67-240 591-287.67l194-194L592.67-674 640-721.33l240 240L638.67-240Z" />
                </svg>
                Skills
              </h3>

              <div className="flex flex-wrap gap-2 mt-6">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white/10 text-white/80 py-2 px-4 rounded-full text-sm hover:bg-white/20 hover:scale-110 transition-all duration-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
