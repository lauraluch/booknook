import { API } from "@services/api";
import { HttpGetTagsInBookResponse } from "./types";

export async function getTags(
  bookId: number
): Promise<HttpGetTagsInBookResponse> {
  const response = await API.get(`/books/${bookId}/tags`);

  return response.data;
}
