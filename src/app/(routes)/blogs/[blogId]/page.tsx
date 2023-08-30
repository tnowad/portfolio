"use client";

import Giscus from "@giscus/react";

async function getBlog(id: string) {
  const response = await fetch(`http://localhost:3000/api/blogs/${id}`);
  return (await response.json()) as Blog;
}

interface Blog {
  id: string;
  title: string;
  url: string;
  number: 1;
  bodyText: string;
  createdAt: string;
  lastEditedAt: null;
  author: {
    login: string;
    url: string;
    avatarUrl: string;
  };
  labels: {
    nodes: [];
  };
}

export default async function Page({ params }: { params: { blogId: string } }) {
  const { blogId } = params;
  const blog = await getBlog(blogId);

  return (
    <div>
      {blog.id}
      <Giscus
        id="comments"
        repo="tnowad/portfolio"
        repoId="R_kgDOKJFzGw"
        category="Announcements"
        categoryId="DIC_kwDOKJFzG84CY7lj"
        mapping="title"
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
