import { PrismaProcessRepository } from "../../repositories/process";
import { Process } from "../../models/process"; 
import { Request, Response } from "express"; 

export class ProcessController implements ProcessController {
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

  async postProcess(req: Request, res: Response): Promise<void> {
    try {
      const processData = req.body; 
      const createdProcess = await this.prismaProcessRepository.postProcess(processData); 
      res.status(201).json(createdProcess); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error creating process" });
    }
  }
}
