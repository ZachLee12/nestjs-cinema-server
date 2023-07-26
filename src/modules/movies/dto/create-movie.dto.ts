import { Field, ObjectType } from "@nestjs/graphql";
import { Showtime } from "../movie.model";
import {
    MinLength,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
    ArrayNotEmpty,
    Validate,
    IsString,
    IsNotEmpty,
    IsOptional,
} from 'class-validator'

@ValidatorConstraint({ name: 'ValidateShowtimeRegex', async: false })
class ValidateShowtimeRegex implements ValidatorConstraintInterface {
    validate(text: string, args: ValidationArguments) {
        let regex = /^[0-9][0-9]:[0-9][0-9] \b(?:AM|PM)\b$/
        return regex.test(text) // for async validations you must return a Promise<boolean> here
    }

    defaultMessage(args: ValidationArguments) {
        // here you can provide default error message if validation failed
        return 'Wrong playtime format(s). Expected format: 09:00 AM';
    }
}

@ObjectType()
export class CreateMovieDto {
    @Field()
    id: string;

    @Field()
    @MinLength(2)
    name: string;

    @Field()
    @MinLength(5)
    description: string;

    @Field(() => [String])
    @IsString({ each: true })
    @MinLength(1, { each: true })
    actors: string[];

    @Field(() => [String])
    @ArrayNotEmpty()
    @Validate(ValidateShowtimeRegex, { each: true })
    showtimes: Showtime[];

    @Field(() => [String])
    genres: string[];

    @Field()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    imgUrlHorizontal: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    imgUrlVertical: string

}

// id               String        @id @default(uuid())
// name             String        @unique
// description      String
// actors           String[]
// showtimes        String[]
// genres           String[]
// imgUrlHorizontal String?
// imgUrlVertical   String?
// likedByUsers     Liked[]
// watchedByUsers   Watched[]
// hall             Hall[]
// userBooking      UserBooking[]

