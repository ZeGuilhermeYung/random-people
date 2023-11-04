import { Request, Response, NextFunction } from "express";
import status from "http-status";
import { Error } from "../protocols/error.protocols";

export default function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    console.log(error)

    if (error.type === "UNPROCESSABLE ENTITY")
      return res.status(status.UNPROCESSABLE_ENTITY).send(error.message);

    if (error.type === "CONFLICT")
      return res.status(status.CONFLICT).send(error.message);

    if (error.type === "NOT FOUND")
      return res.status(status.NOT_FOUND).send(error.message);

    return res.status(status.INTERNAL_SERVER_ERROR).send("Desculpe, algo deu errado!");
}