-- CreateTable
CREATE TABLE "Petition" (
    "id" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "defendantName" TEXT NOT NULL,
    "processType" TEXT NOT NULL,
    "partner" TEXT NOT NULL,

    CONSTRAINT "Petition_pkey" PRIMARY KEY ("id")
);
