import { provideDatabaseConnection } from "@src/app/infra/database/DataBaseHelper";
import CardsRepository from "../repositories/CardsRepository";
import { Card } from "../models/Card";
import { HttpResponse } from "@src/app/presentation/protocols/http";

class CreateCardUseCase {
  private cardRepository: CardsRepository;

  constructor() {
    const connection = provideDatabaseConnection();
    this.cardRepository = new CardsRepository(connection);
  }

  async handle(card: Card): Promise<HttpResponse> {
    try {
      if(!card.cardDescription) {
        return {
          body: {
            message: 'Card description not provided'
          },
          statusCode: 400
        }
      }

      if(!card.cardTitle) {
        return {
          body: {
            message: 'Card title not provided'
          },
          statusCode: 400
        }
      }

      await this.cardRepository.createCardMongo(card)

      return {
        body: {
          message: 'Card created successfully'
        },
        statusCode: 200
      }
    } catch(err: any) {
      return {
        body: {
          message: err.message
        },
        statusCode: 400
      }
    }
  }
}

export default CreateCardUseCase;