import { Injectable, HttpException, HttpStatus, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { Movie } from './movie.model';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
    constructor(@InjectModel('Movie') private readonly movieModel: Model<Movie>) {

    }

    async insertMovie(createMovieDto: CreateMovieDto) {
        const { name, description, actors, playtimes, genres } = createMovieDto
        const newMovie = new this.movieModel({ name, description, actors, playtimes, genres })
        await newMovie.save(); //save returns a promise
        console.log(newMovie)
        return newMovie;
    }

    async getMovies(): Promise<Movie[]> {
        return await this.movieModel.find()
    }

    async getOneMovie(id: string): Promise<Movie> {
        let movie;
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

    async deleteProduct(id: string) {
        //in mongoose, id is stored as '_id' property
        return await this.movieModel.deleteOne({ _id: id })
    }

    async updateMovie(id: string, updateMovieDto: UpdateMovieDto) {
        const updatedMovie = await this.getOneMovie(id)
        const { name, description, playtimes, actors, genres } = updateMovieDto
        console.log(updateMovieDto)
        if (name) {
            updatedMovie.name = name
            console.log(name)
        }
        if (description) {
            updatedMovie.description = description
        }
        if (playtimes) {
            updatedMovie.playtimes = playtimes
        }
        if (actors) {
            updatedMovie.actors = actors
        }
        if (genres) {
            updatedMovie.genres = genres
        }
        return await updatedMovie.save()
    }


}
