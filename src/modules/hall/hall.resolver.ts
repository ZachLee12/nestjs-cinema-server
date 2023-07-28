import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql'
import { HallDto } from './dto/Hall.dto'
import { HallService } from './service/hall.service'
import { MovieDto } from '../movies/dto/Movie.dto'
import { MoviesService } from '../movies/services/movies.service'

@Resolver(() => HallDto)
export class HallResolver {
    constructor(
        private hallService: HallService,
        private moviesService: MoviesService
    ) { }

    @Query(() => [HallDto])
    async halls(@Args('movieId') movieId: string, @Args('showtime') showtime: string) {
        return this.hallService.findAll(movieId, showtime)
    }

    @ResolveField('movie', () => MovieDto)
    async resolveMovieField(@Parent() hall: HallDto) {
        return this.moviesService.findOne(hall.movieId)
    }

}