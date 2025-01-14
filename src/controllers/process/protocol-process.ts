import { Process } from "../../models/process";
import { HttpResponse } from "../protocols-controllers";

export interface IGetProcessController {
  getProcess(): Promise<Process[]>;
}