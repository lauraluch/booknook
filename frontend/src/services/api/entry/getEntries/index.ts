import { API } from "@services/api";
import { HttpGetEntriesResponse } from "./types";

export async function getEntries(
  bookId: number
): Promise<HttpGetEntriesResponse> {
  console.log(bookId);

  const response = await API.get(`/entries/book/${bookId}`);
  console.log(response);

  return response.data;
}
