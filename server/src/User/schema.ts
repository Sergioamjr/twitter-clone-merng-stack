import mongoose from "mongoose";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const joigoose = require("joigoose")(mongoose);
import joi from "@hapi/joi";

const userSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
});

const mongooseSchema = new mongoose.Schema(joigoose.convert(userSchema));

const User = mongoose.model("User", mongooseSchema);

export { User, userSchema };
