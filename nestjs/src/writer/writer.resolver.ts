import {Query, registerEnumType, Resolver, Args, Mutation} from '@nestjs/graphql'
import {WriterType, WriterInput} from './writer.model';
import {WriterService} from './writer.service';
import {Sex} from '../dto';

registerEnumType(Sex, {
    name: 'Sex',
})

@Resolver(() => WriterType)
export class WriterResolver {
    constructor(private readonly writerService: WriterService) {}

    @Query(() => [WriterType])
    async getWriters(): Promise<WriterType[]> {
        return this.writerService.getAll();
    }

    @Query(() => WriterType)
    async getWriterById(@Args('id') id: number): Promise<WriterType> {
        return this.writerService.getById(id);
    }

    @Mutation(() => WriterType)
    async createWriter(@Args('data') data: WriterInput): Promise<WriterType> {
        return this.writerService.create(data);
    }

    @Mutation(() => WriterType)
    async updateWriter(@Args('id') id: number, @Args('data') data: WriterInput): Promise<WriterType> {
        return this.writerService.update(id, data);
    }
}