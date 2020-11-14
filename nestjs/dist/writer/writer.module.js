"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriterModule = void 0;
const common_1 = require("@nestjs/common");
const writer_service_1 = require("./writer.service");
const writer_controller_1 = require("./writer.controller");
const database_module_1 = require("../database/database.module");
const writer_providers_1 = require("./writer.providers");
let WriterModule = class WriterModule {
};
WriterModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [writer_controller_1.WriterController],
        providers: [writer_service_1.WriterService, ...writer_providers_1.writerProviders],
        exports: [writer_service_1.WriterService],
    })
], WriterModule);
exports.WriterModule = WriterModule;
//# sourceMappingURL=writer.module.js.map