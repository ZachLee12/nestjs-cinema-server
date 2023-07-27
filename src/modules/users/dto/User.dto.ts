import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsObject, IsString, MinLength, Validate, ValidateNested, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({ name: 'ValidateStrongPassword', async: false })
class ValidateStrongPassword implements ValidatorConstraintInterface {
    validate(value: any, validationArguments?: ValidationArguments): boolean {
        const regex = /^(?=.*[!@#$%^&*()\-=_+{}\[\]:;"'<>,.?/])(?=.*[A-Z]).{5,}$/
        return regex.test(value)
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return 'Password must contain a special character, a capital letter and at least 5 characters long.'
    }
}


@ObjectType()
export class UserDto {
    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    firstname: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    lastname: string;

    @Field(() => Int)
    @IsNotEmpty()
    @IsNumber()
    age: number;

    @Field(() => String)
    @IsNotEmpty()
    birthday: string;

    @Field(() => String)
    @MinLength(3)
    @IsString()
    username: string;

    @Field(() => String)
    @Validate(ValidateStrongPassword)
    @IsString()
    password: string;
}


