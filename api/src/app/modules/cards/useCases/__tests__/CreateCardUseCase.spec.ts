import { Card } from "../../models/Card";
import CreateCardUseCase from "../CreateCardUseCase"
import { ICreateCardInterface } from "../interfaces/ICreateCardUseCase";


describe('Create a new card', () => {
  let createCardUseCase: ICreateCardInterface

  beforeEach(() => {
    createCardUseCase = new CreateCardUseCase();
  })

  it('should be return 400 if dont have cardDescription', async () => {
    const card: Card = {
      cardDescription: '',
      cardTitle: 'Teste'
    }

    const response = await createCardUseCase.handle(card)

    expect(response.statusCode).toBe(400)
  })
})