import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import PageTransition from "./Components/PageTransition";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

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
  // this is for the social media links
  og: {
    title: "Sai Rangineeni | Portfolio",
    description:
      "Explore Sai Rangineeni's portfolio showcasing projects, experience, and skills in software development, web development, and design.",
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
      </head>

      <body className={inter.className}>
        <SpeedInsights />
        <PageTransition>
          <div className="z-50 pb-9">
            <Navbar />
          </div>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
