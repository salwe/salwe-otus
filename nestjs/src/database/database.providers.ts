import {Sequelize} from 'sequelize-typescript';
import {Book} from '../book/book.entity';
import {Writer} from '../writer/writer.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async (): Promise<Sequelize> => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 7002,
                username: 'otus',
                password: 'otus',
                database: 'crm',
            });
            sequelize.addModels([Book, Writer]);
            await sequelize.sync();

            return sequelize;
        },
    },
];