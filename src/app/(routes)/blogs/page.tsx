import { getBlogs } from "@/server/blog";

export default async function Page() {
  const blogs = await getBlogs();
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <button>{blog.title}</button>
        </div>
      ))}
    </div>
  );
}
