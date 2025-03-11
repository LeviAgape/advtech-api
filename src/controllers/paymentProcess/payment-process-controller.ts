import { PaymentProcess } from "../../models/paymentProcess";
import { PrismaPaymentProcessRepository } from "../../repositories/paymentProcess";
import { IGetPaymentProcessController } from "./protocol-paymentProcess";

export class PaymentProcessController implements IGetPaymentProcessController {
  constructor(
    private readonly prismaPaymentProcessRepository: PrismaPaymentProcessRepository
  ) {}

  async getPaymentProcess(): Promise<PaymentProcess[]> {
    try {
      const allPayment =
        await this.prismaPaymentProcessRepository.getPaymentProcess();
      return allPayment;
    } catch (error) {
      throw new Error("Error fetching payments");
    }
  }

  async postPaymentProcess(
    processId: string, 
    data: {
      paidAmount: number;
      paidPortion: number;
      paidDate: string;
    }
  ): Promise<PaymentProcess> {
    try {
      if (!processId) {
        throw new Error("Process not found");
      }

      if (!data.paidAmount || !data.paidPortion || !data.paidDate) {
        throw new Error("All payment must be provided");
      }

      return await this.prismaPaymentProcessRepository.postPaymentProcess(
        processId,
        data
      );
    } catch (error) {
      throw new Error("Error creating payment");
    }
  }
}
