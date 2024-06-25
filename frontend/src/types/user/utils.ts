import { HttpGetUser } from "@services/api/user/getUser/types";
import { IUser } from "./IUser";

export function mapUserFromBackend(user: HttpGetUser): IUser {
  return {
    id: user?.id,
    username: user?.username,
    biography: user?.biography,
    gender: user?.gender,
    creationDate: user?.creation_date,
    birthDate: user?.birth_date,
  };
}
