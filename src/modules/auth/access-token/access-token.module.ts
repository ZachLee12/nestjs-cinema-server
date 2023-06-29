import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../constants';


@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: jwtConstants.access_token_secret,
            signOptions: { expiresIn: '2s' }
        })
    ],
    providers: [{
        provide: 'ACCESS_TOKEN_JWT_SERVICE',
        useExisting: JwtService
    }],
    exports: ['ACCESS_TOKEN_JWT_SERVICE']
})
export class AccessTokenModule { }
