import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { MoviesModule } from './modules/movies/movies.module';
import { MoviesService } from './modules/movies/movies.service';

@Module({
  imports: [MoviesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
