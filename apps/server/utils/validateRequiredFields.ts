import { NextFunction, Request, Response } from "express";

type TRequiredFields = string[];

export const validateRequiredFields =
  (requiredFields: TRequiredFields) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    const missingFields = requiredFields.filter((prop) => !(prop in body));

    if (missingFields.length > 0) {
      let errors = {};
      missingFields.forEach((error) =>
        Object.assign(errors, {
          [error]: {
            message: `${
              error.charAt(0).toUpperCase() + error.slice(1)
            } is required`,
          },
        })
      );
      return res.status(400).json({ success: false, errors });
    }

    next();
  };
