import { Process } from "../../models/process";

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
  }): Promise<Process>;
}
