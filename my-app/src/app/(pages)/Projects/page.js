"use client";

import Image from "next/image";

export default function Projects() {
  return (
    <div>
      <main className="pt-2 px-4 pb-12 mb-14">
        <section className="text-center">
          <h1 className="text-4xl ">Hackathons & Projects</h1>
          <p className="text-md mt-4">
            A showcase of my hackathons and project experiences.
          </p>
        </section>

        <section className="max-w-6xl mx-auto mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 masonry">
          {/* Comcast Inquire */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside hover:scale-105 transition-transform duration-700"
            onClick={() =>
              window.open(
                "https://github.com/Laphatize/comcast-inquire",
                "_blank"
              )
            }
          >
            <h2 className="text-2xl mb-2">Comcast Inquire</h2>
            <p className="mb-2">
              Developed a chat assistant leveraging GPT-4 for enhancing Comcast
              sales and marketing efficiency. Utilized <b>Next.js</b> for
              server-side rendering, Clerk for authentication, Redis for
              caching, and Railway for deployment.
            </p>
            <br />
            <p className="mb-2">
              <strong>Winning project</strong> at Philly Codefest.
            </p>
            <p className="mb-2">
              <strong>Team:</strong> Pranav Ramesh, Sai Rangineeni
            </p>
            <a
              href="https://github.com/Laphatize/comcast-inquire"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub Repo
            </a>
            <div className="mt-4">
              <a
                href="https://comcast-inquire.vercel.app/"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={(e) => e.stopPropagation()}
              >
                Try it out
              </a>
            </div>
            <div className="mt-4">
              <a
                href="https://www.youtube.com/watch?v=mzkpEsekaKg"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={(e) => e.stopPropagation()}
              >
                Video Demo
              </a>
            </div>
            <div className="mt-4">
              <a
                href="https://drexel.edu/cci/stories/hundreds-of-coders-harness-ai-for-social-good-at-philly-codefest-2024-sponsored-by-drexel-cci/"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={(e) => e.stopPropagation()}
              >
                Article
              </a>
            </div>
          </div>

          {/* UMoments Project */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside hover:scale-105 transition-transform duration-700"
            onClick={() =>
              window.open("https://devpost.com/software/umoment", "_blank")
            }
          >
            <h2 className="text-2xl mb-2">UMoments</h2>
            <p className="mb-2">
              Created a centralized platform for university students to discover
              and track campus events. Built with <b>Next.js</b> for fast and
              dynamic UI, <b>TailwindCSS</b> for styling, <b>Express.js</b> and{" "}
              <b>Node.js</b> for the backend, Auth0 for authentication, and
              MongoDB for database management.
            </p>
            <br />
            <p className="mb-2">
              <strong>Team:</strong> 5 members
            </p>
            <p className="mb-2">
              <strong>Hackathon:</strong> HackPSU Spring 2024
            </p>
            <a
              href="https://github.com/umoment-tech"
              target="_blank"
              className="text-blue-500 hover:text-blue-400 z-30"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub Repo
            </a>
            <div className="mt-4">
              <br />
              <a
                href="https://umoment-frontend.vercel.app/"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 z-40"
                onClick={(e) => e.stopPropagation()}
              >
                Try it out
              </a>
            </div>
          </div>

          {/* Personal Engineering Projects */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside hover:scale-105 transition-transform duration-700"
            onClick={() =>
              window.open(
                "https://cad.onshape.com/documents/6a68262e48e7c9e68fd6c306/w/3fef6bd3b3b6402fe55b3bde/e/55f373827c28c5ed5f97f078?renderMode=0&uiState=65fcf8b5362fd31ffcd07ff2",
                "_blank"
              )
            }
          >
            <h2 className="text-2xl mb-2">Engineering Projects</h2>
            <Image
              src="/CAD.png"
              alt="CAD Project"
              className="rounded-lg h-44 w-full object-cover mt-2"
              width={400}
              height={200}
            />
            <p className="mt-4 mb-2">
              Engineered a marble ladder automata using CAD. Crafted with laser
              cutting and 3D printing techniques.
            </p>
            <div className="mt-4">
              <br />
              <a
                href="https://cad.onshape.com/documents/6a68262e48e7c9e68fd6c306/w/3fef6bd3b3b6402fe55b3bde/e/55f373827c28c5ed5f97f078?renderMode=0&uiState=65fcf8b5362fd31ffcd07ff2"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={(e) => e.stopPropagation()}
              >
                CAD Automata Project
              </a>
            </div>
          </div>

          {/* Pizza Bill Generator Project */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside hover:scale-105 transition-transform duration-700"
            onClick={() =>
              window.open(
                "https://github.com/Sai4158/JavaPractice/tree/master/src/pizza_bill_genrator_project",
                "_blank"
              )
            }
          >
            <h2 className="text-2xl mb-2">Pizza Bill Generator</h2>
            <p className="mb-2">
              Demonstrated OOP principles through a comprehensive pizza billing
              system. Included inheritance, encapsulation, and polymorphism
              concepts. Built with <b>Java</b>, it calculates the final bill
              based on selected toppings and extras.
            </p>
            <a
              href="https://github.com/Sai4158/JavaPractice/tree/master/src/pizza_bill_genrator_project"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub Repo
            </a>
          </div>

          {/* Air-Pollution-App Project */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside hover:scale-105 transition-transform duration-700"
            onClick={() =>
              window.open(
                "https://sai4158.github.io/Air-Pollution-App/",
                "_blank"
              )
            }
          >
            <h2 className="text-2xl mb-2">Air-Pollution-App</h2>
            <p className="mb-2">
              Web tool fetching and displaying real-time air quality data using
              OpenWeatherMap API. Built with <b>HTML</b>, <b>CSS</b>, and{" "}
              <b>JavaScript</b>.
            </p>
            <a
              href="https://github.com/Sai4158/Air-Pollution-App"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub Repo
            </a>
            <div className="mt-4">
              <a
                href="https://sai4158.github.io/Air-Pollution-App/"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={(e) => e.stopPropagation()}
              >
                Try it out
              </a>
            </div>
          </div>

          {/* Banking App Project */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside hover:scale-105 transition-transform duration-700"
            onClick={() =>
              window.open(
                "https://github.com/Sai4158/JavaPractice/tree/master/src/bankingApp",
                "_blank"
              )
            }
          >
            <h2 className="text-2xl mb-2">Banking App</h2>
            <p className="mb-2">
              Demonstrated OOP principles in a simple banking application.
              Managed account details, deposits, and withdrawals. Built with
              <b> Java</b>, it includes account number, balance, and personal
              information management.
            </p>
            <a
              href="https://github.com/Sai4158/JavaPractice/tree/master/src/bankingApp"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub Repo
            </a>
          </div>

          {/* Telecommunication Project */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside hover:scale-105 transition-transform duration-700"
            onClick={() =>
              window.open(
                "https://github.com/Sai4158/JavaPractice/tree/master/src/telecommunicationProject",
                "_blank"
              )
            }
          >
            <h2 className="text-2xl mb-2">Telecommunication Project</h2>
            <p className="mb-2">
              Implemented a telecommunication system showcasing advanced{" "}
              <b>Java </b>
              concepts. Focused on user data management, OOP principles, error
              handling, and data validation.
            </p>
            <a
              href="https://github.com/Sai4158/JavaPractice/tree/master/src/telecommunicationProject"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub Repo
            </a>
          </div>

          {/* Icecream-store Project */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside hover:scale-105 transition-transform duration-700"
            onClick={() =>
              window.open("https://icecream-storee.vercel.app/", "_blank")
            }
          >
            <h2 className="text-2xl mb-2">Icecream-store</h2>
            <p className="mb-2">
              Created a responsive ice cream store website. Utilized{" "}
              <b>React</b> for UI components, <b>Vite</b> for development build,
              and <b>TailwindCSS</b> for styling.
            </p>
            <a
              href="https://github.com/Sai4158/Icecream-store"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub Repo
            </a>
            <div className="mt-4">
              <a
                href="https://icecream-storee.vercel.app/"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={(e) => e.stopPropagation()}
              >
                Try it out
              </a>
            </div>
          </div>

          {/* Random-Color-Generator Project */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside hover:scale-105 transition-transform duration-700"
            onClick={() =>
              window.open(
                "https://sai4158.github.io/Random-Color-Generator/",
                "_blank"
              )
            }
          >
            <h2 className="text-2xl mb-2">Random-Color-Generator</h2>
            <p className="mb-2">
              Developed a tool for generating random gradient backgrounds. Built
              with <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>.
            </p>
            <a
              href="https://github.com/Sai4158/Random-Color-Generator"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub Repo
            </a>
            <div className="mt-4">
              <a
                href="https://sai4158.github.io/Random-Color-Generator/"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={(e) => e.stopPropagation()}
              >
                Try it out
              </a>
            </div>
          </div>

          {/* Cookie-Clicker Project */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside hover:scale-105 transition-transform duration-700"
            onClick={() =>
              window.open("https://sai4158.github.io/Cookie-Clicker/", "_blank")
            }
          >
            <h2 className="text-2xl mb-2">Cookie-Clicker</h2>
            <p className="mb-2">
              Built a simple cookie clicker game using <b>JavaScript</b>,{" "}
              <b>HTML</b>, and <b>CSS</b>.
            </p>
            <a
              href="https://github.com/Sai4158/Cookie-Clicker"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub Repo
            </a>
            <div className="mt-4">
              <a
                href="https://sai4158.github.io/Cookie-Clicker/"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={(e) => e.stopPropagation()}
              >
                Try it out
              </a>
            </div>
          </div>

          {/* Other projects */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside hover:scale-105 transition-transform duration-700"
            onClick={() => window.open("https://github.com/Sai4158", "_blank")}
          >
            <h2 className="text-2xl mb-2">Other Projects</h2>
            <ul className="list-disc list-inside">
              <li>
                <a
                  href="https://github.com/Sai4158/WebDev_Practice"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-400"
                >
                  Web development
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Sai4158/JavaPractice"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-400"
                >
                  Java
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
