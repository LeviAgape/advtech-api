import { Petition } from "../../models/petition";

export interface IGetPetitionController {
  getPetition(): Promise<Petition[]>;

  postPetition(data: {
    author: string;
    defendantName: string;
    processType: string;
    partner: string;
  }): Promise<Petition>;
}
