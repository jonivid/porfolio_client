/* eslint-disable react/no-unescaped-entities */
"use client";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import IconCloud from "../../components/iconCloud/IconCloud";
import { motion } from "framer-motion";
import { slugs } from "@/assets/slugs";

export default function Home() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      className={styles.mainContent}
    >
      {/* Heading with animation */}
      <Grid item xs={12} sm={6}>
        <motion.h1
          className="text-4xl font-bold tracking-tight text-white-900 sm:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Hey, I'm Yehonatan 👋🏻
        </motion.h1>

        <motion.h2
          className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Full Stack Developer
        </motion.h2>

        {/* Smaller Content */}
        <motion.p
          className="text-lg text-white sm:text-2xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          I'm a full-stack developer based in Israel with 3 years of experience
          in building high-performance, scalable web applications. I specialize
          in turning product requirements into robust, secure, and
          mission-critical solutions that streamline operations. Whether you
          need a sleek frontend or a powerful backend, I'll help you create
          efficient, intuitive platforms your users will love.
        </motion.p>
      </Grid>

      <Grid item xs={12} sm={6}>
        <IconCloud iconSlugs={slugs} />
      </Grid>
    </Grid>
  );
}
