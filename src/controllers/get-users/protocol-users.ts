import { Users, UserLogin } from "../../models/user";

export interface IGetUsersController {
  getAllUsers(): Promise<Users[]>;

  getUserByLogin(name: string): Promise<UserLogin | null>;
}
