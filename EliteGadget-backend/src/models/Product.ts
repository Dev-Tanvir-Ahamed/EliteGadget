import mongoose, { Schema } from "mongoose";
import { IProduct } from "../interfaces/Product";
// Define the product schema
const productSchema: Schema<IProduct> = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    salePrice: { type: Number },
    brand: { type: String },
    colors: [String],
    sizes: [String],
    sku: { type: String },
    stock: [String],
    description: { type: String },
    images: [String], // Array of image URLs from Cloudinary
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
