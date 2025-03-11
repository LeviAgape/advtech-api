-- CreateTable
CREATE TABLE "paymentProcess" (
    "processId" TEXT NOT NULL,
    "paidAmount" DOUBLE PRECISION NOT NULL,
    "paidPortion" INTEGER NOT NULL,
    "paidDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "paymentProcess_pkey" PRIMARY KEY ("processId")
);

-- AddForeignKey
ALTER TABLE "paymentProcess" ADD CONSTRAINT "paymentProcess_processId_fkey" FOREIGN KEY ("processId") REFERENCES "processes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
