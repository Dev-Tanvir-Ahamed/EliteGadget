import { Document } from "mongoose";

// Define the Product interface extending mongoose Document
export interface IProduct extends Document {
  title: string;
  category: string;
  price: number;
  salePrice?: number | null; // Allow null as a valid type
  brand?: string;
  colors: string[];
  sizes: string[];
  sku?: string;
  stock?: string;
  description?: string;
  images: string[]; // Array of image URLs from Cloudinary
}
