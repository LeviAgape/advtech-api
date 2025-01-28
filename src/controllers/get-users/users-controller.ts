import { IGetUsersController } from "./protocol-users";
import { PrismaUserRepository } from "../../repositories/users";

export class GetUsersController implements IGetUsersController {
  constructor(private readonly prismaUserRepository: PrismaUserRepository) {}

  async handle() {
    try {
      const users = await this.prismaUserRepository.getUsers();
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

  async getAllUsers() {
    try {
      const allUsers = await this.prismaUserRepository.getAllUsers();
      return {
        statusCode: 200,
        body: allUsers,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "error",
      };
    }
  }

  async findById(id: string) {
    try {
      const allUsers = await this.prismaUserRepository.findById(id);
      return {
        statusCode: 200,
        body: allUsers,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "error",
      };
    }
  }
}
