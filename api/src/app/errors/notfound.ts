import { HttpResponse } from "../presentation/protocols/http";

export function notFound(error: Error): HttpResponse {
  return {
    statusCode: 404,
    message: error.message
  }
}