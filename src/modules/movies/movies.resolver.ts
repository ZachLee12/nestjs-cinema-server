import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql'
import { MoviesService } from './services/movies.service'
import { CreateMovieDto } from './dto/create-movie.dto'
import { CreateUserBookingDto } from '../booking/dto/createUserBooking-dto'
import { BookingService } from '../booking/services/booking/booking.service'

@Resolver(() => CreateMovieDto)
export class MoviesResolver {
    constructor(
        private moviesService: MoviesService,
        private bookingService: BookingService
    ) { }

    @Query(() => [CreateMovieDto])
    async movies() {
        return this.moviesService.findAll()
    }

    @ResolveField(() => [CreateUserBookingDto])
    async resolveUserBooking(@Parent() movie: CreateMovieDto) {
        return this.bookingService.findAllUserBookingsWithMovieId(movie.id)
    }
}