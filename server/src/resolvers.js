"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require("./generated/graphql"), QueryResolvers = _a.QueryResolvers, MutationResolvers = _a.MutationResolvers;
var _b = require("./User/resolvers"), userQueries = _b.query, userMutations = _b.mutation;
var _c = require("./Tweet/resolvers"), tweetQueries = _c.query, tweetMutations = _c.mutation;
var Query = __assign(__assign({}, userQueries), tweetQueries);
var Mutation = __assign(__assign({}, userMutations), tweetMutations);
module.exports = {
    Query: Query, Mutation: Mutation
};
