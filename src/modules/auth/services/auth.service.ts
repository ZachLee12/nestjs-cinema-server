import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { UsersService } from '../../users/services/users.service';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private usersService: UsersService
    ) {
    }

    async signIn(username: string, pass: string) {
        const user = await this.usersService.getOneUser(username)
        if (user?.password !== pass) {
            throw new UnauthorizedException('Incorrect credentials')
        }
        const payload = { sub: user.id, username: user.username, age: user.age };

        //sign the JWT token, and the contents of the token will have the payload,
        //payload can be read by the client
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }

}
