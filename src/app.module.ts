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
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { HallModule } from './modules/hall/hall.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: true
    }),
    MoviesModule,
    AuthModule,
    UsersModule,
    RefreshTokenModule,
    AccessTokenModule,
    BookingModule,
    GlobalModule,
    HallModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
