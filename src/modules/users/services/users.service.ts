import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserEnum } from '../user.model';
import { CreateUserDto } from '../dto/create-user.dto';
import { PrismaService } from 'src/global/prisma.service';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(UserEnum.name) private readonly userModel: Model<User>,
        private prismaService: PrismaService
    ) { }

    async getUsers(): Promise<any> {
        // return await this.userModel.find();
    }

    async addUser(createUserDto: CreateUserDto): Promise<any> {
        if (await this.findOne(createUserDto.username)) {
            throw new BadRequestException('Username already taken.')
        }
        try {
            const user = await this.prismaService.user.create({
                data: {
                    ...createUserDto
                }
            })
            return user
        } catch (err) {
            throw new Error(err)
        }
    }

    async findOne(username: string) {
        const user = await this.prismaService.user.findUnique({
            where: {
                username
            },
        })
        return user
    }


}
