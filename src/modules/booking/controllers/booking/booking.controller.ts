import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { BookingService } from '../../services/booking/booking.service';
import { UserBookingDto } from '../../dto/UserBooking.dto';

@Controller('booking')
export class BookingController {

    constructor(
        private bookingService: BookingService
    ) { }

    //userBooking
    @Post()
    async createUserBooking(@Body() userBookingDto: UserBookingDto[]) {
        return await this.bookingService.createUserBooking(userBookingDto)
    }
}
