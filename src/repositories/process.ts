import { prisma } from "../database/prisma-client";
import { Process } from "@prisma/client";
import { IGetProcessController } from "../controllers/process/protocol-process";

export class PrismaProcessRepository implements IGetProcessController {
 async getProcess(): Promise<Process[]> {
    const allUsers = prisma.process.findMany();
    return allUsers
  }
}
