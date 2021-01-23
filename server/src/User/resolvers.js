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
Object.defineProperty(exports, "__esModule", { value: true });
exports.secret = void 0;
var _a = require("./../generated/graphql"), QueryResolvers = _a.QueryResolvers, MutationResolvers = _a.MutationResolvers;
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
exports.secret = process.env.SECRET;
var verifyToken = function (token) {
    return new Promise(function (resolve, reject) {
        try {
            var decoded = jwt.verify(token !== null && token !== void 0 ? token : "", exports.secret);
            return resolve(decoded);
        }
        catch (err) {
            return reject("Token inválido.");
        }
    });
};
var query = {
    getUsers: function (_, args, context) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, context.dataSources.User.find()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
    getUserById: function (_, _a, context) {
        var _id = _a._id;
        return __awaiter(void 0, void 0, void 0, function () {
            var user, tweets, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, context.dataSources.User.findOne({ _id: _id })];
                    case 1:
                        user = _b.sent();
                        return [4 /*yield*/, context.dataSources.Tweet.find({ authorId: _id })];
                    case 2:
                        tweets = _b.sent();
                        return [2 /*return*/, {
                                user: user,
                                tweets: tweets,
                            }];
                    case 3:
                        err_1 = _b.sent();
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    validateToken: function (_, _a) {
        var token = _a.token;
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_b) {
                try {
                    jwt.verify(token !== null && token !== void 0 ? token : "", exports.secret);
                    return [2 /*return*/, true];
                }
                catch (err) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/];
            });
        });
    },
};
var mutation = {
    addToFriends: function (_, _a, _b) {
        var _id = _a._id, newFriendId = _a.newFriendId, token = _a.token;
        var dataSources = _b.dataSources;
        return __awaiter(void 0, void 0, void 0, function () {
            var currentUser, newFriend, currentUserFriends, newFriendFriends;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, verifyToken(token)];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, dataSources.User.findOne({ _id: _id })];
                    case 2:
                        currentUser = _c.sent();
                        return [4 /*yield*/, dataSources.User.findOne({
                                _id: newFriendId,
                            })];
                    case 3:
                        newFriend = _c.sent();
                        currentUserFriends = new Set(currentUser.friends);
                        currentUserFriends.add(newFriendId);
                        currentUser.friends = __spread(currentUserFriends);
                        newFriendFriends = new Set(newFriend.friends);
                        newFriendFriends.add(_id);
                        newFriend.friends = __spread(newFriendFriends);
                        return [4 /*yield*/, dataSources.User.findOneAndUpdate({ _id: newFriendId }, newFriend)];
                    case 4:
                        _c.sent();
                        return [4 /*yield*/, dataSources.User.findOneAndUpdate({ _id: _id }, currentUser)];
                    case 5:
                        _c.sent();
                        return [4 /*yield*/, dataSources.User.findOne({ _id: _id })];
                    case 6: return [2 /*return*/, _c.sent()];
                }
            });
        });
    },
    removeFromFriends: function (_, _a, _b) {
        var _id = _a._id, friendId = _a.friendId, token = _a.token;
        var dataSources = _b.dataSources;
        return __awaiter(void 0, void 0, void 0, function () {
            var currentUser, newFriend;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, verifyToken(token)];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, dataSources.User.findOne({ _id: _id })];
                    case 2:
                        currentUser = _c.sent();
                        return [4 /*yield*/, dataSources.User.findOne({
                                _id: friendId,
                            })];
                    case 3:
                        newFriend = _c.sent();
                        currentUser.friends = currentUser.friends.filter(function (id) { return id !== friendId; });
                        newFriend.friends = newFriend.friends.filter(function (id) { return id !== _id; });
                        return [4 /*yield*/, dataSources.User.findOneAndUpdate({ _id: friendId }, newFriend)];
                    case 4:
                        _c.sent();
                        return [4 /*yield*/, dataSources.User.findOneAndUpdate({ _id: _id }, currentUser)];
                    case 5:
                        _c.sent();
                        return [4 /*yield*/, dataSources.User.findOne({ _id: friendId })];
                    case 6: return [2 /*return*/, _c.sent()];
                }
            });
        });
    },
    saveUser: function (_, _a, _b) {
        var name = _a.name, email = _a.email, password = _a.password, userName = _a.userName;
        var dataSources = _b.dataSources;
        return __awaiter(void 0, void 0, void 0, function () {
            var isRegistered, invalidUserName, hash, user;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, dataSources.User.findOne({ email: email })];
                    case 1:
                        isRegistered = _c.sent();
                        return [4 /*yield*/, dataSources.User.findOne({ userName: userName })];
                    case 2:
                        invalidUserName = _c.sent();
                        if (isRegistered) {
                            throw Error("Usuário já cadastrado. Tente recuperar sua senha.");
                        }
                        if (invalidUserName) {
                            throw Error("Nome de usuário inválido.");
                        }
                        hash = bcrypt.hashSync(password, 10);
                        return [4 /*yield*/, new dataSources.User({
                                name: name,
                                email: email,
                                userName: userName,
                                password: hash,
                            }).save()];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, dataSources.User.findOne({ email: email })];
                    case 4:
                        user = _c.sent();
                        user.token = jwt.sign({ _id: user._id }, exports.secret);
                        return [2 /*return*/, user];
                }
            });
        });
    },
    login: function (_, _a, _b) {
        var email = _a.email, password = _a.password;
        var dataSources = _b.dataSources;
        return __awaiter(void 0, void 0, void 0, function () {
            var user, match, err_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, dataSources.User.findOne({ email: email })];
                    case 1:
                        user = _c.sent();
                        return [4 /*yield*/, bcrypt.compare(password, user.password)];
                    case 2:
                        match = _c.sent();
                        user.token = jwt.sign({ _id: user._id }, exports.secret);
                        if (match) {
                            return [2 /*return*/, user];
                        }
                        throw Error("E-mail ou senha incorretos.");
                    case 3:
                        err_2 = _c.sent();
                        throw Error("E-mail ou senha incorretos.");
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
};
module.exports = {
    mutation: mutation,
    verifyToken: verifyToken,
    query: query,
};
