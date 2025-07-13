import { Router } from "express";
import { getMaterialList } from "./controllers";
import { isAuthenticated } from "@middlewares/isAuthenticated";

const materialRouter = Router();

materialRouter.get("/materials", isAuthenticated, getMaterialList);

export { materialRouter };
