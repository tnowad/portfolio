"use client";

import PostCard from "@/components/PostCard";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section className="mt-28 flex justify-center" id="portfolio">
      <div className="container" ref={ref}>
        <motion.div
          className="inline-block h-10 rounded-xl bg-purple/10 px-10 text-xl font-bold leading-10 text-purple"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          🔗 Portfolio
        </motion.div>
        <motion.h2
          className="mt-7 text-5xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          Work and projects
        </motion.h2>
        <motion.div
          className="flex w-full snap-x gap-2 overflow-x-auto py-6 md:grid md:grid-cols-3 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <PostCard className="w-full min-w-[300px] snap-start scroll-ms-6 md:!min-w-min" />
          <PostCard className="w-full min-w-[300px] snap-start scroll-ms-6 md:!min-w-min" />
          <PostCard className="w-full min-w-[300px] snap-start scroll-ms-6 md:!min-w-min" />
          <PostCard className="w-full min-w-[300px] snap-start scroll-ms-6 md:!min-w-min" />
          <PostCard className="w-full min-w-[300px] snap-start scroll-ms-6 md:!min-w-min" />
          <PostCard className="w-full min-w-[300px] snap-start scroll-ms-6 md:!min-w-min" />
          <PostCard className="w-full min-w-[300px] snap-start scroll-ms-6 md:!min-w-min" />
          <PostCard className="w-full min-w-[300px] snap-start scroll-ms-6 md:!min-w-min" />
        </motion.div>
        <motion.div
          className="flex items-center justify-end text-purple"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          See more projects on here
          <Icon className="inline-block" icon="line-md:arrow-small-right" />
        </motion.div>
      </div>
    </section>
  );
}
