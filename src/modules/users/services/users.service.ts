import { Injectable, BadRequestException } from '@nestjs/common';
import { UserDto } from '../dto/User.dto';
import { PrismaService } from 'src/global/prisma.service';
import { User as PrismaUser } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(
        private prismaService: PrismaService
    ) { }

    async findAll(): Promise<PrismaUser[]> {
        return await this.prismaService.user.findMany();
    }

    async create(createUserDto: UserDto): Promise<PrismaUser> {
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

    async findOne(username: string): Promise<PrismaUser> {
        const user = await this.prismaService.user.findUnique({
            where: {
                username
            },
        })
        return user
    }

    async deleteOne(id: string): Promise<PrismaUser> {
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
