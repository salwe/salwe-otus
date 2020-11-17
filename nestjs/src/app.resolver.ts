import {Resolver, Query} from '@nestjs/graphql';

@Resolver()
export class AppResolver {
    @Query(() => String, {
        name: 'checkConnection',
    })

    checkConnection(): string {
        return 'I\'m alive!';
    }
}