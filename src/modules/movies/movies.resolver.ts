import { Resolver, Query } from '@nestjs/graphql'
import { MoviesService } from './services/movies.service'
import { CreateMovieDto } from './dto/create-movie.dto'

@Resolver(() => CreateMovieDto)
export class MoviesResolver {
    constructor(
        private moviesService: MoviesService
    ) { }

    @Query(() => [CreateMovieDto])
    async movies() {
        return this.moviesService.findAll()
    }


}