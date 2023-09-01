"use client";
import React from "react";
import { motion } from "framer-motion";
interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  inView: boolean;
}

const GridItem = ({ icon, title, subtitle, inView }: GridItemProps) => {
  const animationProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: inView ? 1 : 0, y: inView ? 0 : 20 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      className="flex flex-col justify-center rounded-xl border-[0.5px] border-purple text-center duration-200 hover:bg-purple/20"
      {...animationProps}
    >
      <div className="flex justify-center text-center">{icon}</div>
      <p className="text-sm text-gray-300">{subtitle}</p>
      <h3 className="text-gray-200">{title}</h3>
    </motion.div>
  );
};

export default GridItem;
