export enum Sex {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
}

export interface Book {
    id: number,
    title: string,
    authorId: number,
    publishingHouse: string,
    price: number,
}

export interface Writer {
    id: number,
    firstName: string,
    lastName: string,
    sex: Sex,
    birthday: Date,
    createdAt: Date,
    updatedAt: Date,
}