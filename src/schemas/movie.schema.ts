import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MovieDocument = HydratedDocument<Movie>;

@Schema()
export class Movie {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true, type: [String] })
    actors: string[]

    @Prop({ required: true, type: [Date] })
    playtimes: Date[];

    @Prop({ required: true, type: [String] })
    genres: string[];
}

export const MovieSchema = SchemaFactory.createForClass(Movie)
