import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getMaterialList(_req: Request, res: Response) {
  try {
    const materials = await prisma.material.findMany();

    return res.status(200).json({ success: true, materials });
  } catch (error) {
    return res.status(500).json({ success: false });
  }
}
