import API from "@services/api";
import { HttpPostUserPayload, HttpPostUserResponse } from "./types";

export async function postUser(
  payload: HttpPostUserPayload
): Promise<HttpPostUserResponse> {
  const response = await API.post("/users", payload);
  return response.data;
}
