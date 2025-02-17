import { Process } from "../../models/process";
import { Finance } from "../../models/finance";

export interface IGetProcessController {
  getProcess(): Promise<Process[]>;

  postProcess(data: {
    numberProcess: string;
    forumName: string;
    courtName: string;
    courtNumber: string;
    author: string;
    defendantName: string;
    processStatus?: string | null;
    status: "available" | "archived" | "processing";
    pending?: string | null;
    note?: string | null;
    processDate: string;
    partner: string;
    department: string;
    processOutcome: "won" | "lost" | "undefined";
    value: number;
    portion: number;
  }): Promise<{ process: Process; finance: Finance }>;

  putProcess(
    id: string,
    data: {
      numberProcess?: string;
      forumName?: string;
      courtName?: string;
      courtNumber?: string;
      author?: string;
      defendantName?: string;
      processStatus?: string | null;
      status?: "available" | "archived" | "processing";
      pending?: string | null;
      note?: string | null;
      processDate?: string;
      partner?: string;
      department?: string;
      processOutcome?: "won" | "lost" | "undefined";
      value?: number;
      portion?: number;
    }
  ): Promise<Process>;
}
