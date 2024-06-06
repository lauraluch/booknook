import API from "..";
import { HttpLoginPayload, HttpLoginResponse } from "./types";

export async function postLogin(
  payload: HttpLoginPayload
): Promise<HttpLoginResponse> {
  const response = await API.post("/auth/login", payload);
  return response.data;
}
