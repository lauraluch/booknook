import { API } from "@services/api";
import { HttpGetBooksResponse } from "./types";

export async function getBooks(userId: number): Promise<HttpGetBooksResponse> {
  const response = await API.get(`/users/${userId}/books`);

  return response.data;
}
