-- CreateTable
CREATE TABLE "finances" (
    "id" TEXT NOT NULL,
    "processId" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "portion" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "finances_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "finances_processId_key" ON "finances"("processId");

-- AddForeignKey
ALTER TABLE "finances" ADD CONSTRAINT "finances_processId_fkey" FOREIGN KEY ("processId") REFERENCES "processes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
