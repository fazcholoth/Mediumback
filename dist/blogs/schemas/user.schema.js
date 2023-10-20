"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    image: String,
});
//# sourceMappingURL=user.schema.js.map