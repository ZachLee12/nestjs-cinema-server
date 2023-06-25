import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { UsersService } from '../../users/services/users.service';
import * as bcrypt from 'bcrypt'
import { User } from 'src/modules/users/user.model';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private usersService: UsersService
    ) { }

    async signIn(username: string, password: string) {
        const user = await this.usersService.getOneUser(username)
        if (!user) {
            throw new BadRequestException('Incorrect credentials')
        }
        const match = await bcrypt.compare(password, user.password)

        if (!match) {
            throw new BadRequestException('Incorrect credentials')
        }

        //sign the JWT token, and the contents of the token will have the payload,
        //payload can be read by the client
        return {
            accessToken: await this.generateAccessToken(user),
            refreshToken: await this.generateRefreshToken(user)
        }
    }

    private async generateAccessToken(user: User) {
        const payload = { sub: user.id, username: user.username, age: user.age };
        return await this.jwtService.signAsync(payload)
    }

    private async generateRefreshToken(user: User) {
        const payload = { sub: user.id, username: user.username, age: user.age };
        return await this.jwtService.signAsync(payload)
    }

}
