import { Injectable } from '@nestjs/common';
import { Hall } from '@prisma/client';
import { PrismaService } from 'src/global/prisma.service';

@Injectable()
export class BookingService {
    constructor(
        private prisma: PrismaService
    ) { }


    async getAllHalls(movieId: string, showtime: string): Promise<Hall[]> {
        const halls = await this.prisma.hall.findMany({
            where: {
                movieId,
                showtime
            }
        })
        return halls
    }

    async createUserBooking(userBookingDto: any) {
        const { hallId, movieId, userId, seatsBooked } = userBookingDto
        const userBooking = await this.prisma.userBooking.create(
            {
                data: {
                    hallId,
                    movieId,
                    userId,
                    seatsBooked
                }
            }
        )
        return userBooking
    }

    async findAllUserBookings() {
        const userBookings = await this.prisma.userBooking.findMany()
        return userBookings
    }



    async getOneHall(hallId: string) {
        const hall = await this.prisma.hall.findUnique(
            {
                where: { id: hallId }
            }
        );
        return hall
    }

}
