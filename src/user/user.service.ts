import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly UserRepository: Repository<User>){}

    async createUser ({name, password, email}: CreateUserDto): Promise<User> {
        const user = new User()
        user.name = name
        user.password = password
        user.email = email

        await this.UserRepository.save(user)

        return user
    }

    async getUsers (): Promise<User[]> {
        return await this.UserRepository.find()
    }
}
