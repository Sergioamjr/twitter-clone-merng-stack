import mongoose from "mongoose";
import joigoose from "joigoose";
import joi from "@hapi/joi";

const userSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
});

const mongooseSchema = new mongoose.Schema(
  joigoose(mongoose).convert(userSchema)
);

const User = mongoose.model("User", mongooseSchema);

module.exports = {
  User,
  userSchema,
};
