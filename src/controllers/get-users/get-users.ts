import { GetUsersRepository, IGetUsersController } from "./protocol-users";

export class GetUsersController implements IGetUsersController {
  constructor(private readonly getUsersRepository: GetUsersRepository) {}

  async handle() {
    try {
      const users = await this.getUsersRepository.getUsers();

      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Error",
      };
    }
  }
}
