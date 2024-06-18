import API from "@services/api";
import { HttpPostTagPayload, HttpPostTagResponse } from "./types";

export async function postTag(
  payload: HttpPostTagPayload
): Promise<HttpPostTagResponse> {
  const response = await API.post("/tags", payload);
  return response.data;
}
