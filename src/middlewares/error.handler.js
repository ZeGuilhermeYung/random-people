"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_1 = require("http-status");
function errorHandler(error, req, res, next) {
    console.log(error);
    if (error.type === "UNPROCESSABLE ENTITY")
        return res.status(http_status_1.default.UNPROCESSABLE_ENTITY).send(error.message);
    if (error.type === "CONFLICT")
        return res.status(http_status_1.default.CONFLICT).send(error.message);
    if (error.type === "NOT FOUND")
        return res.status(http_status_1.default.NOT_FOUND).send(error.message);
    return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send("Desculpe, algo deu errado!");
}
exports.default = errorHandler;
