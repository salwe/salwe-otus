export declare enum Sex {
    MALE = 0,
    FEMALE = 1
}
export interface Book {
    id: number;
    title: string;
    authorId: number;
    publishingHouse: string;
    price: number;
}
export interface Writer {
    id: number;
    firstName: string;
    lastName: string;
    sex: Sex;
    birthday: Date;
}
