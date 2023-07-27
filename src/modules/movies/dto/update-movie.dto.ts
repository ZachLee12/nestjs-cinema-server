import { MovieDto } from "./Movie.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateMovieDto extends PartialType(MovieDto) {

}