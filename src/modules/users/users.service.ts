import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserEnum } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(UserEnum.name) private readonly userModel: Model<User>) {

    }

    async getUsers(): Promise<User[]> {
        return await this.userModel.find();
    }

    async createUser(createUserDto: CreateUserDto) {
        const newUser = new this.userModel(createUserDto)
        await newUser.save()
        return newUser
    }

}
