"use client";

import { useEffect } from "react";

// Helper function to interpolate between two hex colors
const interpolateColor = (color1, color2, factor) => {
  const hex = (c) => `0${c.toString(16)}`.slice(-2);
  const r1 = parseInt(color1.substring(1, 3), 16);
  const g1 = parseInt(color1.substring(3, 5), 16);
  const b1 = parseInt(color1.substring(5, 7), 16);
  const r2 = parseInt(color2.substring(1, 3), 16);
  const g2 = parseInt(color2.substring(3, 5), 16);
  const b2 = parseInt(color2.substring(5, 7), 16);

  const r = Math.round(r1 + factor * (r2 - r1));
  const g = Math.round(g1 + factor * (g2 - g1));
  const b = Math.round(b1 + factor * (b2 - b1));

  return `#${hex(r)}${hex(g)}${hex(b)}`;
};

const DynamicThemeColor = () => {
  useEffect(() => {
    const startColor = "#537895"; // Top color of your gradient
    const endColor = "#09203f"; // Bottom color of your gradient

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollFactor = docHeight > 0 ? scrollY / docHeight : 0;

      const newColor = interpolateColor(startColor, endColor, scrollFactor);

      let metaThemeColor = document.querySelector("meta[name=theme-color]");
      if (!metaThemeColor) {
        metaThemeColor = document.createElement("meta");
        metaThemeColor.name = "theme-color";
        document.getElementsByTagName("head")[0].appendChild(metaThemeColor);
      }
      metaThemeColor.setAttribute("content", newColor);
    };

    // Set initial color
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null; // This component does not render anything
};

export default DynamicThemeColor;
