import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <ClipLoader color="white" size={50} />
      <a
        href="/"
        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 mt-4"
      >
        Refresh
      </a>
    </div>
  );
};

export default Loading;
