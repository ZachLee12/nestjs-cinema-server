import { Module } from '@nestjs/common';
import { BookingService } from './services/booking/booking.service';
import { BookingController } from './controllers/booking/booking.controller';

@Module({
  providers: [BookingService],
  controllers: [BookingController]
})
export class BookingModule {

}
