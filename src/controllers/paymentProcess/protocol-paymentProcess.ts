import { PaymentProcess } from "../../models/paymentProcess";

export interface IGetPaymentProcessController {
  getPaymentProcess(): Promise<PaymentProcess[]>;

  postPaymentProcess(
    processId: string,
    data: {
      paidAmount: number;
      paidPortion: number;
      paidDate: string;
    }
  ): Promise<PaymentProcess>;
}
