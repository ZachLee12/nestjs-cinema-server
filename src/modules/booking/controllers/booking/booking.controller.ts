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
}
