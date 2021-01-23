"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
// eslint-disable-next-line @typescript-eslint/no-var-requires
var joigoose = require("joigoose")(mongoose);
var joi_1 = __importDefault(require("@hapi/joi"));
var createDBSchema = function (object, name) {
    var schema = joi_1.default.object(object);
    var mongooseSchema = new mongoose.Schema(joigoose.convert(schema));
    var model = mongoose.model(name, mongooseSchema);
    return [model, schema];
};
module.exports = createDBSchema;
