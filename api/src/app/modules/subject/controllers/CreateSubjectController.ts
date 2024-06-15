import { HttpResponse } from '../../../../app/presentation/protocols/http'
import { Controller } from '../../../presentation/protocols/controller'
import { CreateSubjectDTO } from '../../../../app/domain/dtos/CreateSubjectDTO'
import { badRequest, ok } from '../../../helpers/http-status'

export class CreateSubjectController implements Controller {
  constructor() {}

  async handle(httpRequest: CreateSubjectDTO): Promise<HttpResponse> {
    const { name, quantityOfHours } = httpRequest.body
    
    if(!name) {
      return badRequest(new Error('Name should be provided'))
    }

    if(quantityOfHours != 72 && quantityOfHours != 36) {
      return badRequest(new Error('The quantity of hours must be 36 or 72'))
    }

    return ok('Created successfully', null)
  }
}