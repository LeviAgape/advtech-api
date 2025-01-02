import { GetUsersRepository, IGetUsersController } from "./protocols";

export class GetUsersController implements IGetUsersController {
  getUsersRepository: GetUsersRepository;
  constructor(getUsersRepository: GetUsersRepository) {
    this.getUsersRepository = getUsersRepository;
  }
  handle() {}
}
