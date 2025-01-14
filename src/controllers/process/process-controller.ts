import { PrismaProcessRepository } from "../../repositories/process";
import { IGetProcessController } from "./protocol-process";
import { Process } from "../../models/process"; // Ajuste conforme necessário

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
}
