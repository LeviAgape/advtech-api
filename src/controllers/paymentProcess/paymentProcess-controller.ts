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
}
