
import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: Number, required: true },
    birthday: { type: Date, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    movies: {
        liked: [String],
        watched: [String]
    }
})

export class User extends mongoose.Document {
    firstname: string;
    lastname: string;
    age: Number;
    birthday: Date;
    username: string;
    password: string;
    movies: {
        liked: string[],
        watched: string[]
    }
}

export enum UserEnum {
    name = 'User'
}
