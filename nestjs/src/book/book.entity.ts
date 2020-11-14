import {
    Table,
    Column,
    Model,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import {Writer} from '../writer/writer.entity';

@Table({tableName: 'books'})
export class Book extends Model<Book> {
    @AutoIncrement
    @Column({primaryKey: true})
    id: number;

    @Column
    title: string;

    @ForeignKey(() => Writer)
    authorId: number;

    @BelongsTo(() => Writer, 'authorId')
    author: Writer;

    @Column
    publishingHouse: string;

    @Column
    price: number;
}