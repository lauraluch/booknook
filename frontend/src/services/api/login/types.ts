export interface HttpLoginPayload {
  username: string;
  password: string;
}

export interface HttpLoginResponse {
  userId: number;
  token: string;
}
