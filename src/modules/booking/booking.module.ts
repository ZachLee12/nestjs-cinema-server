import { Module } from '@nestjs/common';
import { BookingService } from './services/booking/booking.service';
import { BookingController } from './controllers/booking/booking.controller';
import { BookingResolver } from './booking.resolver';
import { MoviesService } from '../movies/services/movies.service';
import { HallService } from '../hall/service/hall.service';

@Module({
  providers: [BookingService, BookingResolver, MoviesService, HallService],
  controllers: [BookingController]
})
export class BookingModule {

}
