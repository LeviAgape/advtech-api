/*
  Warnings:

  - You are about to drop the `paymentProcess` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "paymentProcess" DROP CONSTRAINT "paymentProcess_processId_fkey";

-- DropTable
DROP TABLE "paymentProcess";

-- CreateTable
CREATE TABLE "payment_process" (
    "processId" TEXT NOT NULL,
    "paidAmount" DOUBLE PRECISION NOT NULL,
    "paidPortion" INTEGER NOT NULL,
    "paidDate" TEXT NOT NULL,

    CONSTRAINT "payment_process_pkey" PRIMARY KEY ("processId")
);

-- AddForeignKey
ALTER TABLE "payment_process" ADD CONSTRAINT "payment_process_processId_fkey" FOREIGN KEY ("processId") REFERENCES "processes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
