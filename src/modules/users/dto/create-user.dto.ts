import { IsDate, IsNotEmpty, IsNumber, IsObject, IsString, MinLength, Validate, ValidateNested, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

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


export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    firstname: string;

    @IsNotEmpty()
    @IsString()
    lastname: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;

    @IsNotEmpty()
    birthday: string;

    @MinLength(3)
    @IsString()
    username: string;

    @Validate(ValidateStrongPassword)
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsObject()
    movies: { liked: string[], watched: string[] }
}


