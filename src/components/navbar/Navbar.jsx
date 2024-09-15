// components/navbar/Navbar.jsx
"use client"; // Mark this component for client-side rendering

import React from "react";
import { useMotionValue } from "framer-motion";
import FloatingDock from "./FloatingDock";
import DockIcon from "./DockIcon";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export default function Navbar() {
  const mousex = useMotionValue(Infinity);

  // Define navigation links and icons
  const navLinks = [
    { label: "Home", icon: <HomeIcon />, href: "/" },
    { label: "Projects", icon: <CodeIcon />, href: "/projects" },
    { label: "About", icon: <InfoIcon />, href: "/about" },
    { label: "Contact", icon: <ContactMailIcon />, href: "/contact" },
  ];

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
    </FloatingDock>
  );
}
