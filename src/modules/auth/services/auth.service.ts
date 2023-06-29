import { BadRequestException, HttpException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { UsersService } from '../../users/services/users.service';
import * as bcrypt from 'bcrypt'
import { User } from 'src/modules/users/user.model';
import { Tokens } from '../interfaces';

@Injectable()
export class AuthService {
    constructor(
        @Inject('REFRESH_TOKEN_JWT_SERVICE') private refreshTokenService: JwtService,
        @Inject('ACCESS_TOKEN_JWT_SERVICE') private accessTokenService: JwtService,
        private usersService: UsersService
    ) { }

    async signIn(username: string, password: string): Promise<Tokens> {
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

    signout(): Tokens { //revoke both access and refresh tokens
        return { accessToken: null, refreshToken: null };
    }

    async refreshAccessToken(refreshToken: string) {
        const isRefreshTokenValid = await this.refreshTokenService.verifyAsync(refreshToken)
        if (isRefreshTokenValid) {
            const { username } = this.refreshTokenService.decode(refreshToken) as any
            return await this.generateAccessToken(username)
        } else {
            throw new BadRequestException('Invalid refresh token')
        }
    }

    private async generateAccessToken(user: User) {
        const payload = { sub: user.id, username: user.username, age: user.age };
        return await this.accessTokenService.signAsync(payload)
    }

    private async generateRefreshToken(user: User) {
        const payload = { sub: user.id, username: user.username, age: user.age };
        return await this.refreshTokenService.signAsync(payload)
    }

}
