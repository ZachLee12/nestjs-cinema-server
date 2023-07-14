import { BadRequestException, HttpException, HttpStatus, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
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
        const user = await this.usersService.findOne(username)
        console.log(user)
        if (!user) {
            throw new UnauthorizedException('Incorrect credentials. Check your username or password.')
        }
        const match = await bcrypt.compare(password, user.password)

        if (!match) {
            throw new UnauthorizedException('Incorrect credentials. Check your username or password.')
        }

        //sign the JWT token, and the contents of the token will have the payload,
        //payload can be read by the client
        return {
            accessToken: await this.generateAccessToken(user),
            refreshToken: await this.generateRefreshToken(user)
        }
    }

    signout(): Tokens { //revoke both access and refresh tokens
        return { accessToken: '', refreshToken: '' };
    }

    async verifyRefreshToken(refreshToken: string) {
        try {
            await this.refreshTokenService.verifyAsync(refreshToken)
            return { message: `refresh token is still valid. You're good to go!` }
        } catch (errorObject) {
            throw new HttpException({ status: HttpStatus.BAD_REQUEST, error: errorObject }, HttpStatus.BAD_REQUEST)
        }
    }

    async refreshAccessToken(refreshToken: string): Promise<string> {
        try {
            await this.refreshTokenService.verifyAsync(refreshToken)
            const { username } = this.refreshTokenService.decode(refreshToken) as any
            const user = await this.usersService.findOne(username)
            return await this.generateAccessToken(user)

        } catch (errorObject) {
            throw new HttpException({ status: HttpStatus.BAD_REQUEST, error: errorObject }, HttpStatus.BAD_REQUEST)
        }
    }

    private async generateAccessToken(user: User) {
        const payload = { sub: user.id, firstname: user.firstname, lastname: user.lastname, username: user.username, age: user.age };
        return await this.accessTokenService.signAsync(payload)
    }

    private async generateRefreshToken(user: User) {
        const payload = { sub: user.id, firstname: user.firstname, lastname: user.lastname, username: user.username, age: user.age };
        return await this.refreshTokenService.signAsync(payload)
    }
}
