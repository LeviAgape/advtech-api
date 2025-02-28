import { Users, UserLogin } from "../../models/user";
import { HttpResponse } from "../protocols-controllers";

export interface IGetUsersController {
  getAllUsers(): Promise<Users[]>;

  getUserByLogin(name: string): Promise<UserLogin | null>;
}
