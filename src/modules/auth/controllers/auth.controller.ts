import {
    Controller,
    Post,
    Body,
    Get,
    Res
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { Tokens } from '../interfaces';
import { Request } from 'express';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
    ) { }

    @Post('refreshAccessToken')
    async refreshToken(@Body('refreshToken') refreshToken: string): Promise<any> {
        const newToken = await this.authService.refreshAccessToken(refreshToken)
        return newToken
    }


    @Post('login')
    async login(@Body('username') username: string, @Body('password') password: string) {
        const tokens = await this.authService.signIn(username, password)
        return tokens as Tokens
    }

    @Get('logout')
    logout() {
        const revokedTokens = this.authService.signout()
        return revokedTokens;
    }


}
