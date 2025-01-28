import { Finance } from "../../models/finance";
import { IGetFinanceController } from "./protocol-finance";
import { PrismaFinanceRepository } from "../../repositories/finance";

export class FinanceController implements IGetFinanceController {
  constructor(
    private readonly prismaFinanceRepository: PrismaFinanceRepository
  ) {}

  async getFinance(): Promise<Finance[]> {
    try {
      const getFinance = await this.prismaFinanceRepository.getFinance();
      return getFinance;
    } catch (error) {
      throw new Error("Error fetching processes");
    }
  }
}
