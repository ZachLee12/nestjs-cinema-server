import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { UsersService } from '../users/users.service';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private usersService: UsersService
    ) {
    }

    async signIn(username, pass) {
        const user = await this.usersService.getOneUser(username)
        if (user?.password !== pass) {
            throw new UnauthorizedException('Incorrect credentials')
        }
        const payload = { sub: user.id, username: user.username };
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }

}
