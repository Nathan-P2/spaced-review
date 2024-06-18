import { HttpResponse } from '../../../../app/presentation/protocols/http'
import { Controller } from '../../../presentation/protocols/controller'
import { CreateSubjectDTO } from '../../../../app/domain/dtos/CreateSubjectDTO'
import { badRequest } from '../../../helpers/http-status'
import { CreateSubjectUseCase } from '../useCases/CreateSubjectUseCase'

export class CreateSubjectController implements Controller {
  async handle(httpRequest: CreateSubjectDTO): Promise<HttpResponse> {
    const { name, quantityOfHours } = httpRequest.body
    
    if(!name) {
      return badRequest(new Error('Name should be provided'))
    }

    if(quantityOfHours != 72 && quantityOfHours != 36) {
      return badRequest(new Error('The quantity of hours must be 36 or 72'))
    }

    const createSubjectUseCase = new CreateSubjectUseCase()

    const response = createSubjectUseCase.handle({
      subjectName: name,
      subjectQuantityOfHours: quantityOfHours
    })

    return response
  }
}