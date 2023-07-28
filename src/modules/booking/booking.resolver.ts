import { Resolver, Query, Args, Parent, ResolveField } from '@nestjs/graphql'
import { BookingService } from './services/booking/booking.service'
import { UserBookingDto } from './dto/UserBooking.dto'
import { MovieDto } from '../movies/dto/Movie.dto'
import { MoviesService } from '../movies/services/movies.service'

@Resolver(() => UserBookingDto)
export class BookingResolver {
    constructor(
        private bookingService: BookingService,
        private moviesService: MoviesService
    ) { }

    @Query(() => [UserBookingDto])
    async userBookings() {
        return this.bookingService.findAll()
    }

    @ResolveField('movie', () => MovieDto)
    async userBookingMovieResolver(@Parent() userBooking: UserBookingDto) {
        return this.moviesService.findOne(userBooking.movieId)
    }

    @Query(returns => [UserBookingDto])
    async userBookingsWithUserId(@Args('userId') userId: string) {
        return await this.bookingService.findManyWithUserId(userId)
    }

}