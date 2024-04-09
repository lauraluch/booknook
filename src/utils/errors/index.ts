import { Response } from "express";

export const badRequest = (res: Response, err: string) => {
  res.status(400).json({
    err,
  });
};

export const internalServerError = (res: Response, err: string) => {
  res.status(500).json({
    err,
  });
};

export const notFound = (res: Response, message: string) => {
  res.status(404).json({
    error: message,
  });
};
