import { Injectable } from '@nestjs/common';
import { Hall } from '@prisma/client';
import { PrismaService } from 'src/global/prisma.service';

@Injectable()
export class BookingService {

    constructor(
        private prisma: PrismaService
    ) { }


    async getHalls(movieId: string, showtime: string): Promise<Hall[]> {
        const halls = await this.prisma.hall.findMany({
            where: {
                movieId,
                showtime
            }
        })

        return halls
    }

}
