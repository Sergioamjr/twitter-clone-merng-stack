import mongoose from "mongoose";
import { User } from "./User/schema";
import { Tweet } from "./Tweet/schema";
import { Comment } from "./Comment/schema";

const url = process.env.MONGODB_URI as string;

const dbConnect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const models = { User, Tweet, Comment };

export { dbConnect, models };
