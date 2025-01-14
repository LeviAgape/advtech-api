import { GetUsersRepository } from "../controllers/get-users/protocol-users";
import { User } from "@prisma/client";
import { prisma } from "../database/prisma-client";

export class PrismaUserRepository implements GetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [{
        id: "1",
        name: "Bianca",
        password: "12",
        createdAt: new Date('2025-01-02T19:27:44.260Z'),  // Criando a data com o formato ISO 8601
        updatedAt: new Date('2025-01-02T19:27:44.260Z'),  // Criando a d
    },
];
  }

  async getAllUsers(): Promise<User[]> {
    const allUsers = prisma.user.findMany();
    return allUsers
  }

  async findById(id: string): Promise<User | null>{
    const findById = prisma.user.findUnique({
      where: {id},
    });
    return findById
  }
}

export class PrismaUser {
}
