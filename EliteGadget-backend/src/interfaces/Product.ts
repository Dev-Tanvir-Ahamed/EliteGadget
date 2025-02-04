import { Document } from "mongoose";

export interface IProduct extends Document {
  title: string;
  price: number;
  description: string;
  brand: string;
  category: string;
  ratings: number;
  flashSale: boolean;
  createdAt: Date;
  image: string;
}
