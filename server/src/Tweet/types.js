"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var gql = require("apollo-server").gql;
var types = gql(__makeTemplateObject(["\n  type Tweet {\n    _id: ID\n    authorId: String\n    name: String\n    userName: String\n    createdAt: String\n    content: String\n    likedBy: [String]\n  }\n\n  extend type Query {\n    getTweets: [Tweet]\n  }\n\n  extend type Mutation {\n    getMyFriendsTweets(_id: String!): [Tweet]\n    getTweetByUserID(_id: String!): [Tweet]\n    newTweet(content: String, token: String!): Tweet\n    deleteTweet(_id: String, token: String): Boolean\n    like(_id: String, token: String): Tweet\n    deslike(_id: String, token: String): Tweet\n  }\n"], ["\n  type Tweet {\n    _id: ID\n    authorId: String\n    name: String\n    userName: String\n    createdAt: String\n    content: String\n    likedBy: [String]\n  }\n\n  extend type Query {\n    getTweets: [Tweet]\n  }\n\n  extend type Mutation {\n    getMyFriendsTweets(_id: String!): [Tweet]\n    getTweetByUserID(_id: String!): [Tweet]\n    newTweet(content: String, token: String!): Tweet\n    deleteTweet(_id: String, token: String): Boolean\n    like(_id: String, token: String): Tweet\n    deslike(_id: String, token: String): Tweet\n  }\n"]));
module.exports = {
    types: types,
};
