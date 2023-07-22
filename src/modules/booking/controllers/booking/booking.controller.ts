import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { BookingService } from '../../services/booking/booking.service';

@Controller('booking')
export class BookingController {

    constructor(
        private bookingService: BookingService
    ) { }

    @Get('hall/:movieId/:showtime')
    async getHall(@Param('movieId') movieId: string, @Param('showtime') showtime: string) {
        return await this.bookingService.getHalls(movieId, showtime)
    }

    @Post()
    async createUserBooking(@Body() userBookingDto: any) {
        console.log(userBookingDto)
    }

}
