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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Writer = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const _types_1 = require("src/@types");
let Writer = class Writer extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column({
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Writer.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({ unique: true }),
    __metadata("design:type", String)
], Writer.prototype, "username", void 0);
__decorate([
    sequelize_typescript_1.Column({ unique: true }),
    __metadata("design:type", String)
], Writer.prototype, "phone", void 0);
__decorate([
    sequelize_typescript_1.Column({}),
    __metadata("design:type", String)
], Writer.prototype, "firstName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Writer.prototype, "lastName", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ENUM(...Object.keys(_types_1.UserGender))),
    __metadata("design:type", typeof (_a = typeof _types_1.UserGender !== "undefined" && _types_1.UserGender) === "function" ? _a : Object)
], Writer.prototype, "gender", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ENUM(...Object.keys(_types_1.BasicState))),
    __metadata("design:type", typeof (_b = typeof _types_1.BasicState !== "undefined" && _types_1.BasicState) === "function" ? _b : Object)
], Writer.prototype, "state", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Writer.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Writer.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    __metadata("design:type", Date)
], Writer.prototype, "deletedAt", void 0);
Writer = __decorate([
    sequelize_typescript_1.Table({ tableName: 'writers' })
], Writer);
exports.Writer = Writer;
//# sourceMappingURL=writer. entity.js.map