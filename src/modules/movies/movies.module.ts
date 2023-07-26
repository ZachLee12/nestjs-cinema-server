import { Module } from '@nestjs/common';
import { MoviesController } from './controllers/movies.controller';
import { MoviesService } from './services/movies.service';
import { MoviesResolver } from './movies.resolver';
@Module({
  controllers: [MoviesController],
  providers: [MoviesService, MoviesResolver]
})
export class MoviesModule { }
