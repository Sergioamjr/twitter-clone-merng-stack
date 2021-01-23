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
var joii = require("@hapi/joi");
var createDBSchemaa = require("../utils/createDBSchema");
var _a = __read(createDBSchemaa({
    name: joii.string().required(),
    userName: joii.string().required(),
    email: joii.string().required(),
    password: joii.string().required(),
    friends: joii.array().items(joii.string()),
}, "User"), 2), User = _a[0], userSchema = _a[1];
module.exports = { User: User, userSchema: userSchema };
