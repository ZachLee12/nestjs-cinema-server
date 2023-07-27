import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql'
import { HallDto } from './dto/Hall-dto'
import { HallService } from './service/hall.service'
import { CreateMovieDto } from '../movies/dto/create-movie.dto'
import { MoviesService } from '../movies/services/movies.service'

@Resolver(() => HallDto)
export class HallResolver {
    constructor(
        private hallService: HallService,
        private moviesService: MoviesService
    ) { }

    @Query(() => [HallDto])
    async halls(@Args('movieId') movieId: string, @Args('showtime') showtime: string) {
        return this.hallService.findHalls(movieId, showtime)
    }

    @ResolveField('movie', () => CreateMovieDto)
    async resolveMovieField(@Parent() hall: HallDto) {
        return this.moviesService.findUnique(hall.movieId)
    }

}