import { Module } from '@nestjs/common';
import { MoviesController } from './controllers/movies.controller';
import { MoviesService } from './services/movies.service';
import { MoviesResolver } from './movies.resolver';
import { BookingService } from '../booking/services/booking/booking.service';
@Module({
  controllers: [MoviesController],
  providers: [BookingService, MoviesService, MoviesResolver]
})
export class MoviesModule { }
