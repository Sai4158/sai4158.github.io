import React from "react";

export default function Custom404() {
  return (
    <div className="min-h-screen mt-11 mb-10">
      <div className="flex flex-col md:flex-row justify-center  text-white px-6 font-thin">
        <a href="https://www.pranavramesh.dev/" target="_blank">
          <img
            src="/FunnyPranav.jpg"
            alt="Loading..."
            className="lg:h-96 rounded-lg mb-4 md:mb-0 md:mr-8 transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </a>
        <div className="text-center md:text-left">
          <h1 className="text-9xl font-bold text-red-200">404!</h1>
          <p className="text-6xl mb-5 mt-10">
            This page is playing hide and seek.
          </p>
          <div>
            <button className="mt-8">
              <a
                href="/"
                className="bg-blue-800 hover:bg-blue-600 text-white py-4 px-10 text-xl rounded-lg transition-all duration-300 ease-in-out"
              >
                Take me back home
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
