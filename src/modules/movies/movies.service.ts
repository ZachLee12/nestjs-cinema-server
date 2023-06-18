import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { Movie } from './movie.model';
import { PlayTime } from './movie.model';
import { CreateMovieDto } from './dto/create-movie.dto';

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

    getMovies() {
        return []
    }

    getOneMovie() {
        return null;
    }


}
