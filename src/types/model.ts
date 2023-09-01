export interface Post {
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
  labels: Label[];
}

export interface Label {}
