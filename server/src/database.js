"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var User = require("./User/schema").User;
var Tweet = require("./Tweet/schema").Tweet;
var url = process.env.MONGODB_URI;
var dbConnect = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
var models = { User: User, Tweet: Tweet };
module.exports = { dbConnect: dbConnect, models: models };
