import { CreateSubjectDTO } from "@src/app/domain/dtos/createSubjectDTO"
import { CreateSubjectController } from "../controllers/CreateSubjectController"

describe('CreateSubject context', () => {
  function makeCreateSubject() {
    const createSubjectController = new CreateSubjectController()

    return createSubjectController
  }

  it('should return error if subject dont have name', async () => {
    const sut = makeCreateSubject()
    const httpRequest: CreateSubjectDTO = {
      body: {
        quantityOfHours: 4,
        name: ''
      }
    }

    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
  })

  it('should return error if subject is not 36 or 72', async () => {
    const sut = makeCreateSubject()
    const httpRequest: CreateSubjectDTO = {
      body: {
        quantityOfHours: 0,
        name: 'Teoria dos Grafos'
      }
    }

    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
  })
})