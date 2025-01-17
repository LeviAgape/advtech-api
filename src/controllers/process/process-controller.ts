import { PrismaProcessRepository } from "../../repositories/process";
import { Process } from "../../models/process";
import { IGetProcessController } from "./protocol-process";

export class ProcessController implements IGetProcessController {
  constructor(
    private readonly prismaProcessRepository: PrismaProcessRepository
  ) {}

  async getProcess(): Promise<Process[]> {
    try {
      const getProcess = await this.prismaProcessRepository.getProcess();
      return getProcess;
    } catch (error) {
      throw new Error("Error fetching processes");
    }
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
    try {
      const createdProcess =
        await this.prismaProcessRepository.postProcess(data);
      return createdProcess;
    } catch (error) {
      throw new Error("Error creating process");
    }
  }
}
