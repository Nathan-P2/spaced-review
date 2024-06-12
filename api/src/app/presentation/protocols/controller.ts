import { HttpResponse } from '../protocols/http'

export interface Controller<T> {
  handle: (request: T) => Promise<HttpResponse>
}