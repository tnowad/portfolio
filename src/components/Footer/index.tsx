"use client";

import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="flex h-24 justify-center bg-purple/10">
      <div className="container flex items-center justify-between font-extralight text-white">
        <div>Copyright © Nguyen Minh Tuan · 2023</div>
        <div className="flex space-x-3 text-3xl">
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
        </div>
        <div>
          Make with
          <Icon className="mx-1 inline text-red-500" icon="mdi:heart" />
          for a better life.
        </div>
      </div>
    </footer>
  );
}
