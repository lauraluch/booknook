import { Request, Response } from "express";
import { badRequest, internalServerError, notFound } from "../../utils/errors";
import { User } from "../../models/User/types";
import { readUserPasswordByUsername, userModel } from "../../models/User";

const insertUser = (req: Request, res: Response) => {
  {
    const user = req.body;

    if (!user) {
      return badRequest(res, "Invalid user.");
    }

    if (!user.username) {
      return badRequest(res, "Invalid username.");
    }

    if (!user.password) {
      return badRequest(res, "Invalid password.");
    }

    if (!user.birth_date) {
      return badRequest(res, "Invalid birthdate.");
    }
  }

  const user = req.body as User;
  userModel
    .insertUser(user)
    .then((id) => {
      res.json({
        id,
      });
    })
    .catch((err) => internalServerError(res, err));
};

const updateUser = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const updates = req.body as Partial<User>;

  if (!userId || !updates) {
    return badRequest(res, "Invalid user ID or updates.");
  }

  userModel
    .updateUser(userId, updates)
    .then(() => {
      res.json({ message: "User updated successfully." });
    })
    .catch((err) => internalServerError(res, err));
};

const readUserById = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);

  if (!userId) {
    return badRequest(res, "Invalid user ID.");
  }

  userModel
    .readUserById(userId)
    .then((user) => {
      if (!user) {
        return notFound(res, "User not found.");
      }
      res.json(user);
    })
    .catch((err) => internalServerError(res, err));
};

const readUserByUsername = (req: Request, res: Response) => {
  const username = req.params.username;
  console.log(req.params);

  if (!username) {
    return badRequest(res, "Invalid username.");
  }

  userModel
    .readUserByUsername(username)
    .then((user) => {
      if (!user) {
        return notFound(res, "User not found.");
      }
      res.json(user);
    })
    .catch((err) => internalServerError(res, err));
};

export const validateUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return badRequest(res, "Invalid username or password.");
    }

    const storedPassword = await readUserPasswordByUsername(username);

    if (!storedPassword) {
      return notFound(res, "User not found.");
    }

    if (password !== storedPassword) {
      return res.status(401).json({ message: "Invalid password." });
    }

    res.status(200).json({ message: "Login successful." });
  } catch (err) {
    internalServerError(res, err as any);
  }
};

const readAllBooksFromUser = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);

  if (!userId) {
    return badRequest(res, "Invalid user ID.");
  }

  userModel
    .readAllBooksFromUser(userId)
    .then((user) => {
      if (!user) {
        return notFound(res, "User not found.");
      }
      res.json(user);
    })
    .catch((err) => internalServerError(res, err));
};

export const userController = {
  insertUser,
  updateUser,
  readUserById,
  readUserByUsername,
  validateUser,
  readAllBooksFromUser,
};
