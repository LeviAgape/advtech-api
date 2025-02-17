import { prisma } from "../database/prisma-client";
import { IGetFinanceController } from "../controllers/finance/protocol-finance";
import { Finance } from "../models/finance";

export class PrismaFinanceRepository implements IGetFinanceController {
  async getFinance(): Promise<Finance[]> {
    try {
      const finances = await prisma.finance.findMany();
      return finances;
    } catch (error) {
      throw new Error("Error fetching finances");
    }
  }

  async postFinance(data: {
    processId: string;
    value: number;
    portion: number;
  }): Promise<Finance> {
    try {
      const createdFinance = await prisma.finance.create({
        data: {
          ...data,
        },
      });
      return createdFinance;
    } catch (error) {
      throw new Error("Error creating finances");
    }
  }
}
