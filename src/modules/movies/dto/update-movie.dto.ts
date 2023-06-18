import { PlayTime } from "../movie.model";
import {
    MinLength,
    ArrayNotEmpty,
    Validate,
    IsString,
} from 'class-validator'
import { ValidatePlaytimeRegex } from "./create-movie.dto";
import { CreateMovieDto } from "./create-movie.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateMovieDto extends PartialType(CreateMovieDto) {

}