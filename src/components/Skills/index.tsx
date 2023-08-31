"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section className="my-9 flex justify-center" id="skills">
      <div className="container flex flex-col items-center" ref={ref}>
        <motion.div
          className="inline-block h-10 rounded-xl bg-purple/10 px-10 text-xl font-bold leading-10 text-purple"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          🧑‍💻 Skills · Experiences
        </motion.div>
        <motion.h2
          className="my-4 text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          Technologies and Skills
        </motion.h2>
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="my-9 text-gray-400">
            Technologies I don&apos;t use every day
          </div>
          <motion.div
            className="flex text-6xl text-purple/50"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Icon icon="simple-icons:nestjs" />
            <Icon icon="teenyicons:vue-solid" />
            <Icon icon="solar:figma-bold" />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="my-9 text-gray-400">
            Other technologies with which I have worked on projects
          </div>
          <motion.div
            className="flex text-6xl text-purple/50"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Icon icon="bxl:mongodb" />
            <Icon icon="devicon-plain:mysql" />
            <Icon icon="simple-icons:express" />
            <Icon icon="mdi:react" />
            <Icon icon="mdi:language-typescript" />
            <Icon icon="mdi:language-javascript" />
            <Icon icon="teenyicons:nextjs-outline" />
            <Icon icon="mdi:tailwind" />
            <Icon icon="mdi:git" />
            <Icon icon="mdi:github" />
            <Icon icon="mdi:docker" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
