import { prisma } from "../database/prisma-client";
import { Petition } from "@prisma/client";
import { IGetPetitionController } from "../controllers/petition/protocol-petition";

export class PrismaPetitionRepository implements IGetPetitionController {
  async getPetition(): Promise<Petition[]> {
    const allPetition = await prisma.petition.findMany();
    return allPetition;
  }

  async postPetition(data: {
    author: string;
    defendantName: string;
    processType: string;
    partner: string;
  }): Promise<Petition> {
    return prisma.petition.create({
      data: {
        ...data,
      },
    });
  }
  async putPetition(
    id: string,
    data: {
      author?: string;
      defendantName?: string;
      processType?: string;
      partner?: string;
    }
  ): Promise<Petition> {
    const updatedPetition = await prisma.petition.update({
      where: { id }, 
      data, 
    });
    return updatedPetition;
  }
}
