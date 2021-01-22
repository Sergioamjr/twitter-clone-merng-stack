const joi = require("@hapi/joi");
const createDBSchema = require("../utils/createDBSchema");

const [Tweet, tweetSchema] = createDBSchema(
  {
    authorId: joi.string().required(),
    createdAt: joi.string().required(),
    name: joi.string().required(),
    userName: joi.string().required(),
    content: joi.string().required(),
    likedBy: joi.array().items(joi.string()),
  },
  "Tweet"
);

module.exports = { Tweet, tweetSchema };
