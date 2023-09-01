"use client";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Markdown from "@/components/Markdown";
import { Post } from "@/types/model";
import Giscus from "@giscus/react";
import { useEffect, useState } from "react";
import Link from "next/link";

export const revalidate = 60;

async function getPost(id: string) {
  const response = await fetch(`${process.env.VERCEL_URL}/api/blogs/${id}`, {
    // cache: "force-cache",
  });
  return (await response.json()) as Post;
}

export default function Page({ params }: { params: { blogId: string } }) {
  const { blogId } = params;
  const [post, setPost] = useState<Post>();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (blogId) {
          const post = await getPost(blogId);
          setPost(post);
        }
      } catch (error) {}
    };
    fetchPost();
  }, [blogId]);

  if (!post) {
    return null;
  }

  return (
    <section className="my-14 flex justify-center">
      <div className="container">
        <div className="text-white">
          <div className="mb-5 text-3xl">
            {post.title}{" "}
            <Link className="text-purple" href={post.url}>
              #{post.number}
            </Link>
          </div>
          <div className="grid-cols-12 gap-3 lg:grid">
            <div className="col-span-8">
              <div className="rounded-md border border-purple/60 p-3">
                <Markdown html={post.bodyHTML} />
              </div>
              <div>
                <Giscus
                  repo="tnowad/portfolio"
                  repoId="R_kgDOKJFzGw"
                  mapping="number"
                  term={blogId}
                  reactionsEnabled="1"
                  emitMetadata="0"
                  inputPosition="top"
                  theme="transparent_dark"
                  lang="en"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="relative col-span-4 h-full">
              <div className="sticky top-20 rounded-md border border-purple/60 p-3">
                <div className="flex items-center">
                  <span className="mr-1 inline-block h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={post.author.avatarUrl}
                      width={50}
                      height={50}
                      className="inline"
                      alt={post.author.login}
                    />
                  </span>
                  <Link
                    className="mr-3 text-lg font-bold"
                    href={post.author.url}
                  >
                    {post.author.login}
                  </Link>
                  <span className="text-gray-400">
                    {formatDistanceToNow(new Date(post.createdAt))} ago
                  </span>
                </div>
                {post.updatedAt && (
                  <div className="text-gray-400">
                    Last updated at{" "}
                    {formatDistanceToNow(new Date(post.updatedAt))} ago
                  </div>
                )}
                <div>
                  <span className="text-md text-gray-500">Category: </span>
                  <span className="text-purple">{post.category.name}</span>
                </div>
                <div>
                  <span className="text-gray-500">Labels: </span>
                  {post.labels.nodes.map((label) => (
                    <span key={label.name} className="capitalize text-purple">
                      {label.name + " "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
