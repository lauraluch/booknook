import { IUser } from "src/types/user/IUser";

export function makeCreateUserForm(): IUser {
  return {
    id: 0,
    username: "",
    biography: "",
    creationDate: "",
    birthDate: "",
  };
}
