import {Field, Int, ObjectType, InputType} from '@nestjs/graphql';
import {Sex} from '../dto';

@ObjectType()
    export class WriterType {
    @Field(type => Int)
    id: number;

    @Field(type => String)
    firstName: string;

    @Field(type => String)
    lastName: string;

    @Field({nullable: true})
    sex?: Sex;

    @Field({nullable: true})
    birthday?: Date;

    @Field(type => Date)
    createdAt: Date;

    @Field({nullable: true})
    updatedAt?: Date;
}

@InputType()
export class WriterInput {
    @Field({nullable: true})
    id?: number;

    @Field(type => String)
    firstName: string;

    @Field(type => String)
    lastName: string;

    @Field({nullable: true})
    sex?: Sex;

    @Field({nullable: true})
    birthday?: Date;

    @Field({nullable: true})
    createdAt?: Date;

    @Field({nullable: true})
    updatedAt?: Date;
}