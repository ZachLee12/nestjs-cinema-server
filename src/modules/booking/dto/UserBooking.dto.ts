import { Field, ID, ObjectType } from '@nestjs/graphql'
import {
    MinLength,
    ArrayNotEmpty,
    Validate,
    IsString,
    IsNotEmpty,
} from 'class-validator'
import { HallDto } from 'src/modules/hall/dto/Hall.dto'
import { MovieDto } from 'src/modules/movies/dto/Movie.dto'

@ObjectType()
export class SeatBookedObject {
    @Field()
    rowId: number
    @Field()
    columnId: number
    @Field()
    selected: boolean //remove this in the future PLEASE
}

@ObjectType()
export class UserBookingDto {

    @Field(type => ID)
    id: string

    @Field(type => ID)
    @IsNotEmpty()
    @IsString()
    hallId: string

    @Field(type => HallDto)
    hall: HallDto

    @Field(type => ID)
    @IsNotEmpty()
    @IsString()
    userId: string

    @Field(type => MovieDto)
    movie: MovieDto

    @Field(type => ID)
    @IsNotEmpty()
    @IsString()
    movieId: string

    @Field(type => [SeatBookedObject])
    @ArrayNotEmpty()
    seatsBooked: SeatBookedObject[]
}

// id          String @id @default(uuid())
// user        User   @relation(fields: [userId], references: [id])
// userId      String
// movie       Movie  @relation(fields: [movieId], references: [id])
// movieId     String
// hall        Hall   @relation(fields: [hallId], references: [id])
// hallId      String
// seatsBooked Json[]

// @@unique([userId, hallId, seatsBooked])
