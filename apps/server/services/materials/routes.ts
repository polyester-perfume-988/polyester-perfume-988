import { Router } from "express";
import type { Router as ExpressRouter } from "express";

import { isAuthenticated } from "@middlewares/isAuthenticated";

import { getMaterialList } from "./controllers";

const materialRouter: ExpressRouter = Router();

materialRouter.get("/materials", isAuthenticated, getMaterialList);

export { materialRouter };
