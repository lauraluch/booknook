import { Router } from "express";
import { validateUser } from "../controllers/user";

const authRouter = Router();

authRouter.post("/login", validateUser);

export { authRouter };
