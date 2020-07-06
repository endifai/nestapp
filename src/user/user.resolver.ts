import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { User } from "./user.entity";
import { UserDto, CreateUserDto } from "./dto/create-user.dto";
import { UserInput } from "./inputs/user.input";

@Resolver((of) => User)
export class UserResolver {
    constructor (private readonly userService: UserService){}

    @Query(() => [CreateUserDto])
    async user(): Promise<User[]>{
        //return "Hello world"
        return this.userService.getUsers()
    }

    // @Mutation(() => User)
    // async createUser(@Args('input') input: UserInput): Promise<User> {
    //     return this.userService.createUser(input)
    // }
}