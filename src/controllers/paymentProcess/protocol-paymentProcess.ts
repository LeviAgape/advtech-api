import { PaymentProcess } from "../../models/paymentProcess";

export interface IGetPaymentProcessController {
  getPaymentProcess(): Promise<PaymentProcess[]>;
}
