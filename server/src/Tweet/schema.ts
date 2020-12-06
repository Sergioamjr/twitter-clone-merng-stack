import joi from "@hapi/joi";
import createDBSchema from "../utils/createDBSchema";

const [Tweet, tweetSchema] = createDBSchema(
  {
    authorId: joi.string().required(),
    createdAt: joi.string().required(),
    content: joi.string().required(),
    likedBy: joi.array().items(joi.string()),
  },
  "Tweet"
);

export { Tweet, tweetSchema };
