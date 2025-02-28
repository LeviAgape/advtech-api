import { User } from "@prisma/client";
import { prisma } from "../database/prisma-client";
import { Users, UserLogin } from "../models/user";
import { IGetUsersController } from "../controllers/get-users/protocol-users";

export class PrismaUserRepository implements IGetUsersController {
  async getAllUsers(): Promise<User[]> {
    const allUsers = prisma.user.findMany();
    return allUsers;
  }

  async findById(id: string): Promise<User | null> {
    const findById = prisma.user.findUnique({
      where: { id },
    });
    return findById;
  }

  async getUserByLogin(name: string): Promise<UserLogin | null> {
    const user = await prisma.user.findUnique({
      where: { name },
      select: {
        name: true,
        password: true,
      },
    });

    return user;
  }
}
