import { Injectable } from '@nestjs/common';
import { Hall as PrismaHall } from '@prisma/client';
import { PrismaService } from 'src/global/prisma.service';

@Injectable()
export class HallService {
    constructor(
        private prisma: PrismaService
    ) { }

    async findOne(hallId: string): Promise<PrismaHall> {
        const hall = await this.prisma.hall.findUnique(
            {
                where: { id: hallId }
            }
        );
        return hall
    }

    async findAll(movieId: string, showtime: string): Promise<PrismaHall[]> {
        const halls = await this.prisma.hall.findMany({
            where: {
                movieId,
                showtime
            }
        })
        return halls
    }

}
