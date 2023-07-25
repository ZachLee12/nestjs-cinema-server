import {
    MinLength,
    ArrayNotEmpty,
    Validate,
    IsString,
    IsNotEmpty,
} from 'class-validator'

export interface SeatBookedObject {
    rowId: number,
    columnId: number,
    selected: boolean //remove this in the future PLEASE
}

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
    seatsBooked: SeatBookedObject[]
}
