"use client";

import Image from "next/image";
import classnames from "classnames";
import GithubImage from "@/assets/github.gif";

interface BlogCardProps {
  title?: string;
  description?: string;
  labels?: string[];
  image?: string;
  className?: string;
}

export default function BlogCard({
  title = "Portfolio",
  description = "A brief overview of my latest project.",
  labels = ["Web Development", "React.js", "UI/UX"],
  image,
  className,
}: BlogCardProps) {
  return (
    <div
      className={classnames(
        "rounded-xl border-[0.5px] border-purple p-4 text-gray-400",
        className
      )}
    >
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <p className="my-2">{description}</p>
      {labels?.slice(0, 3).map((label) => (
        <span
          className="mx-2 whitespace-nowrap rounded-xl bg-purple/10 text-sm font-bold text-purple"
          key={label}
        >
          {label}
        </span>
      ))}
      <div className="h-48 w-full object-fill">
        <Image
          className="h-full w-full rounded-xl bg-white object-contain"
          src={image ?? GithubImage}
          alt={title}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
