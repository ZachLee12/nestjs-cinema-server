import { IsDate, IsNotEmpty, IsString, MinLength, Validate, ValidateNested, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

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
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    age: number;

    @IsNotEmpty()
    birthday: string;

    @MinLength(3)
    username: string;

    @Validate(ValidateStrongPassword)
    password: string;

    @IsNotEmpty()
    movies: { liked: string[], watched: string[] }
}


