import { Petition } from "../../models/petition";
import { PrismaPetitionRepository } from "../../repositories/petition";
import { IGetPetitionController } from "./protocol-petition";

export class PetitionController implements IGetPetitionController {
  constructor(
    private readonly prismaPetityRepository: PrismaPetitionRepository
  ) {}

  async getPetition(): Promise<Petition[]> {
    try {
      const getPetition = await this.prismaPetityRepository.getPetition();
      return getPetition;
    } catch (error) {
      throw new Error("Error fetching processes");
    }
  }

  async postPetition(data: {
    author: string;
    defendantName: string;
    processType: string;
    partner: string;
  }): Promise<Petition> {
    try {
      const createdPetition =
        await this.prismaPetityRepository.postPetition(data);
      return createdPetition;
    } catch (error) {
      throw new Error("Error fetching processes");
    }
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
    try {
      const updatedPetition = await this.prismaPetityRepository.putPetition(id, data);
      return updatedPetition;
    } catch (error) {
      throw new Error("Error updating petition");
    }
  }
  
}

