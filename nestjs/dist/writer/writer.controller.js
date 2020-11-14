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
exports.WriterController = void 0;
const common_1 = require("@nestjs/common");
const writer_service_1 = require("./writer.service");
const dto_1 = require("../dto");
let WriterController = class WriterController {
    constructor(writerService) {
        this.writerService = writerService;
    }
    getAll() {
        return this.writerService.getAll();
    }
    getById(id) {
        return this.writerService.getById(+id);
    }
    create(data) {
        return this.writerService.create(data);
    }
    update(id, data) {
        return this.writerService.update(+id, data);
    }
    delete(id) {
        return this.writerService.delete(+id);
    }
};
__decorate([
    common_1.Get(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WriterController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WriterController.prototype, "getById", null);
__decorate([
    common_1.Post(),
    common_1.HttpCode(200),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WriterController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], WriterController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WriterController.prototype, "delete", null);
WriterController = __decorate([
    common_1.Controller('writers'),
    __metadata("design:paramtypes", [writer_service_1.WriterService])
], WriterController);
exports.WriterController = WriterController;
//# sourceMappingURL=writer.controller.js.map