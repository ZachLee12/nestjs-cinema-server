import {
    Controller,
    Post,
    Body,
    Request,
    Res
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
    ) { }

    @Post('login')
    async login(@Res({ passthrough: true }) res: Response, @Body('username') username: string, @Body('password') password: string) {
        const jwtToken = await this.authService.signIn(username, password)
        res.cookie('jwt', jwtToken, { httpOnly: true, sameSite: 'strict' })
        return jwtToken as { accessToken: string }
    }


}
