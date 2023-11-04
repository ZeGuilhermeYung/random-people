import { Request, Response, NextFunction } from "express";
import status from "http-status";
import { Error } from "../protocols/error.protocols";

export default function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    if (error.type === "UNPROCESSABLE_ENTITY")
      return res.status(status.UNPROCESSABLE_ENTITY).send(error.message);

    if (error.type === "CONFLICT")
      return res.status(status.CONFLICT).send(error.message);

    if (error.type === "NOT_FOUND")
      return res.status(status.NOT_FOUND).send(error.message);

    return res.status(status.INTERNAL_SERVER_ERROR).send("Desculpe, algo deu errado!");
}