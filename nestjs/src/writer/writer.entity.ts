import {
    Table,
    Column,
    Model,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
    AutoIncrement,
    DataType,
    HasMany,
} from 'sequelize-typescript';
import {Book} from '../book/book.entity';
import {Sex} from 'src/dto';

@Table({tableName: 'writers'})
export class Writer extends Model<Writer> {
    @AutoIncrement
    @Column({
        primaryKey: true,
    })
    id: number;

    @Column
    firstName: string;

    @Column
    lastName: string;

    @HasMany(() => Book)
    books: Book[];

    @Column(DataType.ENUM(...Object.keys(Sex)))
    sex: Sex;

    @Column
    birthday: Date;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;

    @DeletedAt
    deletedAt: Date;
}