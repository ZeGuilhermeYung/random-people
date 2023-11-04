import { Error } from "protocols/error.protocols"

export function conflictError (message: string) {
  return <Error>{ type: "CONFLICT", message }
}

export function notFound (message: string) {
  return <Error>{ type: "NOT FOUND", message }
}

export function unprocessableEntity (message: string) {
  return <Error>{ type: "UNPROCESSABLE ENTITY", message }
}