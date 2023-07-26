import { Module } from '@nestjs/common';
import { BookingService } from './services/booking/booking.service';
import { BookingController } from './controllers/booking/booking.controller';
import { BookingResolver } from './booking.resolver';
import { MoviesService } from '../movies/services/movies.service';

@Module({
  providers: [BookingService, BookingResolver, MoviesService],
  controllers: [BookingController]
})
export class BookingModule {

}
