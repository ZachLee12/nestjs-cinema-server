import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { PlayTime } from './movie.model';
import { CreateMovieDto } from './dto/create-movie.dto';


@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {

    }

    @Post()
    async addMovie(@Body(new ValidationPipe()) createMovieDto: CreateMovieDto) {
        const movieAdded = await this.moviesService.insertMovie(createMovieDto)
        return movieAdded
    }

}
