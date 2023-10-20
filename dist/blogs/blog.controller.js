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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const blogs_dto_1 = require("./dto/blogs.dto");
const blogs_service_1 = require("./blogs.service");
const user_dto_1 = require("./dto/user.dto");
const category_dto_1 = require("./dto/category.dto");
let BlogController = class BlogController {
    constructor(blogService) {
        this.blogService = blogService;
    }
    findAll() {
        return this.blogService.findAll();
    }
    findCounts() {
        return this.blogService.findCounts();
    }
    findAllwriters() {
        return this.blogService.findAllwriters();
    }
    findAllTopics() {
        return this.blogService.findAllTopics();
    }
    findTopWriters() {
        return this.blogService.findTopwriters();
    }
    findFeatured() {
        return this.blogService.findFeatured();
    }
    findRecommented() {
        return this.blogService.findRecommented();
    }
    findOne(id) {
        return this.blogService.findOne(id);
    }
    findTopicwise(id) {
        return this.blogService.findTopicwise(id);
    }
    create(createBlogDto) {
        return this.blogService.create(createBlogDto);
    }
    loginUser(CreateUserDto) {
        return this.blogService.loginUser(CreateUserDto);
    }
    loginAdmin(CreateAdminDto) {
        return this.blogService.loginAdmin(CreateAdminDto);
    }
    delete(id) {
        return this.blogService.delete(id);
    }
    blockuser(id) {
        return this.blogService.blockUser(id);
    }
    unblockuser(id) {
        return this.blogService.unblockUser(id);
    }
    unlisttopic(id) {
        return this.blogService.unlistTopic(id);
    }
    listtopic(id) {
        return this.blogService.listTopic(id);
    }
    addTopic(CreateTopicDto) {
        return this.blogService.addTopic(CreateTopicDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findAll", null);
__decorate([
    common_1.Get('counts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findCounts", null);
__decorate([
    common_1.Get('allusers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findAllwriters", null);
__decorate([
    common_1.Get('alltopics'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findAllTopics", null);
__decorate([
    common_1.Get('topwriters'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findTopWriters", null);
__decorate([
    common_1.Get('featured'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findFeatured", null);
__decorate([
    common_1.Get('recommented'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findRecommented", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findOne", null);
__decorate([
    common_1.Get('topicwise/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findTopicwise", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blogs_dto_1.CreateBlogPostDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "create", null);
__decorate([
    common_1.Post('loginuser'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "loginUser", null);
__decorate([
    common_1.Post('loginadmin'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "loginAdmin", null);
__decorate([
    common_1.Delete('deletepost/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "delete", null);
__decorate([
    common_1.Put('blockuser/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "blockuser", null);
__decorate([
    common_1.Put('unblockuser/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "unblockuser", null);
__decorate([
    common_1.Put('unlisttopic/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "unlisttopic", null);
__decorate([
    common_1.Put('listtopic/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "listtopic", null);
__decorate([
    common_1.Post('addtopic'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.CreateTopicDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "addTopic", null);
BlogController = __decorate([
    common_1.Controller('blog'),
    __metadata("design:paramtypes", [blogs_service_1.BlogService])
], BlogController);
exports.BlogController = BlogController;
//# sourceMappingURL=blog.controller.js.map