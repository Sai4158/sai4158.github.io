"use client";

import React from "react";

export default function Page() {
  return (
    <div>
      <main className="pt-1 pb-20 px-4">
        <section id="experience" className="">
          <h2 className="text-3xl text-center mb-10">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md mb-8 backdrop-blur-md hover:scale-105 transition-transform duration-1000 ">
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
                Education
              </h3>
              <p className="leading-loose">
                <a
                  href="https://www.psu.edu/"
                  target="_blank"
                  className="hover:underline transition-transform font-semibold"
                >
                  The Pennsylvania State University
                </a>
                , <b>Human-Centered Design & Development</b>,{" "}
                <b>Data Science</b>
                <br />
                Dean's List: Spring 2024, GPA: 3.94
                <br />
                Graduation: May 2026
              </p>
            </div>

            <div className="bg-black bg-opacity-25 p-6 rounded-lg shadow-md mb-8 backdrop-blur-md hover:scale-105 transition-transform duration-1000 ">
              <h3 className="text-2xl  mb-2 flex items-center">
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
                Internship
              </h3>
              <div className="flex items-center">
                <div className="flex-1">
                  <div className="flex-none lg:hidden md:hidden mb-4">
                    <img
                      src="/Ctfguide.png"
                      alt="CTFGuide Logo"
                      width={100}
                      height={100}
                      className="hover:opacity-80 cursor-pointer"
                      onClick={() =>
                        window.open("https://ctfguide.com", "_blank")
                      }
                    />
                  </div>
                  {/* <p className="leading-loose">
                    <strong>Company:</strong> CTFGuide
                    <br />
                    <strong>Role:</strong> Software Engineer Intern
                    <br />
                    <strong>Duration:</strong> May 2024 - Present (3 months)
                    <br />
                    <strong>Location:</strong> State College, PA (Hybrid)
                    <br />
                    <br />
                    As a Software Engineer Intern at CTFGuide, I contributed to
                    building and optimizing user settings and profile settings.
                    My role involved working extensively with Next.js,
                    Javascript, TailwindCSS, React.js, Git, and agile
                    development practices.
                  </p> */}

                  <p className="leading-loose">
                    <a
                      href="https://ctfguide.com/"
                      target="_blank"
                      className="underline hover:text-blue-400 transition-transform cursor-pointer"
                    >
                      <b>CTFGuide</b>
                    </a>{" "}
                    , Software Engineer Intern
                    <br />
                    Duration: May 2024 - Present (3 months)
                    <br />
                    Location: State College, PA (Hybrid)
                    <br />
                    <br />
                    Focused on building and optimizing user settings and profile
                    settings using <b>Next.js</b>, <b>JavaScript</b>,{" "}
                    <b>TailwindCSS</b>, <b>Express.js</b>, <b>Git</b>, and{" "}
                    <b>Agile development</b>.
                  </p>
                </div>
                <div className="flex-none ml-4 sm:block hidden ">
                  <img
                    src="/Ctfguide.png"
                    alt="CTFGuide Logo"
                    width={200}
                    height={200}
                    className="hover:opacity-90 hover:scale-110 z-20 transition-transform cursor-pointer"
                    onClick={() =>
                      window.open("https://ctfguide.com", "_blank")
                    }
                  />
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md backdrop-blur-md hover:scale-105 transition-transform duration-1000">
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
                {[
                  "Java",
                  "JavaScript",
                  "React.js",
                  "Next.js",
                  "Express.js",
                  "Node.js",
                  "SQL",
                  "MongoDB",
                  "Tailwind CSS",
                  "HTML5",
                  "Vite",
                  "Wireframes",
                  "Web Design",
                  "Web Development",
                  "Git",
                  "CAD",
                  "FL Studio",
                  "Adobe Audition",
                  "Adobe Illustrator",
                  "Video Editing",
                  "After Effects",
                  "Adobe Photoshop",
                  "Microsoft Office",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 text-white py-2 px-4 rounded-full backdrop-blur-md bg-opacity-60 hover:bg-opacity-100 hover:scale-105 transition-all duration-300"
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
