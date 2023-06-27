import {
    Controller,
    Post,
    Body,
    Get,
    Request,
    Res
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { Tokens } from '../interfaces';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
    ) { }

    @Post('login')
    async login(@Body('username') username: string, @Body('password') password: string) {
        const tokens = await this.authService.signIn(username, password)
        return tokens as Tokens
    }

    @Get('logout')
    async logout() {
        const revokedTokens = await this.authService.signout()
        return revokedTokens;
    }


}
