const mongoose = require("mongoose");
const { User } = require("./User/schema");
const { Tweet } = require("./Tweet/schema");

const url = process.env.MONGODB_URI as string;

const dbConnect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const models = { User, Tweet };

export { dbConnect, models };
