//https://stackoverflow.com/questions/61334475/nestjs-with-mongoose-schema-interface-and-dto-approach-question
import {
    Controller,
    Post,
    Body,
    Get,
    UsePipes,
    ValidationPipe,
    HttpException,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { Tokens } from '../interfaces';
import { TokenDto } from '../dto/token.dto';


@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
    ) { }

    @Post('refreshAccessToken')
    async refreshToken(@Body('refreshToken') refreshToken: string): Promise<Tokens> {
        try {
            const newToken = await this.authService.refreshAccessToken(refreshToken as string)
            return { accessToken: newToken }

        } catch (err) {
            throw err as HttpException
        }
    }


    @Post('login')
    async login(@Body('username') username: string, @Body('password') password: string): Promise<Tokens> {
        const tokens = await this.authService.signIn(username, password)
        return tokens
    }

    @Get('logout')
    logout(): Tokens {
        const revokedTokens = this.authService.signout()
        return revokedTokens;
    }


}
