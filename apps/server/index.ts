import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

import { orderRoutes } from "@services/order/routes";
import { materialRouter } from "@services/materials/routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.use("/v1/order", orderRoutes);
app.use("/v1/material", materialRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`[EXPRESS]: Server started successfully`));
