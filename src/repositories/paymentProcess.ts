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

  async postPaymentProcess(
    processId: string,
    data: {
      paidAmount: number;
      paidPortion: number;
      paidDate: string;
    }
  ): Promise<PaymentProcess> {
    const createdPaymentProcess = await prisma.paymentProcess.create({
      data: {
        processId,
        paidAmount: data.paidAmount,
        paidPortion: data.paidPortion,
        paidDate: data.paidDate,
      },
    });
    return createdPaymentProcess;
  }
}
