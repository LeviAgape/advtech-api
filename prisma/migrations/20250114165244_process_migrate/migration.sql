-- CreateTable
CREATE TABLE "processes" (
    "id" TEXT NOT NULL,
    "numberProcess" TEXT NOT NULL,
    "forumName" TEXT NOT NULL,
    "courtName" TEXT NOT NULL,
    "courtNumber" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "defendantName" TEXT NOT NULL,
    "processStatus" TEXT,
    "status" TEXT NOT NULL,
    "pending" TEXT,
    "note" TEXT,
    "processDate" TIMESTAMP(3) NOT NULL,
    "partner" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "processOutcome" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "portion" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "processes_pkey" PRIMARY KEY ("id")
);
