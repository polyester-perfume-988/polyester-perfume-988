import { Request, Response } from "express";
import prisma from "@prisma/client";

const prismaClient = new prisma.PrismaClient();

export async function getMaterialList(_req: Request, res: Response) {
  try {
    const materials = await prismaClient.material.findMany();

    return res.status(200).json({ success: true, materials });
  } catch (error) {
    return res.status(500).json({ success: false });
  }
}
