"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.BlogSchema = new mongoose.Schema({
    heading: String,
    creator: String,
    topic: String,
    image: String,
    creatorimg: String,
    content: Object,
    readTime: Number,
});
//# sourceMappingURL=blog.schema.js.map