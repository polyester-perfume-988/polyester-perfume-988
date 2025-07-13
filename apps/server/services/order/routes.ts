import { Router } from "express";
import { createOrder } from "./controllers";
import { isAuthenticated } from "@middlewares/isAuthenticated";
import { upload } from "@middlewares/upload";
import { validateRequiredFields } from "@utils/validateRequiredFields";
import { create_order_fields } from "@config/requiredFields";

const orderRoutes = Router();

orderRoutes.post(
  "/create",
  isAuthenticated,
  upload.single("file"),
  validateRequiredFields(create_order_fields),
  createOrder
);

export { orderRoutes };
