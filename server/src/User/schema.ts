import joi from "@hapi/joi";
import createDBSchema from "../utils/createDBSchema";

const [User, userSchema] = createDBSchema(
  {
    name: joi.string().required(),
    userName: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    friends: joi.array().items(joi.string()),
  },
  "User"
);

export { User, userSchema };
