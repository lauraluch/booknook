export interface HttpPostUserPayload {
  username: string;
  password: string;
  biography: string;
  creation_date: string;
  birth_date: string;
}

export interface HttpPostUserResponse {
  userId: number;
}
