import { Router } from "express";
import type { Router as ExpressRouter } from "express";

import { isAuthenticated } from "@middlewares/isAuthenticated";
import { upload } from "@middlewares/upload";
import { validateRequiredFields } from "@utils/validateRequiredFields";
import { create_order_fields } from "@config/requiredFields";

import { createOrder } from "./controllers";



const orderRoutes: ExpressRouter = Router();

orderRoutes.post(
  "/create",
  isAuthenticated,
  upload.single("file"),
  validateRequiredFields(create_order_fields),
  createOrder
);

export { orderRoutes };
