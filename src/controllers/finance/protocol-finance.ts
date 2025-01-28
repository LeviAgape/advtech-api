import { Finance } from "../../models/finance";

export interface IGetFinanceController {
  getFinance(): Promise<Finance[]>;
}
