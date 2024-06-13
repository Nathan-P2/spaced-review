import { HttpResponse } from "../presentation/protocols/http";

export function badRequest(error: Error): HttpResponse {
  return {
    statusCode: 400,
    message: error.message
  }
}