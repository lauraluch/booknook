import API from "@services/api";
import { HttpPutUserPayload } from "./types";

export async function putUser(
  userId: number,
  payload: HttpPutUserPayload
): Promise<void> {
  const response = await API.put(`/users/${userId}`, payload);
  return response.data;
}
