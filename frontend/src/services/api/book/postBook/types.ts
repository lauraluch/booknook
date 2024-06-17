export interface HttpPostBookPayload {
  title: string;
  author: string;
  readAt: string;
  finished: number;
  favorite: number;
  user_id: number;
  rating?: number;
  color?: string;
}

export interface HttpPostBookResponse {
  bookId: number;
}
