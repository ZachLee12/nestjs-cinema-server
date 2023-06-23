import { Body, Controller, Get, Post, Put, Patch, Delete, ValidationPipe, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie, PlayTime } from './movie.model';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';


@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {

    }

    @Get()
    async getMovies(): Promise<Movie[]> {
        return this.moviesService.getMovies()
    }

    @Get(':id')
    async getOneMovie(@Param('id') id: string): Promise<Movie> {
        return this.moviesService.getOneMovie(id);
    }

    @Patch(':id')
    updateMovie(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
        return this.moviesService.updateMovie(id, updateMovieDto)
    }

    @Delete(':id')
    deleteMovie(@Param('id') id: string) {
        return this.moviesService.deleteProduct(id)
    }

    @Post()
    async addMovie(@Body(new ValidationPipe()) createMovieDto: CreateMovieDto) {
        const movieAdded = await this.moviesService.addMovie(createMovieDto)
        return movieAdded as CreateMovieDto
    }

}
