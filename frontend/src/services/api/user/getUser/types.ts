import { IUser } from "src/types/user/IUser";

export interface HttpGetUser {
  id: number;
  username: string;
  biography: string;
  gender: string;
  creation_date: string;
  birth_date: string;
}

export type HttpGetUserResponse = HttpGetUser;
