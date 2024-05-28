"use client";
import React from "react";
import CodeIcon from "@/assets/code.svg";
import ProjectIcon from "@/assets/project.svg";
import DesignIcon from "@/assets/design.svg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import GridItem from "./GridItem";

export function ProfileSummary() {
  const yearsAsProgrammer = new Date().getFullYear() - 2021;
  const projectsWorkedOn = 5;
  const yearsAsLinuxUser = new Date().getFullYear() - 2021;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <motion.section
      className="mt-3 flex justify-center border-y-[0.5px] border-purple py-6"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex justify-center">
        <div className="grid w-full max-w-2xl grid-cols-3 gap-6">
          <GridItem
            icon={<CodeIcon />}
            title="Programmer"
            subtitle={`${yearsAsProgrammer} years as`}
            inView={inView}
          />
          <GridItem
            icon={<ProjectIcon />}
            title="Worked On"
            subtitle={`${projectsWorkedOn} Projects`}
            inView={inView}
          />
          <GridItem
            icon={<DesignIcon />}
            title="Linux User"
            subtitle={`${yearsAsLinuxUser} years as`}
            inView={inView}
          />
          <div className="col-span-3 hidden sm:block">
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
