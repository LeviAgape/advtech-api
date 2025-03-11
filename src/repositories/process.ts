import { prisma } from "../database/prisma-client";
import { Process } from "@prisma/client";
import { IGetProcessController } from "../controllers/process/protocol-process";
import { Finance } from "@prisma/client";
import { FilterProcessFinance } from "../models/process";

export class PrismaProcessRepository implements IGetProcessController {
  async getProcess(): Promise<Process[]> {
    const allUsers = await prisma.process.findMany();
    return allUsers;
  }

  async getProcessByDefendantName(
    defendantName: string
  ): Promise<FilterProcessFinance[]> {
    const processes = await prisma.process.findMany({
      where: {
        defendantName: {
          contains: defendantName,
          mode: "insensitive",
        },
      },
      select: {
        id: true,
        numberProcess: true,
        defendantName: true,
        value: true,
        portion: true,
      },
    });

    return processes;
  }

  async getFilterProcessFinance(): Promise<FilterProcessFinance[]> {
    const getFilterProcessFinance = await prisma.process.findMany({
      select: {
        id: true,
        numberProcess: true,
        defendantName: true,
        value: true,
        portion: true,
      },
    });
    return getFilterProcessFinance;
  }

  async postProcess(data: {
    numberProcess: string;
    forumName: string;
    courtName: string;
    courtNumber: string;
    author: string;
    defendantName: string;
    processStatus?: string | null;
    status: "available" | "archived" | "processing";
    pending?: string | null;
    note?: string | null;
    processDate: string;
    partner: string;
    department: string;
    processOutcome: "won" | "lost" | "undefined";
    value: number;
    portion: number;
  }): Promise<{ process: Process; finance: Finance }> {
    const createdProcess = await prisma.process.create({
      data: {
        ...data,
      },
    });

    const createdFinance = await prisma.finance.create({
      data: {
        processId: createdProcess.id,
        value: data.value,
        portion: data.portion,
      },
    });

    return {
      process: createdProcess,
      finance: createdFinance,
    };
  }

  async putProcess(
    id: string,
    data: {
      numberProcess?: string;
      forumName?: string;
      courtName?: string;
      courtNumber?: string;
      author?: string;
      defendantName?: string;
      processStatus?: string | null;
      status?: "available" | "archived" | "processing";
      pending?: string | null;
      note?: string | null;
      processDate?: string;
      partner?: string;
      department?: string;
      processOutcome?: "won" | "lost" | "undefined";
      value?: number;
      portion?: number;
    }
  ): Promise<Process> {
    const updatedProcess = await prisma.process.update({
      where: { id },
      data,
    });
    return updatedProcess;
  }
}
