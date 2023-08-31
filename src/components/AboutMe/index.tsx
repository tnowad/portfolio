"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AvatarImage from "@/assets/avatar.png";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: -20 });
    }
  }, [inView, controls]);

  return (
    <section className="flex justify-center">
      <div className="container flex grid-cols-12 flex-col items-center md:grid">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="relative col-span-5 h-80 w-80 lg:col-span-4"
        >
          <div className="h-full w-full rounded-full bg-white" />
          <div className="absolute -left-3 top-6 h-full w-full">
            <Image src={AvatarImage} alt="Avatar" />
          </div>
        </motion.div>
        <div className="col-span-7 mt-4 text-gray-400 lg:col-span-8">
          <div className="inline-block h-10 rounded-xl bg-purple/10 px-10 text-xl font-bold leading-10 text-purple">
            🧐 About me
          </div>
          <h2 className="my-4 text-5xl font-bold text-white">
            Nguyen Minh Tuan
          </h2>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-md"
          >
            <p>
              👋 Hey there, I&lsquo;m Nguyen Minh Tuan, and my software journey
              began in 2021!
            </p>
            <p>
              🚀 I&lsquo;m all about the exciting Node.js stack, crafting with
              React.js, Express.js, and bringing together MongoDB, MySQL, and
              Docker.
            </p>
            <p>
              🎓 Lifelong learner alert! I&lsquo;m passionate about bridging the
              gap between code and creativity, and I&lsquo;m always on the
              lookout for ways to improve.
            </p>
            <p>
              🌈 Every day, I&lsquo;m on a mission to level up and exceed my
              past achievements. My goal? To be a little better than I was
              yesterday!
            </p>
            <p>
              🌟 Let&lsquo;s embark on a journey of coding, learning, and
              creating together – the future is looking incredibly bright!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
