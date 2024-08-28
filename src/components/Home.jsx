"use client";
import React, { useEffect, useState, useRef } from "react";
import { Parallax } from "@react-spring/parallax";
import styles from "../app/page.module.css";
import WelcomeSection from "./WelcomeSection";
import AboutMeSection from "./AboutMeSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div style={{ background: "#f0f4f8", minHeight: "100vh" }}>
      <Parallax
        className={styles.container}
        ref={parallax}
        pages={5}
        horizontal
      >
        <WelcomeSection scroll={scroll} />
        <AboutMeSection scroll={scroll} />
        <ProjectsSection scroll={scroll} />
        <SkillsSection scroll={scroll} />
        <ContactSection scroll={scroll} />
      </Parallax>
    </div>
  );
}
