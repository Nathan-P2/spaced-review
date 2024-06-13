export type HttpResponse = {
  statusCode: number
  message: string,
  body?: any
}

export type HttpRequest = {
  body?: any,
  params?: any,
  query?: any
}