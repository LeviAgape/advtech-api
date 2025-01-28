import { prisma } from "../database/prisma-client";
import { Process } from "@prisma/client";
import { IGetProcessController } from "../controllers/process/protocol-process";

export class PrismaProcessRepository implements IGetProcessController {
  async getProcess(): Promise<Process[]> {
    const allUsers = await prisma.process.findMany();
    return allUsers;
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
  }): Promise<Process> {
    return prisma.process.create({
      data: {
        ...data, 
      },
    });
  }
}
