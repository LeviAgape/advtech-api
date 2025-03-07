import { prisma } from "../database/prisma-client";
import { PaymentProcess } from "@prisma/client";
import { IGetPaymentProcessController } from "../controllers/paymentProcess/protocol-paymentProcess";

export class PrismaPaymentProcessRepository
  implements IGetPaymentProcessController
{
  async getPaymentProcess(): Promise<PaymentProcess[]> {
    const allPayment = await prisma.paymentProcess.findMany();
    return allPayment;
  }
}
