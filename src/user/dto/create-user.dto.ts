import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class CreateUserDto {
    @Field() readonly id?: string
    @Field() readonly name: string
    @Field() readonly password: string
    @Field() readonly email: string
} 
