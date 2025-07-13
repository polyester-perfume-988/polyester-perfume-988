-- CreateEnum
CREATE TYPE "Material" AS ENUM ('carbon', 'steel', 'iron', 'aluminum');

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "material" "Material" NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);
