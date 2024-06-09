import { HttpResponse } from "@src/app/presentation/protocols/http";
import { Card } from "../../models/Card";

export interface ICreateCardInterface {
  handle(card: Card): Promise<HttpResponse>
}