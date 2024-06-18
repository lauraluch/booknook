import { API } from "@services/api";
import { HttpGetTagResponse } from "./types";

export async function getTags(userId: number): Promise<HttpGetTagResponse> {
  const response = await API.get(`/users/${userId}/tags`);

  return response.data;
}
