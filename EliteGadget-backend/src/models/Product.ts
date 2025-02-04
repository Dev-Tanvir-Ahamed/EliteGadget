import { model, Schema } from "mongoose";
import { IProduct } from "../interfaces/Product";

const productSchema: Schema = new Schema<IProduct>({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  ratings: { type: Number, default: 0 },
  flashSale: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  image: { type: String, required: true },
});

export default model<IProduct>("Product", productSchema);
