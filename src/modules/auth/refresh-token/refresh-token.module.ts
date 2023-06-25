import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../constants';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: jwtConstants.refresh_token_secret,
            signOptions: { expiresIn: '10m' }
        })
    ],
    providers: [{
        provide: 'REFRESH_TOKEN_JWT_SERVICE',
        useExisting: JwtService
    }],
    exports: ['REFRESH_TOKEN_JWT_SERVICE']
})
export class RefreshTokenModule { }
