import { Injectable, HttpException, HttpStatus, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { PrismaService } from 'src/global/prisma.service';
import { Movie } from '@prisma/client';

@Injectable()
export class MoviesService {
    constructor(
        private prismaService: PrismaService
    ) { }

    async addMovie(createMovieDto: CreateMovieDto) {

    }

    async getMovies(): Promise<Movie[]> {
        return await this.prismaService.movie.findMany();
    }

    async getOneMovie(id: string): Promise<Movie> {
        let movie = null;
        try {
            movie = await this.prismaService.movie.findUnique({ where: { id } })
        } catch (err) {
            throw new BadRequestException('Invalid ID format')
        }

        if (!movie) {
            throw new NotFoundException('Movie not found.')
        }
        return movie
    }

    async deleteMovie(id: string) {

    }

    async updateMovie(id: string, updateMovieDto: UpdateMovieDto) {

    }


}
