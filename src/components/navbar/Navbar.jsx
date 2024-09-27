// components/navbar/Navbar.jsx
"use client"; // Mark this component for client-side rendering

import React, { useState, useEffect } from "react";
import { useMotionValue } from "framer-motion";
import FloatingDock from "./FloatingDock";
import DockIcon from "./DockIcon";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useTheme } from "next-themes";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Navbar() {
  const mousex = useMotionValue(Infinity);

  // Define navigation links and icons
  const navLinks = [
    { label: "Home", icon: <HomeIcon />, href: "/" },
    { label: "Projects", icon: <CodeIcon />, href: "/projects" },
    { label: "About", icon: <InfoIcon />, href: "/about" },
    { label: "Contact", icon: <ContactMailIcon />, href: "/contact" },
  ];

  // Theme toggle functionality
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevents the rendering of the button on the server-side (next-themes)
  if (!mounted) return null;

  return (
    <FloatingDock
      onMouseMove={(e) => mousex.set(e.pageX)}
      onMouseLeave={() => mousex.set(Infinity)}
    >
      {navLinks.map((link, index) => (
        <DockIcon
          key={index}
          icon={link.icon}
          label={link.label}
          href={link.href}
          mousex={mousex}
          magnification={50} // Adjust magnification for a more subtle effect
          distance={80} // Adjust the sensitivity of the hover effect
        />
      ))}

      {/* Theme Toggle Button */}
      <DockIcon
        icon={theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        label={theme === "light" ? "Dark Mode" : "Light Mode"}
        
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        mousex={mousex}
        magnification={50}
        distance={80}
      />
    </FloatingDock>
  );
}
