import { Schema, model } from "mongoose";

export interface Coins{
    id:string;
    name:string;
    price:number;
    tags: string[];
    favorite:boolean;
    stars: number;
    imageUrl: string;
    origins: string[];
}

export const CoinSchema = new Schema<Coins>(
    {
        name: {type: String, required:true},
        price: {type: Number, required:true},
        tags: {type: [String], required: true},
        favorite: {type: Boolean, required:false},
        stars: {type: Number, required:true},
        imageUrl: {type: String, required:true},
        origins: {type: [String], required:true},
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps: true
    }
);

export const CoinModel = model<Coins>('coin', CoinSchema);