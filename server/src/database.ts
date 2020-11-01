import mongoose from "mongoose";
const localDB = "mongodb://localhost/testee";

const url = process.env.MONGODB_URI || localDB;

export const dbConnect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
