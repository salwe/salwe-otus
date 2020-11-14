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
exports.WriterService = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("../dto");
let WriterService = class WriterService {
    constructor(writerRepository) {
        this.writerRepository = writerRepository;
    }
    async getAll() {
        return this.writerRepository.findAll();
    }
    async getById(id) {
        return this.writerRepository.findByPk(id);
    }
    async create(data) {
        return this.writerRepository.create(data);
    }
    async update(id, data) {
        const writer = await this.getById(id);
        await writer.update(data);
        return writer;
    }
    async delete(id) {
        const writer = await this.getById(id);
        await writer.destroy();
        return writer;
    }
};
WriterService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('WRITER_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], WriterService);
exports.WriterService = WriterService;
//# sourceMappingURL=writer.service.js.map