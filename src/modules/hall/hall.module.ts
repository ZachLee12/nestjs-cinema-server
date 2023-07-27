import { Module } from '@nestjs/common';
import { HallController } from './controller/hall.controller';
import { HallService } from './service/hall.service';
import { HallResolver } from './hall.resolver';
import { MoviesService } from '../movies/services/movies.service';

@Module({
  controllers: [HallController],
  providers: [HallService, HallResolver, MoviesService]
})
export class HallModule { }
