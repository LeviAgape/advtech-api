import { prisma } from "../database/prisma-client";
import { Finance } from "@prisma/client";
import { IGetFinanceController } from "../controllers/finance/protocol-finance";

export class PrismaFinanceRepository implements IGetFinanceController {
  async getFinance(): Promise<Finance[]> {
    try {
      // Consulta para buscar todos os registros de finanças
      const finances = await prisma.finance.findMany();
      return finances;
    } catch (error) {
      throw new Error("Error fetching finances");
    }
  }
}
