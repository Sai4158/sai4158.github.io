"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PageTransition = ({ children }) => {
  const [displayChildren, setDisplayChildren] = useState(children);
  const pathname = usePathname();

  useEffect(() => {
    setDisplayChildren(children);
  }, [children]);

  const variants = {
    initial: {
      opacity: 0,
      filter: "blur(6px)",
      skewY: "2deg", // Skew effect during initial loading
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      skewY: "0deg", // Remove skew when fully visible
      transition: {
        duration: 1.3,
        ease: "easeOut",
        when: "beforeChildren", // Ensures children animate after container
      },
    },
    exit: {
      opacity: 0,
      filter: "blur(6px)",
      skewY: "-2deg", // Skew in opposite direction on exit
      transition: {
        duration: 1,
        ease: "easeIn",
        when: "afterChildren", // Ensures children animate before container
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "transparent", // Ensure background transparency
        }}
      >
        {displayChildren}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
