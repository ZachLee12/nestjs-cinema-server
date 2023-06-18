import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { PlayTime } from './movie.model';


@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {

    }

    @Post()
    async addMovie(
        @Body('name') movieName: string,
        @Body('description') movieDesc: string,
        @Body('actors') movieActors: string[],
        @Body('playtimes', new ValidationPipe()) moviePlaytimes: PlayTime[],
        @Body('genres') movieGenres: string[]
    ) {
        const movieAdded = await this.moviesService.insertMovie(movieName, movieDesc, movieActors, moviePlaytimes, movieGenres)
        return movieAdded
    }

}
