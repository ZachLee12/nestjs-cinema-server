import { CreateMovieDto } from "src/modules/movies/dto/create-movie.dto"
import { CreateUserBookingDto } from "../../booking/dto/createUserBooking-dto"
import { ObjectType, Field } from "@nestjs/graphql"

@ObjectType()
export class HallDto{
    @Field()
    id: string

    @Field(()=> CreateMovieDto)
    movie: CreateMovieDto

    @Field()
    movieId: string

    @Field()
    showtime: string

    @Field(()=>String)
    hallSize: 'BIG' | 'MEDIUM' | 'SMALL'

    @Field()
    numberOfSeats: number

    @Field(() => [CreateUserBookingDto], {nullable:true})
    userBooking: CreateUserBookingDto[]
}

// model Hall {
//     id            String        @id @default(uuid())
//     movie         Movie         @relation(fields: [movieId], references: [id])
//     movieId       String
//     showtime      String
//     hallSize      HallSize
//     numberOfSeats Int
//     userBooking   UserBooking[]
  
//     @@unique([movieId, hallSize, showtime])
//   }
  
