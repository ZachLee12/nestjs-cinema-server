import { Injectable } from '@nestjs/common';
import { Hall } from '@prisma/client';
import { PrismaService } from 'src/global/prisma.service';

@Injectable()
export class HallService {
    constructor(
        private prisma: PrismaService
    ) { }

    async findOneHall(hallId: string) {
        const hall = await this.prisma.hall.findUnique(
            {
                where: { id: hallId }
            }
        );
        return hall
    }

    async findHalls(movieId: string, showtime: string): Promise<Hall[]> {
        const halls = await this.prisma.hall.findMany({
            where: {
                movieId,
                showtime
            }
        })
        return halls
    }

}
