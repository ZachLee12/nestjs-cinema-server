
import { PartialType } from "@nestjs/swagger";
import { UserDto, ValidateStrongPassword } from "./User.dto";
import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, IsString, Validate } from "class-validator";


@InputType()
export class UpdateUserDto extends PartialType(UserDto) {
    @Field()
    @IsString()
    @IsOptional()
    newUsername: string

    @Field()
    @IsString()
    @IsOptional()
    @Validate(ValidateStrongPassword)
    newPassword: string
}   