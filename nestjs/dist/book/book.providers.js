"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookProviders = void 0;
const book_entity_1 = require("./book.entity");
exports.bookProviders = [
    {
        provide: 'BOOK_REPOSITORY',
        useValue: book_entity_1.Book,
    },
];
//# sourceMappingURL=book.providers.js.map