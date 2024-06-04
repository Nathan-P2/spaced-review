import { provideDatabaseConnection } from "@src/app/infra/database/DataBaseHelper";
import CardsRepository from "../repositories/CardsRepository";
import { Card } from "../models/Card";

class CreateCardUseCase {
  private cardRepository: CardsRepository;

  constructor() {
    const connection = provideDatabaseConnection();
    this.cardRepository = new CardsRepository(connection);
  }

  async handle(card: Card) {
    await this.cardRepository.createCardMongo(card)
  }
}

export default CreateCardUseCase;