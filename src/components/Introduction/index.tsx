"use client";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Avatar from "./Avatar";
import Link from "next/link";

export default function Introduction() {
  return (
    <motion.section
      className="flex justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="home"
    >
      <div className="container flex items-center justify-between text-gray-400">
        <div className="grid gap-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="inline-block h-10 rounded-xl bg-purple/10 px-10 text-xl font-bold leading-10 text-purple">
              👋 Hello!
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="inline-block text-5xl font-bold text-white"
          >
            Nguyen <br />
            Minh Tuan
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Full-stack developer
          </motion.p>
          <div className="flex space-x-2">
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 text-2xl text-dark duration-200 hover:bg-gray-200"
              href="https://www.linkedin.com/in/tnowad/"
            >
              <Icon icon="line-md:linkedin" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 text-2xl text-dark duration-200 hover:bg-gray-200"
              href="http://github.com/tnowad"
            >
              <Icon icon="line-md:github-loop" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 text-2xl text-dark duration-200 hover:bg-gray-200"
              href="https://www.facebook.com/TNOWAD/"
            >
              <Icon icon="line-md:facebook" />
            </motion.a>
          </div>
        </div>
        <div>
          <Avatar />
        </div>
        <div className="flex flex-col items-end text-purple/50">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href={"/resume"} className="flex items-center">
              Download CV
              <Icon className="ml-1 inline" icon="system-uicons:download" />
            </Link>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex h-10 items-center rounded-xl border border-purple/50 px-4 font-bold duration-300 hover:bg-purple hover:text-dark"
          >
            <Icon className="mr-4 inline-block" icon="ri:message-3-line" />
            Let&lsquo;s talk
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
