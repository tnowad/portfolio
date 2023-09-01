export async function getBlogs() {
  const response = await fetch("http://localhost:3000/api/blogs", {
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return (await response.json()) as Blog[];
}

interface Blog {
  id: string;
  title: string;
  url: string;
  number: number;
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
