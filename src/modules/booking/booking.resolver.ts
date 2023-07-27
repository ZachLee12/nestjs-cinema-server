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
        return this.bookingService.findAllUserBookings()
    }

    @ResolveField('movie', () => MovieDto)
    async userBookingMovieResolver(@Parent() userBooking: UserBookingDto) {
        return this.moviesService.findUnique(userBooking.movieId)
    }

}