import { PrismaProcessRepository } from "../../repositories/process";
import { Process } from "../../models/process";
import { IGetProcessController } from "./protocol-process";
import { Finance } from "../../models/finance";
import { PrismaFinanceRepository } from "../../repositories/finance";
import { FilterProcessFinance } from "../../models/process";

export class ProcessController implements IGetProcessController {
  constructor(
    private readonly prismaProcessRepository: PrismaProcessRepository
  ) {}

  async getProcess(): Promise<Process[]> {
    try {
      return await this.prismaProcessRepository.getProcess();
    } catch (error) {
      throw new Error("Error fetching processes");
    }
  }

  async getProcessByDefendantName(
    defendantName: string
  ): Promise<FilterProcessFinance[]> {
    return await this.prismaProcessRepository.getProcessByDefendantName(
      defendantName
    );
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
    updatedAt: Date; 
  }): Promise<{ process: Process; finance: Finance }> {
    try {
      const createdProcess =
        await this.prismaProcessRepository.postProcess(data);

      const prismaFinanceRepository = new PrismaFinanceRepository();

      const createdFinance = await prismaFinanceRepository.postFinance({
        processId: createdProcess.process.id,
        value: data.value,
        portion: data.portion,
      });

      return { process: createdProcess.process, finance: createdFinance };
    } catch (error) {
      throw new Error("Error creating process and finance");
    }
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
    try {
      return await this.prismaProcessRepository.putProcess(id, data);
    } catch (error) {
      throw new Error("Error updating process");
    }
  }
}
