"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var _a = require("../User/resolvers"), verifyToken = _a.verifyToken, TokenDecoded = _a.TokenDecoded;
var _b = require("./../generated/graphql"), QueryResolvers = _b.QueryResolvers, MutationResolvers = _b.MutationResolvers;
var query = {
    getTweets: function (_, args, context) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, context.dataSources.Tweet.find().sort({ createdAt: 1 }).exec()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
};
var mutation = {
    like: function (_, _a, context) {
        var _id = _a._id, token = _a.token;
        return __awaiter(void 0, void 0, void 0, function () {
            var decoded, tweet, likes, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, verifyToken(token)];
                    case 1:
                        decoded = _b.sent();
                        return [4 /*yield*/, context.dataSources.Tweet.findOne({ _id: _id })];
                    case 2:
                        tweet = _b.sent();
                        if (!tweet)
                            Error("Tweet não existe");
                        likes = new Set(tweet.likedBy);
                        likes.add(decoded._id);
                        tweet.likedBy = __spread(likes);
                        return [4 /*yield*/, context.dataSources.Tweet.findOneAndUpdate({ _id: _id }, tweet)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, context.dataSources.Tweet.findOne({ _id: _id })];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5:
                        err_1 = _b.sent();
                        throw Error(err_1);
                    case 6: return [2 /*return*/];
                }
            });
        });
    },
    deslike: function (_, _a, context) {
        var _id = _a._id, token = _a.token;
        return __awaiter(void 0, void 0, void 0, function () {
            var decoded_1, tweet, newLikedBy, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, verifyToken(token)];
                    case 1:
                        decoded_1 = _b.sent();
                        return [4 /*yield*/, context.dataSources.Tweet.findOne({ _id: _id })];
                    case 2:
                        tweet = _b.sent();
                        if (!tweet)
                            Error("Tweet não existe");
                        newLikedBy = tweet.likedBy.filter(function (id) { return id !== decoded_1._id; });
                        tweet.likedBy = newLikedBy;
                        return [4 /*yield*/, context.dataSources.Tweet.findOneAndUpdate({ _id: _id }, tweet)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, context.dataSources.Tweet.findOne({ _id: _id })];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5:
                        err_2 = _b.sent();
                        throw Error(err_2);
                    case 6: return [2 /*return*/];
                }
            });
        });
    },
    getTweetByUserID: function (_, _a, context) {
        var _id = _a._id;
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, context.dataSources.Tweet.find({ authorId: _id })];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    },
    getMyFriendsTweets: function (_, _a, context) {
        var _id = _a._id;
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, context.dataSources.Tweet.find({ authorId: { $ne: _id } })];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    },
    newTweet: function (_, _a, context) {
        var content = _a.content, token = _a.token;
        return __awaiter(void 0, void 0, void 0, function () {
            var decoded, _b, userName, name_1, err_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, verifyToken(token)];
                    case 1:
                        decoded = _c.sent();
                        return [4 /*yield*/, context.dataSources.User.findOne({
                                _id: decoded._id,
                            })];
                    case 2:
                        _b = _c.sent(), userName = _b.userName, name_1 = _b.name;
                        return [4 /*yield*/, new context.dataSources.Tweet({
                                authorId: decoded._id,
                                createdAt: new Date().toISOString(),
                                content: content,
                                userName: userName,
                                name: name_1,
                            }).save()];
                    case 3: return [2 /*return*/, _c.sent()];
                    case 4:
                        err_3 = _c.sent();
                        throw Error(err_3);
                    case 5: return [2 /*return*/];
                }
            });
        });
    },
    deleteTweet: function (_, _a, context) {
        var _id = _a._id, token = _a.token;
        return __awaiter(void 0, void 0, void 0, function () {
            var decoded, err_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, verifyToken(token)];
                    case 1:
                        decoded = _b.sent();
                        return [4 /*yield*/, context.dataSources.User.findOne({
                                _id: decoded._id,
                            })];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, context.dataSources.Tweet.deleteOne({ _id: _id })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, true];
                    case 4:
                        err_4 = _b.sent();
                        throw Error(err_4);
                    case 5: return [2 /*return*/];
                }
            });
        });
    },
};
module.exports = {
    query: query,
    mutation: mutation,
};
