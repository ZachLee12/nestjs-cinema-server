import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { MoviesModule } from './modules/movies/movies.module';
import { UsersModule } from './modules/users/users.module';
import { RefreshTokenModule } from './modules/auth/refresh-token/refresh-token.module';
import { AccessTokenModule } from './modules/auth/access-token/access-token.module';
import { GlobalModule } from './global/global.module';
import { BookingModule } from './modules/booking/booking.module';


@Module({
  imports: [
    MoviesModule,
    AuthModule,
    UsersModule,
    RefreshTokenModule,
    AccessTokenModule,
    BookingModule,
    GlobalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
