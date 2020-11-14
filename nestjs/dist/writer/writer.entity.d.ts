import { Model } from 'sequelize-typescript';
import { Book } from '../book/book.entity';
import { Sex } from 'src/dto';
export declare class Writer extends Model<Writer> {
    id: number;
    firstName: string;
    lastName: string;
    books: Book[];
    sex: Sex;
    birthday: Date;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
