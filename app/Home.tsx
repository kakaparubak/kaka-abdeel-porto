"use client";

import React from "react";
import { motion } from "motion/react";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

const SocialMediaIsland = () => {
  return (
    <motion.div
      className="absolute z-50 m-6 flex flex-col gap-2 text-3xl md:flex-row lg:flex-row"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <motion.a
        whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
        href="https://www.instagram.com/k_abdeell/"
        target="_blank"
      >
        <IoLogoInstagram />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
        href="https://github.com/kakaparubak"
        target="_blank"
      >
        <IoLogoGithub />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
        href="https://www.linkedin.com/in/kaka-abdeel-parubak-ab6828315/"
        target="_blank"
      >
        <IoLogoLinkedin />
      </motion.a>
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="flex w-screen justify-end overflow-x-hidden bg-radial-[circle_at_top] from-blue-100 from-15% via-amber-300 via-40% to-white to-70%">
      <SocialMediaIsland />
      <div className="flex w-screen items-center justify-center overflow-x-hidden">
        <div className="flex h-screen w-screen items-end justify-center py-0">
          <div className="absolute z-20 flex h-lvh flex-col justify-between py-6 md:justify-end lg:justify-end">
            <motion.p
              className="font-display relative translate-y-1 px-6 pr-16 text-[1.25rem] leading-[1.2] font-medium tracking-tight text-gray-700 md:px-0 md:pr-0 md:text-[1.5rem] lg:px-0 lg:pr-0 lg:text-[1.5rem]"
              initial={{ opacity: 0 }}
              animate={{ transition: { duration: 1 }, opacity: 1 }}
            >
              Hello! I am a beginner software engineer.<br></br>
              Nice to meet you! I hope we can work together.
            </motion.p>
            <motion.h1
              className="text-center font-serif text-[min(30vw,7rem)] leading-none font-medium tracking-tighter select-none md:text-[9.5rem] lg:text-[18.5svw]"
              initial={{ opacity: 0 }}
              animate={{ transition: { duration: 1 }, opacity: 1 }}
            >
              Kaka Abdeel
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
