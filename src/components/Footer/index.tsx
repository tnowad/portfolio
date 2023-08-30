"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const commonAnimationProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: inView ? 1 : 0, y: inView ? 0 : 20 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.footer
      className="flex h-24 justify-center bg-purple/10"
      ref={ref}
      {...commonAnimationProps}
    >
      <div className="container flex items-center justify-between font-extralight text-white">
        <motion.div
          {...commonAnimationProps}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Copyright © Nguyen Minh Tuan · 2023
        </motion.div>
        <motion.div
          className="flex space-x-3 text-3xl"
          {...commonAnimationProps}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <a
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-400 text-3xl text-dark duration-200 hover:bg-gray-200"
            href="https://www.linkedin.com/in/tnowad/"
          >
            <Icon icon="line-md:linkedin" />
          </a>
          <a
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-400 text-3xl text-dark duration-200 hover:bg-gray-200"
            href="http://github.com/tnowad"
          >
            <Icon icon="line-md:github-loop" />
          </a>
          <a
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-400 text-3xl text-dark duration-200 hover:bg-gray-200"
            href="https://www.facebook.com/TNOWAD/"
          >
            <Icon icon="line-md:facebook" />
          </a>
        </motion.div>
        <motion.div
          {...commonAnimationProps}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Make with
          <Icon className="mx-1 inline text-red-500" icon="mdi:heart" />
          for a better life.
        </motion.div>
      </div>
    </motion.footer>
  );
}
