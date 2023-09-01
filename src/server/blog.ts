import { Post } from "@/types/model";

export async function getBlogs() {
  const response = await fetch("http://localhost:3000/api/blogs", {
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return (await response.json()) as Post[];
}
