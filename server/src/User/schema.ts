import joi from "@hapi/joi";
import createDBSchema from "../utils/createDBSchema";

const [User, userSchema] = createDBSchema(
  {
    name: joi.string().required(),
    userName: joi.string().required(),
    email: joi.string().required(),
    color: joi.string(),
    password: joi.string().required(),
    followers: joi.array().items(joi.string()),
    following: joi.array().items(joi.string()),
  },
  "User"
);

export { User, userSchema };
