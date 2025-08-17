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
    "Welcome to Sai Rangineeni's portfolio. Explore Sai's projects, experience, and skills in Human-Centered Design & Development, Software Engineering, Web Development, UI/UX Design, and more.",
  keywords: [
    "Sai Rangineeni",
    "Portfolio",
    "Human-Centered Design & Development",
    "Data Science",
    "Software Engineer",
    "Web Development",
    "UI/UX Design",
    "React.js",
    "TailwindCSS",
    "Next.js",
    "JavaScript",
    "Node.js",
    "SQL",
    "MongoDB",
    "Git",
    "CTFGuide",
    "Music Production",
  ],
  author: "Sai Rangineeni",
  robots: "index, follow",
  og: {
    title: "Sai Rangineeni | Portfolio",
    description:
      "Explore Sai Rangineeni's portfolio showcasing projects, experience, and skills in software development, web development, and design.",
    image: "https://i.ibb.co/dQGwy7w/Sai-Profile-pic.jpg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
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
        className={montserrat.className}
        style={{
          background: "linear-gradient(to top, #09203f 0%, #537895 100%)",
          minHeight: "100vh",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
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
