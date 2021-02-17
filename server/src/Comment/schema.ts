import joi from "@hapi/joi";
import createDBSchema from "../utils/createDBSchema";

const [Comment, CommentSchema] = createDBSchema(
  {
    authorId: joi.string().required(),
    avatarColor: joi.string(),
    createdAt: joi.string().required(),
    name: joi.string().required(),
    userName: joi.string().required(),
    content: joi.string().required(),
    likedBy: joi.array().items(joi.string()),
    originalTweet: joi.string().required(),
  },
  "Comment"
);

export { Comment, CommentSchema };
