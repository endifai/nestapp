import { Field, InputType } from "type-graphql"

@InputType()
export class UserInput {
    @Field() readonly name: string
    @Field() readonly password: string
    @Field() readonly email: string
}