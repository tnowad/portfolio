export interface Post {
  id: string;
  number: number;
  url: string;
  title: string;
  createdAt: string;
  bodyText: string;
  bodyHTML: string;
  category: {
    id: string;
    description: string;
    name: string;
  };
  publishedAt: string;
  updatedAt: string;
  author: {
    login: string;
    avatarUrl: string;
    url: string;
  };
  repository: {
    id: string;
  };
  labels: {
    nodes: [
      {
        name: string;
      },
      {
        name: string;
      },
    ];
  };
}

export interface Label {}
