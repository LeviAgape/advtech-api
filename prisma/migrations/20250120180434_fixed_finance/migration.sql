/*
  Warnings:

  - You are about to drop the `Petition` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Petition";

-- CreateTable
CREATE TABLE "petition" (
    "id" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "defendantName" TEXT NOT NULL,
    "processType" TEXT NOT NULL,
    "partner" TEXT NOT NULL,

    CONSTRAINT "petition_pkey" PRIMARY KEY ("id")
);
