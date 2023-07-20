import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { PrismaService } from 'src/global/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(
        private prismaService: PrismaService
    ) { }

    async getUsers(): Promise<User[]> {
        return await this.prismaService.user.findMany();
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
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

    async findOne(username: string): Promise<User> {
        const user = await this.prismaService.user.findUnique({
            where: {
                username
            },
        })
        return user
    }

    async deleteOne(id: string): Promise<User> {
        const user = await this.prismaService.user.delete(
            {
                where: {
                    id
                }
            }
        )

        return user
    }

}
