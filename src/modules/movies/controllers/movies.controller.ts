import { Body, Controller, Get, Post, Put, Patch, Delete, ValidationPipe, Param } from '@nestjs/common';
import { MoviesService } from '../services/movies.service';
import { Movie } from '@prisma/client';
import { CreateMovieDto } from '../dto/create-movie.dto';
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
        return this.moviesService.findMany()
    }

    @Get(':id')
    async findUnique(@Param('id') id: string): Promise<Movie> {
        return this.moviesService.findUnique(id);
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
    async create(@Body(new ValidationPipe()) createMovieDto: CreateMovieDto) {
        const movieAdded = await this.moviesService.create(createMovieDto)
    }

}
