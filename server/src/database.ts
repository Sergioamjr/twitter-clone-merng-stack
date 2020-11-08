import mongoose from "mongoose";
import { User } from "./User/schema";
import { Tweet } from "./Tweet/schema";
const localDB = "mongodb://localhost/twitter";

const url = process.env.MONGODB_URI || localDB;

const dbConnect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const models = { User, Tweet };

export { dbConnect, models };
