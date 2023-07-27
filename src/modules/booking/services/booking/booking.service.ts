import { Injectable } from '@nestjs/common';
import { UserBooking as PrismaUserBooking } from '@prisma/client';
import { PrismaService } from 'src/global/prisma.service';

@Injectable()
export class BookingService {
    constructor(
        private prisma: PrismaService
    ) { }


    async createUserBooking(userBookingDto: any): Promise<PrismaUserBooking> {
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

    async findAllUserBookings(): Promise<PrismaUserBooking[]> {
        const userBookings = await this.prisma.userBooking.findMany()
        return userBookings
    }

    async findAllUserBookingsWithMovieId(movieId: string): Promise<PrismaUserBooking[]> {
        return await this.prisma.userBooking.findMany(
            {
                where: {
                    movieId
                }
            }
        )
    }

}
