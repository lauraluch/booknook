import { User } from "../models/userModel";
import { dbQuery } from "../repository/dbConnection";

export const insertUser = async (user: User) => {
  await dbQuery(
    "INSERT INTO bookuser (username, password, biography, gender, creation_date, birth_date) VALUES(?, ?, ?, ?, ?, ?)",
    [
      user.username,
      user.password,
      user.biography,
      user.gender,
      user.creation_date,
      user.birth_date,
    ]
  );

  const actionReturn = await dbQuery(
    "SELECT seq AS Id FROM sqlite_sequence WHERE name = 'bookuser'"
  );

  if (Array.isArray(actionReturn) && actionReturn.length > 0) {
    return actionReturn[0].Id as number;
  }

  return undefined;
};

export const updateUser = async (userId: number, updates: Partial<User>) => {
  const { username, biography, birth_date, gender } = updates;

  const updateParams: any[] = [];
  let updateQuery = "UPDATE bookuser SET";

  if (username && username !== "") {
    updateQuery += " username = ?,";
    updateParams.push(username);
  }

  if (biography) {
    updateQuery += " biography = ?,";
    updateParams.push(biography);
  }

  if (gender) {
    updateQuery += " gender = ?,";
    updateParams.push(gender);
  }

  if (birth_date) {
    updateQuery += " birth_date = ?,";
    updateParams.push(birth_date);
  }

  updateQuery = updateQuery.slice(0, -1);

  updateQuery += " WHERE id = ?";
  updateParams.push(userId);

  await dbQuery(updateQuery, updateParams);
};

export const readUserById = async (
  userId: number
): Promise<User | undefined> => {
  const query =
    "SELECT id, username, biography, gender, creation_date, birth_date FROM bookuser WHERE id = ?";
  const result = await dbQuery(query, [userId]);

  if (Array.isArray(result) && result.length > 0) {
    return result[0] as User;
  }

  return undefined;
};

export const readUserByUsername = async (
  bookName: string
): Promise<User | undefined> => {
  const query = "SELECT * FROM bookuser WHERE username = ?";
  const result = await dbQuery(query, [bookName]);

  if (Array.isArray(result) && result.length > 0) {
    return result[0] as User;
  }

  return undefined;
};

export const readUserPasswordByUsername = async (
  username: string
): Promise<string | undefined> => {
  const query = "SELECT password FROM bookuser WHERE username = ?";
  const result = await dbQuery(query, [username]);

  if (Array.isArray(result) && result.length > 0) {
    return result[0].password as string;
  }

  return undefined;
};

export const readUserIdByUsername = async (
  username: string
): Promise<string | undefined> => {
  const query = "SELECT id FROM bookuser WHERE username = ?";
  const result = await dbQuery(query, [username]);

  if (Array.isArray(result) && result.length > 0) {
    return result[0].id as string;
  }

  return undefined;
};

export const userService = {
  insertUser,
  updateUser,
  readUserById,
  readUserByUsername,
  readUserPasswordByUsername,
};
