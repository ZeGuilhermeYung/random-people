"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_controllers_1 = require("controllers/person.controllers");
var express_1 = require("express");
var personRouter = (0, express_1.Router)();
personRouter.get('/person', person_controllers_1.default);
exports.default = personRouter;
