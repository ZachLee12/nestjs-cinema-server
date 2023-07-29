
import { PartialType } from "@nestjs/swagger";
import { UserDto, ValidateStrongPassword } from "./User.dto";
import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, IsString, Validate } from "class-validator";


@InputType()
export class UpdateUserDto extends PartialType(UserDto) {
    @Field(returns => String, { nullable: true })
    @IsString()
    @IsOptional()
    username: string

    @Field(returns => String, { nullable: true })
    @IsString()
    @IsOptional()
    @Validate(ValidateStrongPassword)
    password: string
}   