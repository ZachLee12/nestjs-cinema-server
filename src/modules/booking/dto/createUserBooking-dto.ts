import { Field, ID, ObjectType } from '@nestjs/graphql'
import {
    MinLength,
    ArrayNotEmpty,
    Validate,
    IsString,
    IsNotEmpty,
} from 'class-validator'
import { CreateMovieDto } from 'src/modules/movies/dto/create-movie.dto'

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
export class CreateUserBookingDto {

    @Field(type => ID)
    id: string

    @Field(type => ID)
    @IsNotEmpty()
    @IsString()
    hallId: string

    @Field(type => ID)
    @IsNotEmpty()
    @IsString()
    userId: string

    @Field(type => CreateMovieDto)
    movie: CreateMovieDto

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
