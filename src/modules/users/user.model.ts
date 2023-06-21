
import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    movies: {
        liked: [String],
        disliked: [String],
        watched: [String]
    }
})

export class User extends mongoose.Document {
    name: string;
    username: string;
    password: string;
    movies: {
        liked: string[],
        disliked: string[],
        watched: string[]
    }
}
