"use client";

import LogoIcon from "@/assets/logo.svg";
import classnames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";

const navItems = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Portfolio",
    link: "#portfolio",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Career",
    link: "#career",
  },
  {
    title: "Blog",
    link: "#blog",
  },
];

export default function Header() {
  const [activeLink, setActiveLink] = useState<string>("#home");

  return (
    <header className="mt-9 flex w-full justify-center">
      <div className="container flex h-16 items-center justify-between rounded-3xl bg-purple/5 px-6">
        <Link href={"/"} className="h-10 w-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LogoIcon />
          </motion.div>
        </Link>
        <motion.div
          className="inline-flex space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LayoutGroup>
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className={classnames(
                  {
                    "text-purple drop-shadow-2xl": activeLink === item.link,
                    "text-gray-500": activeLink !== item.link,
                  },
                  "hover:text-purple-700",
                  "transition-colors",
                  "duration-300"
                )}
                onClick={() => setActiveLink(item.link)}
              >
                {item.title}
                {activeLink === item.link && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-10 bg-purple/5 mix-blend-difference blur-xl"
                    style={{ borderRadius: "50%" }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </LayoutGroup>
        </motion.div>
      </div>
    </header>
  );
}
