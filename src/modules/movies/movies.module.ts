import { Module } from '@nestjs/common';
import { MoviesController } from './controllers/movies.controller';
import { MoviesService } from './services/movies.service';
import { MongooseModule } from '@nestjs/mongoose'
import { MovieSchema } from './movie.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Movie', schema: MovieSchema }])],
  controllers: [MoviesController],
  providers: [MoviesService]
})
export class MoviesModule { }
