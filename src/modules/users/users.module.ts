import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { AccessTokenModule } from '../auth/access-token/access-token.module';
import { RefreshTokenModule } from '../auth/refresh-token/refresh-token.module';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [
    AccessTokenModule,
    RefreshTokenModule
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersResolver],
  exports: [UsersService]
})
export class UsersModule { }
