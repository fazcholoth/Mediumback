"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const blog_controller_1 = require("./blog.controller");
const blogs_service_1 = require("./blogs.service");
const blog_schema_1 = require("./schemas/blog.schema");
const topic_schema_1 = require("./schemas/topic.schema");
const user_schema_1 = require("./schemas/user.schema");
const admin_schema_1 = require("./schemas/admin.schema");
let BlogModule = class BlogModule {
};
BlogModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Blog', schema: blog_schema_1.BlogSchema }, { name: 'User', schema: user_schema_1.UserSchema }, { name: 'Admin', schema: admin_schema_1.AdminSchema }, { name: 'Topic', schema: topic_schema_1.TopicSchema }])],
        controllers: [blog_controller_1.BlogController],
        providers: [blogs_service_1.BlogService],
    })
], BlogModule);
exports.BlogModule = BlogModule;
//# sourceMappingURL=blogs.module.js.map