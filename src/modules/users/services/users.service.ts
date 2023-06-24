import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserEnum } from '../user.model';
import { CreateUserDto } from '../dto/create-user.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(@InjectModel(UserEnum.name) private readonly userModel: Model<User>) {

    }

    async getUsers(): Promise<User[]> {
        return await this.userModel.find();
    }

    async addUser(createUserDto: CreateUserDto): Promise<User> {

        const newUser = new this.userModel(createUserDto)
        return newUser.save()
            .then((data) => {
                return data
            })
            .catch(err => { throw new Error('User not saved.') })
    }

    async getOneUser(username: string): Promise<User> {
        return await this.userModel.findOne({ username })
    }

    //In services, handle the Errors in the context of backend services,
    //do not throw HTTP errors, because the Controller should do that instead\
    //Throw an error here, which will be caught by the Controller, then the controller
    //will decide how to communicate the error the client in terms of HTTP
    async deleteUser(id: string) {
        const result = await this.userModel.deleteOne({ _id: id })

        if (result.deletedCount > 0) {
            return result
        } else {
            throw new Error('User not found')
        }
    }


}
