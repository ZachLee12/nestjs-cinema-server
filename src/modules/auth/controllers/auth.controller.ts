import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../guards/auth.guard';
import { UsersService } from 'src/modules/users/users.service';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
    ) { }

    @Post('login')
    login(@Body('username') username: string, @Body('password') password: string) {
        return this.authService.signIn(username, password)
    }


}
