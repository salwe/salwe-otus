import {Writer} from './writer.entity';

export const writerProviders = [
    {
        provide: 'WRITER_REPOSITORY',
        useValue: Writer,
    },
];