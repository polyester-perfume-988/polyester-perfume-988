import { Request, Response } from "express";
import { UTApi } from "uploadthing/server";

import prisma from "@prisma/client";

const utapi = new UTApi({ token: process.env.UPLOADTHING_TOKEN });
const prismaClient = new prisma.PrismaClient();

export async function createOrder(req: Request, res: Response) {
  const file = req.file;
  const userId = res.locals.userId;
  const { name, address, phoneNumber, paymentMethod, material } = req.body;

  if (!file)
    return res.status(400).json({
      success: false,
      errors: { file: { message: "File is required" } },
    });

  try {
    const fileObj = new File([file.buffer], file.originalname);
    const uploadedFile = await utapi.uploadFiles([fileObj]);

    if (!uploadedFile[0].data?.ufsUrl)
      return res.status(400).json({
        success: false,
        errors: { file: { message: "File is not uploaded" } },
      });

    const order = await prismaClient.order.create({
      data: {
        name,
        address,
        phoneNumber,
        paymentMethod,
        materialId: parseInt(material),
        fileUrl: uploadedFile[0].data?.ufsUrl,
        userId: userId!,
      },
    });

    return res.status(200).json({ success: true, order });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
}
