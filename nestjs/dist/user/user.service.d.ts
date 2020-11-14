export declare type User = {
    id: number;
    name: string;
};
export declare class UserService {
    testUser: User;
    getHello(): string;
    signup(): string;
    login(): User;
    current(): User;
    list(): User[];
}
