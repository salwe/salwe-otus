import { UserService, User } from './user.service';
export declare class AppController {
    private readonly userService;
    constructor(userService: UserService);
    login(): User;
}
