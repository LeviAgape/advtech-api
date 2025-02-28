import { IGetUsersController } from "./protocol-users";
import { PrismaUserRepository } from "../../repositories/users";
import { UserLogin, Users  } from "../../models/user";

export class GetUsersController implements IGetUsersController {
  constructor(private readonly prismaUserRepository: PrismaUserRepository) {}


  async getAllUsers(): Promise<Users[]> {
    try {
      return await this.prismaUserRepository.getAllUsers();
    } catch (error) {
      throw new Error("Error fetching processes");
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

  async getUserByLogin(name: string): Promise<UserLogin | null> {
    return await  this.prismaUserRepository.getUserByLogin(name);
  }
  
}
