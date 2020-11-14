export declare enum Sex {
    MALE = 0,
    FEMALE = 1
}
export declare type Book = {
    id: number;
    title: string;
    authorId: number;
    publishingHouse: string;
    price: number;
};
export declare type Writer = {
    id: number;
    firstName: string;
    lastName: string;
    sex: Sex;
    birthday: Date;
    createdAt: Date;
    updatedAt: Date;
};
