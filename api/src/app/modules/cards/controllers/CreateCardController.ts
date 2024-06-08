import { Controller } from "@src/app/presentation/protocols/controller";
import { HttpResponse } from "@src/app/presentation/protocols/http";
import CreateCardUseCase from "../useCases/CreateCardUseCase";

export class CreateCardController implements Controller {
  constructor() {}
  
  async handle(req: CreateCardController.Request): Promise<HttpResponse> {
    const createCardUseCase = new CreateCardUseCase();

    const response = await createCardUseCase.handle({ cardDescription: req.body.cardDescription, cardTitle: req.body.cardTitle })

    return response
  }
}

export namespace CreateCardController {
  export type Request = {
    body: {
      cardTitle: string;
      cardDescription: string;
    }
  }
}