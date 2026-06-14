export type UserEntity = {
  _id: string;
  name: string;
  userName: string;
  email: string;
  color: string;
  password?: string;
  followers: string[];
  following: string[];
};

// name: joi.string().required(),
// userName: joi.string().required(),
// email: joi.string().required(),
// color: joi.string(),
// password: joi.string().required(),
// followers: joi.array().items(joi.string()),
// following: joi.array().items(joi.string()),
