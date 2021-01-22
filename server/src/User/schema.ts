const joii = require("@hapi/joi");
const createDBSchemaa = require("../utils/createDBSchema");

const [User, userSchema] = createDBSchemaa(
  {
    name: joii.string().required(),
    userName: joii.string().required(),
    email: joii.string().required(),
    password: joii.string().required(),
    friends: joii.array().items(joii.string()),
  },
  "User"
);

module.exports = { User, userSchema };
