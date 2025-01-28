/*
  Warnings:

  - Changed the type of `status` on the `processes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `processOutcome` on the `processes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ProcessStatus" AS ENUM ('available', 'archived', 'processing');

-- CreateEnum
CREATE TYPE "ProcessOutcome" AS ENUM ('won', 'lost', 'undefined');

-- AlterTable
ALTER TABLE "processes" DROP COLUMN "status",
ADD COLUMN     "status" "ProcessStatus" NOT NULL,
DROP COLUMN "processOutcome",
ADD COLUMN     "processOutcome" "ProcessOutcome" NOT NULL;
