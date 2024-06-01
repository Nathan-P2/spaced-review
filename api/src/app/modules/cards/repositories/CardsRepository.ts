import DataBaseConnection from "@src/app/infra/database/DataBaseConnectionInterface";
import { Card } from "../models/Card";
import { CardsRepositoryInterface } from "./Interfaces/CardsRepositoryInterface";


class CardsRepository implements CardsRepositoryInterface {
  private connection: DataBaseConnection;

  constructor(connection: DataBaseConnection) {
    this.connection = connection;
  }

  async createCard(card: Card): Promise<Card> {
    const query = `INSERT INTO cards(cardTitle, cardDescription) VALUES (${card.cardTitle}, ${card.cardDescription})`
    
    const cardResponse: Card = await this.connection.executeQuery(query)

    return cardResponse;
  }
}

export default CardsRepository;