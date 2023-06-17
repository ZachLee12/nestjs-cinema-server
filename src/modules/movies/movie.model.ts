import * as mongoose from 'mongoose'

export const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    actors: { type: [String], required: true },
    playtimes: { type: [Date], required: true },
    genres: { type: String, required: true }
})

export class Movie {
    constructor(
        public name: string,
        public description: string,
        public actors: string[],
        public playtimes: Date[],
        public genres: string[],
    ) { }
}