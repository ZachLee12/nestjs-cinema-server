import { Body, Controller, Get, Post, Put, Patch, Delete, ValidationPipe, Param } from '@nestjs/common';
import { MoviesService } from '../services/movies.service';
import { Movie } from '@prisma/client';
import { MovieDto } from '../dto/Movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';


@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {

    }

    @Get('testConnection')
    getTestResponse() {
        return { message: 'movies endpoint' }
    }

    // returns all movies
    @Get()
    async findAll(): Promise<Movie[]> {
        return this.moviesService.findAll()
    }

    @Get(':id')
    async findUnique(@Param('id') id: string): Promise<Movie> {
        return this.moviesService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
        return this.moviesService.update(id, updateMovieDto)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.moviesService.delete(id)
    }

    @Post()
    async create(@Body(new ValidationPipe()) movieDto: MovieDto) {
        const movieAdded = await this.moviesService.create(movieDto)
    }

}
