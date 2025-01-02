import { User } from "../../models/user";
import { HttpResponse } from "../protocols-controllers";

export interface IGetUsersController {
  handle(): Promise<HttpResponse<User[]>>;
}

export interface GetUsersRepository {
  getUsers(): Promise<User[]>;
}
