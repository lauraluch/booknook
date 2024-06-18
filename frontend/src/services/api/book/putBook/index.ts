import API from "@services/api";
import { HttpPutBookPayload } from "./types";

export async function putBook(
  bookId: number,
  payload: HttpPutBookPayload
): Promise<void> {
  const response = await API.put(`/books/${bookId}`, payload);
  return response.data;
}
