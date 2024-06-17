import API from "@services/api";
import { HttpPostBookPayload, HttpPostBookResponse } from "./types";

export async function postBook(
  payload: HttpPostBookPayload
): Promise<HttpPostBookResponse> {
  const response = await API.post("/books", payload);
  return response.data;
}
