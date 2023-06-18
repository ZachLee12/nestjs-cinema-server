import { PlayTime } from "../movie.model";
import {
    MinLength,
    ArrayContains,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
    ArrayNotEmpty,
    ValidateNested,
    Validate,
    IsString
} from 'class-validator'
import { Type } from 'class-transformer'


@ValidatorConstraint({ name: 'ValidatePlaytimeRegex', async: false })
export class ValidatePlaytimeRegex implements ValidatorConstraintInterface {
    validate(text: string, args: ValidationArguments) {
        let regex = /^[0-9][0-9]:[0-9][0-9] \b(?:AM|PM)\b$/
        return regex.test(text) // for async validations you must return a Promise<boolean> here
    }

    defaultMessage(args: ValidationArguments) {
        // here you can provide default error message if validation failed
        return 'Wrong playtime format(s). Expected format: 09:00 AM';
    }
}

export class CreateMovieDto {
    id: string;

    @MinLength(2)
    name: string;

    @MinLength(5)
    description: string;
    actors: string[];

    @ArrayNotEmpty()
    // @ValidateNested({ each: true })
    @Validate(ValidatePlaytimeRegex, { each: true })
    playtimes: PlayTime[];
    genres: string[]
}

