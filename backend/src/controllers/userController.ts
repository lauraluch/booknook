import { Request, Response } from "express";
import {
  badRequest,
  internalServerError,
  notFound,
} from "../utils/mappedResponses";
import { User } from "../models/userModel";
import {
  readUserIdByUsername,
  readUserPasswordByUsername,
  userService,
} from "../services/userService";
import jwt, { Secret } from "jsonwebtoken";

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
  userService
    .insertUser(user)
    .then((id) => {
      res.status(200).json({
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

  userService
    .updateUser(userId, updates)
    .then(() => {
      res.status(200).json({ message: "User updated successfully." });
    })
    .catch((err) => internalServerError(res, err));
};

const readUserById = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);

  if (!userId) {
    return badRequest(res, "Invalid user ID.");
  }

  userService
    .readUserById(userId)
    .then((user) => {
      if (!user) {
        return notFound(res, "User not found.");
      }
      res.status(200).json(user);
    })
    .catch((err) => internalServerError(res, err));
};

const readUserByUsername = (req: Request, res: Response) => {
  const username = req.params.username;
  console.log(req.params);

  if (!username) {
    return badRequest(res, "Invalid username.");
  }

  userService
    .readUserByUsername(username)
    .then((user) => {
      if (!user) {
        return notFound(res, "User not found.");
      }
      res.status(200).json(user);
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

    const userId = await readUserIdByUsername(username);

    const token = jwt.sign(
      { id: userId, username: username },
      process.env.JWT_SECRET as Secret,
      { expiresIn: "1h" }
    );

    // res.cookie("token", token, {
    //   httpOnly: true,
    // });

    res.status(200).json({ message: "Login successful.", userId, token });
  } catch (err) {
    internalServerError(res, err as any);
  }
};

export const userController = {
  insertUser,
  updateUser,
  readUserById,
  readUserByUsername,
  validateUser,
};
