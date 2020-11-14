import { Model } from 'sequelize-typescript';
import { BasicState, UserGender } from 'src/@types';
export declare class Writer extends Model<Writer> {
    id: number;
    username: string;
    phone: string;
    firstName: string;
    lastName: string;
    gender: UserGender;
    state: BasicState;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
