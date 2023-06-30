import { IsOptional, IsString } from "class-validator";

export class TokenDto {

    @IsString()
    @IsOptional()
    accessToken?: string;

    @IsString()
    @IsOptional()
    refreshToken?: string;
}