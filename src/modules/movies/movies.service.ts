import { Injectable, HttpException, HttpStatus, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { Movie, MovieEnum } from './movie.model';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
    constructor(@InjectModel(MovieEnum.name) private readonly movieModel: Model<Movie>) {

    }

    async addMovie(createMovieDto: CreateMovieDto) {
        const newMovie = new this.movieModel(createMovieDto)
        await newMovie.save(); //save returns a promise
        return newMovie;
    }

    async getMovies(): Promise<Movie[]> {
        return await this.movieModel.find()
    }

    async getOneMovie(id: string): Promise<Movie> {
        let movie = null;
        try {
            movie = await this.movieModel.findById(id)
        } catch (err) {
            throw new BadRequestException('Invalid ID format')
        }

        if (!movie) {
            throw new NotFoundException('Movie not found.')
        }
        return movie
    }

    async deleteMovie(id: string) {
        //in mongoose, id is stored as '_id' property
        return await this.movieModel.deleteOne({ _id: id })
    }

    async updateMovie(id: string, updateMovieDto: UpdateMovieDto) {
        let updatedMovie = null;
        try {
            updatedMovie = await this.movieModel.updateOne({ _id: id }, { $set: updateMovieDto })
        } catch (err) {
            throw new BadRequestException('Invalid ID format')
        }

        if (updatedMovie.matchedCount === 0) {
            throw new NotFoundException(`Movie #${id} not found`)
        }
        return updatedMovie
    }


}
