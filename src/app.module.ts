import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { MoviesModule } from './modules/movies/movies.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { RefreshTokenModule } from './modules/auth/refresh-token/refresh-token.module';
import { AccessTokenModule } from './modules/auth/access-token/access-token.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/cinema'),
    MoviesModule,
    AuthModule,
    UsersModule,
    RefreshTokenModule,
    AccessTokenModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
