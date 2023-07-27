import { MovieDto } from "src/modules/movies/dto/Movie.dto"
import { UserBookingDto } from "../../booking/dto/UserBooking.dto"
import { ObjectType, Field } from "@nestjs/graphql"

@ObjectType()
export class HallDto{
    @Field()
    id: string

    @Field(()=> MovieDto)
    movie: MovieDto

    @Field()
    movieId: string

    @Field()
    showtime: string

    @Field(()=>String)
    hallSize: 'BIG' | 'MEDIUM' | 'SMALL'

    @Field()
    numberOfSeats: number

    @Field(() => [UserBookingDto], {nullable:true})
    userBooking: UserBookingDto[]
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
  
