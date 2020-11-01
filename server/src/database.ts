import mongoose from "mongoose";
import { User } from "./User/schema";
const localDB = "mongodb://localhost/twitter";

const url = process.env.MONGODB_URI || localDB;

const dbConnect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const models = { User };

export { dbConnect, models };
