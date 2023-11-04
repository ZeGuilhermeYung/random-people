"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var error_handler_1 = require("../middlewares/error.handler");
var person_routes_1 = require("./person.routes");
var router = (0, express_1.Router)();
router.use(error_handler_1.default);
router.use(person_routes_1.default);
exports.default = router;
