import { HttpResponse } from "../presentation/protocols/http"

export const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    message: error.message
  }
}

export const notFount = (error: Error): HttpResponse => {
  return {
    statusCode: 404,
    message: error.message
  }
}

export const ok = (message: string, data: any): HttpResponse => {
  return {
    statusCode: 200,
    message: message,
    body: data
  }
}