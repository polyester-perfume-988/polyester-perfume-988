import { Request, Response, NextFunction } from "express";
import { getAuth } from "@clerk/express";

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const auth = getAuth(req);

  if (!auth.isAuthenticated) {
    return res
      .status(401)
      .json({ success: false, message: "You are not authenticated" });
  }

  res.locals.userId = auth.userId;
  next();
}
