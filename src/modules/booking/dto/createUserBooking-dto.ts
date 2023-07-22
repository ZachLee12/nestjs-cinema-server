import {
    MinLength,
    ArrayNotEmpty,
    Validate,
    IsString,
    IsNotEmpty,
} from 'class-validator'

export class CreateUserBookingDto {
    @IsNotEmpty()
    @IsString()
    hallId: string

    @IsNotEmpty()
    @IsString()
    userId: string

    @IsNotEmpty()
    @IsString()
    movieId: string

    @ArrayNotEmpty()
    seatsBooked: {}[]
}
