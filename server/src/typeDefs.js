"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gql = require("apollo-server").gql;
var userTypes = require("./User/types").types;
var tweetTypes = require("./Tweet/types").types;
var root = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    root: String\n  }\n  type Mutation {\n    root: String\n  }\n"], ["\n  type Query {\n    root: String\n  }\n  type Mutation {\n    root: String\n  }\n"])));
module.exports = [root, userTypes, tweetTypes];
var templateObject_1;
