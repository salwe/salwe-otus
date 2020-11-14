import { Model } from 'sequelize-typescript';
import { Writer } from '../writer/writer.entity';
export declare class Book extends Model<Book> {
    id: number;
    title: string;
    authorId: number;
    author: Writer;
    publishingHouse: string;
    price: number;
}
