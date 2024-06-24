import { API } from "@services/api";
import { HttpGetUserResponse } from "./types";

export async function getUser(userId: number): Promise<HttpGetUserResponse> {
  const response = await API.get(`/users/${userId}`);

  return response.data;
}
