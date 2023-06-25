import {
    Controller,
    Post,
    Body,
    Request,
    Res
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
    ) { }

    @Post('login')
    async login(@Body('username') username: string, @Body('password') password: string) {
        const accessToken = await this.authService.signIn(username, password)
        return accessToken as { accessToken: string }
    }


}
