import dotenv from "dotenv";
dotenv.config();

import express, { Response } from "express";
import cors from "cors";
import { useRoutes } from "./routes";
import bodyParser from "body-parser";
const PORT = process.env.PORT || 4040;

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
useRoutes(app);

app.get("/", (res: Response) => {
  res.json({
    msg: "ok",
  });
});

app.listen(PORT, () => console.log("listening on port " + PORT));
