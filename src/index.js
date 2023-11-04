"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
require("express-async-errors");
var cors_1 = require("cors");
var index_1 = require("./routes/index");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(index_1.default);
app.listen(5000, function () { return console.log("Server is up and running or port 5000"); });