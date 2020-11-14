"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const book_entity_1 = require("../book/book.entity");
const writer_entity_1 = require("../writer/writer.entity");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 7002,
                username: 'otus',
                password: 'otus',
                database: 'crm',
            });
            sequelize.addModels([book_entity_1.Book, writer_entity_1.Writer]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map