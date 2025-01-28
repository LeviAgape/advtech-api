/*
  Warnings:

  - The primary key for the `finances` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `finances` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "finances_processId_key";

-- AlterTable
ALTER TABLE "finances" DROP CONSTRAINT "finances_pkey",
DROP COLUMN "id",
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "finances_pkey" PRIMARY KEY ("processId");
