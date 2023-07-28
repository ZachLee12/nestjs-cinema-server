import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql'
import { MoviesService } from './services/movies.service'
import { MovieDto } from './dto/Movie.dto'
import { UserBookingDto } from '../booking/dto/UserBooking.dto'
import { BookingService } from '../booking/services/booking/booking.service'

@Resolver(() => MovieDto)
export class MoviesResolver {
    constructor(
        private moviesService: MoviesService,
        private bookingService: BookingService
    ) { }

    @Query(() => [MovieDto])
    async movies() {
        return this.moviesService.findAll()
    }

    @ResolveField(() => [UserBookingDto])
    async resolveUserBooking(@Parent() movie: MovieDto) {
        return this.bookingService.findAllWithMovieId(movie.id)
    }
}