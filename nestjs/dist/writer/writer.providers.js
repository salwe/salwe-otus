"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writerProviders = void 0;
const writer_entity_1 = require("./writer.entity");
exports.writerProviders = [
    {
        provide: 'WRITER_REPOSITORY',
        useValue: writer_entity_1.Writer,
    },
];
//# sourceMappingURL=writer.providers.js.map