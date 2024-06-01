import { Card } from "../../models/Card";

export interface CardsRepositoryInterface {
  createCard(card: Card): Promise<Card>;
}