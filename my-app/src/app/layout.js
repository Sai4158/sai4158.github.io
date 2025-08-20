import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import PageTransition from "./Components/PageTransition";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Sai R | Portfolio",
  description:
    "Explore Sai Rangineeni's portfolio, a Software Engineer and Application Development student at Penn State.",
  keywords: [
    "Sai Rangineeni",
    "Sai Rangineeni Penn State",
    "Penn State",
    "The Pennsylvania State University",
    "STiBaRC",
    "CTFGuide",
    "Portfolio",
    "Full-Stack Development",
    "Application Development",
    "Data Science",
    "Software Engineer",
    "Web Development",
    "Java",
    "Spring Boot",
    "AWS",
    "React.js",
    "Next.js",
    "JavaScript",
    "Node.js",
    "SQL",
    "MongoDB",
    "RESTful API",
    "Git",
    "TailwindCSS",
    "Music Production",
  ],
  author: "Sai Rangineeni",
  robots: "index, follow",
  og: {
    title: "Sai Rangineeni | Portfolio",
    description: "Explore Sai Rangineeni's portfolio",
    image: "https://i.ibb.co/dQGwy7w/Sai-Profile-pic.jpg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#5a8198",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* These meta tags improve SEO */}
        <link rel="icon" href="/icon.svg" sizes="64x64" />
        <meta name="robots" content={metadata.robots} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:image" content={metadata.og.image} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body
        className={`${montserrat.className} font-light`}
        style={{
          minHeight: "100vh",
        }}
      >
        <ToastContainer />
        <SpeedInsights />
        <PageTransition>
          <div className="z-50 pb-9">
            <Navbar />
          </div>
          {children}
        </PageTransition>
        <Analytics />
      </body>
    </html>
  );
}
