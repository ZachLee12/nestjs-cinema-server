//https://stackoverflow.com/questions/61334475/nestjs-with-mongoose-schema-interface-and-dto-approach-question
import {
    Controller,
    Post,
    Body,
    Get,
    UsePipes,
    ValidationPipe,
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
    @UsePipes(new ValidationPipe())
    async refreshToken(@Body('refreshToken') refreshToken: TokenDto): Promise<Tokens> {
        let newToken = null;
        try {
            newToken = await this.authService.refreshAccessToken(refreshToken as string)
        } catch (err) {
            throw err
        }
        return { accessToken: newToken }
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
