"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  //   this is for the function to send the email
  function sendEmail(e) {
    e.preventDefault();

    // set spinner to true when button is clicked
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!", {
            position: "top-center",
          });
          toast.success("Message sent successfully!", {
            position: "bottom-center",
          });
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error(
            "Failed to send the message. Please try again or email me.",
            {
              position: "bottom-center",
            }
          );
          setLoading(false);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <main className="pt-1 mb-64 px-4">
        <ToastContainer />
        <section id="contact">
          <h2 className="text-3xl  text-center text-white">Contact Me</h2>
          <div className="max-w-3xl mx-auto mt-10">
            <form
              onSubmit={sendEmail}
              className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md mb-8"
            >
              <div className="mb-4">
                <label
                  className="block text-white text-lg mb-2"
                  htmlFor="from_name"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="from_name"
                  required
                  placeholder="Enter Name"
                  className="bg-black  bg-opacity-30 backdrop:blur-3xl shadow appearance-none border border-transparent rounded w-full py-2 px-3 text-white font-extralight leading-tight focus:outline-none focus:shadow-outline   bg-opacity-70 backdrop-blur-md transition duration-300"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-lg mb-2"
                  htmlFor="reply_to"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="reply_to"
                  id="reply_to"
                  required
                  placeholder="Enter Email"
                  className="bg-black  bg-opacity-30 backdrop:blur-3xl shadow appearance-none border border-transparent rounded w-full py-2 px-3 text-white font-extralight leading-tight focus:outline-none focus:shadow-outline   bg-opacity-70 backdrop-blur-md transition duration-300"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-lg  mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  placeholder=". . ."
                  className="bg-black  bg-opacity-30 backdrop:blur-3xl shadow appearance-none border border-transparent rounded w-full py-2 px-3 text-white font-extralight leading-tight focus:outline-none focus:shadow-outline   bg-opacity-70 backdrop-blur-md transition duration-300"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-green-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 w-32"
                  disabled={loading}
                >
                  {/* if the loading is true then spinner if false then it will show "Send" */}
                  {loading ? (
                    <ClipLoader size={24} color={"#ffffff"} />
                  ) : (
                    "Send"
                  )}
                </button>
              </div>
            </form>
            <div className="mt-10 text-center">
              <p className="text-lg mb-4 text-white">Or reach me via:</p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.linkedin.com/in/sairangineeni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition duration-300"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://github.com/Sai4158"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-600 transition duration-300"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="mailto:sairangineeni1@gmail.com"
                  className=" hover:text-red-400 transition duration-300"
                >
                  <SiGmail size={30} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
