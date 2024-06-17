export type HttpGetBooksBook = {
  id: number;
  title: string;
  author: string;
  readAt: string;
  finished: boolean;
  favorite: boolean;
  user_id?: number;
  rating?: number;
  color?: string;
};

export type HttpGetBooksResponse = HttpGetBooksBook[];
