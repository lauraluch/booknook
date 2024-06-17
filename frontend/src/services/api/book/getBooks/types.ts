export type HttpGetBooksBook = {
  id: number;
  title: string;
  author: string;
  readAt: string;
  finished: number;
  favorite: number;
  user_id?: number;
  rating?: number;
  color?: string;
};

export type HttpGetBooksResponse = HttpGetBooksBook[];
