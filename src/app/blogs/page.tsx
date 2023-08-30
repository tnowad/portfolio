"use client";

import Giscus from "@giscus/react";
// import { useRouter } from "next/navigation";
import { getBlogs } from "../(action)/blog";

export default async function Page() {
  const blogs = await getBlogs();

  // const router = useRouter();

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <button
          // onClick={() => {
          //   router.push(`/blogs/${blog.id}`);
          // }}
          >
            {blog.title}
          </button>
        </div>
      ))}
      <Giscus
        id="comments"
        repo="tnowad/portfolio"
        repoId="R_kgDOKJFzGw"
        category="Announcements"
        categoryId="DIC_kwDOKJFzG84CY7lj"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
