import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

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