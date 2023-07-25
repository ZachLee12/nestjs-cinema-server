import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { BookingService } from '../../services/booking/booking.service';
import { CreateUserBookingDto } from '../../dto/createUserBooking-dto';

@Controller('booking')
export class BookingController {

    constructor(
        private bookingService: BookingService
    ) { }

    //userBooking
    @Post()
    async createUserBooking(@Body() userBookingDto: CreateUserBookingDto[]) {
        return await this.bookingService.createUserBooking(userBookingDto)
    }

    //hall
    @Get('hall/:hallId')
    async getOneHall(@Param('hallId') hallId: string) {
        return await this.bookingService.getOneHall(hallId);
    }

    @Get('hall/:movieId/:showtime')
    async getAllHalls(@Param('movieId') movieId: string, @Param('showtime') showtime: string) {
        return await this.bookingService.getAllHalls(movieId, showtime)
    }

}
