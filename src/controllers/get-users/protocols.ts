import { User } from "../../models/user";

export interface IGetUsersController {
  handle(): any;
}

export interface GetUsersRepository {
  getUsers(): Promise<User[]>;
}
