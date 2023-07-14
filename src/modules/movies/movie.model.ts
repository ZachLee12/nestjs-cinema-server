
import * as mongoose from 'mongoose'


//mongoose schema
export const MovieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    actors: { type: [String], required: true },
    playtimes: { type: [String], required: true },
    genres: { type: [String], required: true },
    imgUrl: { type: String, required: true }
})

export type PlayTime = `${number}${number}:${number}${number} ${'AM' | 'PM'}`

export class Movie {
    id: string;
    name: string;
    description: string;
    actors: string[];
    playtimes: PlayTime[];
    genres: string[];
    imgUrl: string;
}

export enum MovieEnum {
    name = "Movie"
}