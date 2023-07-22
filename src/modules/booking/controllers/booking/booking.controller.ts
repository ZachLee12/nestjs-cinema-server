import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { BookingService } from '../../services/booking/booking.service';
import { CreateUserBookingDto } from '../../dto/createUserBooking-dto';

@Controller('booking')
export class BookingController {

    constructor(
        private bookingService: BookingService
    ) { }

    @Get('hall/:movieId/:showtime')
    async getHalls(@Param('movieId') movieId: string, @Param('showtime') showtime: string) {
        return await this.bookingService.getHalls(movieId, showtime)
    }

    @Post('hall')
    async getHallById(@Body() hallDto: any) {
        const { hallId } = hallDto
        return await this.bookingService.getHallUnique(hallId);
    }

    @Post()
    async createUserBooking(@Body() userBookingDto: CreateUserBookingDto[]) {
        return await this.bookingService.createUserBooking(userBookingDto)
    }

}
