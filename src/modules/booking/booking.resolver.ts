import { Resolver, Query, Args, Parent, ResolveField } from '@nestjs/graphql'
import { BookingService } from './services/booking/booking.service'
import { CreateUserBookingDto } from './dto/createUserBooking-dto'
import { CreateMovieDto } from '../movies/dto/create-movie.dto'
import { MoviesService } from '../movies/services/movies.service'

@Resolver(() => CreateUserBookingDto)
export class BookingResolver {
    constructor(
        private bookingService: BookingService,
        private moviesService: MoviesService
    ) { }

    @Query(() => [CreateUserBookingDto])
    async userBookings() {
        return this.bookingService.findAllUserBookings()
    }

    @ResolveField('movie', returns => CreateMovieDto)
    async getUserBookingMovie(@Parent() userBooking: CreateUserBookingDto) {
        return this.moviesService.findUnique(userBooking.movieId)
    }
}