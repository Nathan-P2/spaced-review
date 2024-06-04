import { Controller } from "@src/app/presentation/protocols/controller";
import { HttpResponse } from "@src/app/presentation/protocols/http";
import CreateCardUseCase from "../useCases/CreateCardUseCase";

export class CreateCardController implements Controller {
  constructor() {}
  
  async handle(req: CreateCardController.Request): Promise<HttpResponse> {
    const createCardUseCase = new CreateCardUseCase();

    await createCardUseCase.handle({
      cardDescription: 'teste',
      cardTitle: 'teste'
    })

    return {
      statusCode: 200,
      body: {
        message: 'successfully created'
      }
    }
  }
}

export namespace CreateCardController {
  export type Request = {
    cardTitle: string;
    cardDescription: string;
  }
}