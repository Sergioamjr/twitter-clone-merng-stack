"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var joi = require("@hapi/joi");
var createDBSchema = require("../utils/createDBSchema");
var _a = __read(createDBSchema({
    authorId: joi.string().required(),
    createdAt: joi.string().required(),
    name: joi.string().required(),
    userName: joi.string().required(),
    content: joi.string().required(),
    likedBy: joi.array().items(joi.string()),
}, "Tweet"), 2), Tweet = _a[0], tweetSchema = _a[1];
module.exports = { Tweet: Tweet, tweetSchema: tweetSchema };
