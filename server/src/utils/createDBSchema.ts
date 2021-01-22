const mongoose = require("mongoose");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const joigoose = require("joigoose")(mongoose);
import joi from "@hapi/joi";

const createDBSchema = (object: any, name: string): any => {
  const schema = joi.object(object);
  const mongooseSchema = new mongoose.Schema(joigoose.convert(schema));
  const model = mongoose.model(name, mongooseSchema);
  return [model, schema];
};

module.exports = createDBSchema;
