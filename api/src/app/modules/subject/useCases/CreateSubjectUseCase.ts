import { Subject } from "@src/app/domain/models/Subject";
import { ok } from "@src/app/helpers/http-status";
import { HttpResponse } from "@src/app/presentation/protocols/http";

export class CreateSubjectUseCase {
  async handle(subject: Subject): Promise<HttpResponse> {
    return ok('Subject created successfully')
  }
}