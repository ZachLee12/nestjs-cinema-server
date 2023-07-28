import { Injectable, HttpException, HttpStatus, NotFoundException, BadRequestException } from '@nestjs/common';
import { MovieDto } from '../dto/Movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { PrismaService } from 'src/global/prisma.service';
import { Movie as PrismaMovie } from '@prisma/client';

@Injectable()
export class MoviesService {
    constructor(
        private prismaService: PrismaService
    ) { }

    async create(movieDto: MovieDto) {

    }

    async findAll(): Promise<PrismaMovie[]> {
        return await this.prismaService.movie.findMany();
    }

    async findOne(id: string): Promise<PrismaMovie> {
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

    async delete(id: string) {

    }

    async update(id: string, updateMovieDto: UpdateMovieDto) {

    }


}
