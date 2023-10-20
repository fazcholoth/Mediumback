"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b, _c, _d;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const mongoose_3 = require("mongoose");
let BlogService = class BlogService {
    constructor(blogModel, userModel, adminModel, topicModel) {
        this.blogModel = blogModel;
        this.userModel = userModel;
        this.adminModel = adminModel;
        this.topicModel = topicModel;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.blogModel.find();
        });
    }
    findCounts() {
        return __awaiter(this, void 0, void 0, function* () {
            const usercount = yield this.userModel.countDocuments({});
            const topiccout = yield this.topicModel.countDocuments({});
            const blogcount = yield this.blogModel.countDocuments({});
            return { blogcount: blogcount, topiccout: topiccout, usercount: usercount };
        });
    }
    findAllwriters() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.find();
        });
    }
    findAllTopics() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.topicModel.find();
        });
    }
    findTopwriters() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.find().limit(3);
        });
    }
    findRecommented() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.topicModel.find().limit(10);
        });
    }
    findFeatured() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.blogModel.find().limit(3);
        });
    }
    findTopicwise(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.blogModel.find();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.blogModel.findOne({ _id: id });
        });
    }
    create(blog) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('creating blog');
            const newBlog = new this.blogModel(blog);
            return yield newBlog.save();
        });
    }
    loginUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new this.userModel(user);
            return yield newUser.save();
        });
    }
    loginAdmin(admin) {
        return __awaiter(this, void 0, void 0, function* () {
            const newAdmin = new this.adminModel(admin);
            return yield newAdmin.save();
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.blogModel.findByIdAndRemove(id);
        });
    }
    deleteTopic(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.topicModel.findByIdAndRemove(id);
        });
    }
    blockUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = mongoose_3.Types.ObjectId(id);
            return yield this.userModel.findByIdAndUpdate(userId, { blocked: true }, { new: true });
        });
    }
    unblockUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = mongoose_3.Types.ObjectId(id);
            return yield this.userModel.findByIdAndUpdate(userId, { blocked: false }, { new: true });
        });
    }
    unlistTopic(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.topicModel.findByIdAndUpdate(id, { listed: false }, { new: true });
        });
    }
    listTopic(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.topicModel.findByIdAndUpdate(id, { listed: true }, { new: true });
        });
    }
    addTopic(topic) {
        return __awaiter(this, void 0, void 0, function* () {
            const newTopic = new this.topicModel(topic);
            return yield newTopic.save();
        });
    }
};
BlogService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Blog')),
    __param(1, mongoose_2.InjectModel('User')),
    __param(2, mongoose_2.InjectModel('Admin')),
    __param(3, mongoose_2.InjectModel('Topic')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _c : Object, typeof (_d = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _d : Object])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=blogs.service.js.map