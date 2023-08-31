"use client";

import React from "react";
import CodeIcon from "@/assets/code.svg";
import ProjectIcon from "@/assets/project.svg";
import DesignIcon from "@/assets/design.svg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export function ProfileSummary() {
  const yearsAsProgrammer = new Date().getFullYear() - 2021;
  const projectsWorkedOn = 5;
  const yearsAsDesigner = new Date().getFullYear() - 2022;
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
    <motion.section
      className="mt-3 flex justify-center border-y-[0.5px] border-purple py-6"
      ref={ref}
      {...commonAnimationProps}
    >
      <div className="container flex justify-center">
        <div className="grid w-full max-w-2xl grid-cols-3 grid-rows-2 gap-6">
          <div className="flex flex-col justify-center text-center">
            <div className="flex justify-center text-center">
              <CodeIcon />
            </div>
            <p className="text-sm text-gray-300">
              {yearsAsProgrammer} years as
            </p>
            <h3 className="text-gray-200">Programmer</h3>
          </div>
          <div className="flex flex-col justify-center text-center">
            <div className="flex justify-center text-center">
              <ProjectIcon />
            </div>
            <p className="text-sm text-gray-300">{projectsWorkedOn} Projects</p>
            <h3 className="text-gray-200">Worked On</h3>
          </div>
          <div className="flex flex-col justify-center text-center">
            <div className="flex justify-center text-center">
              <DesignIcon />
            </div>
            <p className="text-sm text-gray-300">{yearsAsDesigner} years as</p>
            <h3 className="text-gray-200">Designer</h3>
          </div>
          <div className="col-span-3">
            <div className="grid w-full grid-cols-3 gap-6 rounded-xl bg-purple/10 p-3">
              <div className="text-center text-white">
                <p className="text-sm text-purple">Full-stack</p>
                <h3 className="font-bold text-purple">Developer</h3>
              </div>
              <div className="text-center text-white">
                <p className="text-sm text-purple">Detail-oriented</p>
                <h3 className="font-bold text-purple">Innovative</h3>
              </div>
              <div className="text-center text-white">
                <p className="text-sm text-purple">Creative</p>
                <h3 className="font-bold text-purple">Passionate</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
