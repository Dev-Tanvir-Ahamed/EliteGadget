import { IProduct } from "../interfaces/Product";
import { Product } from "../models/Product";

export const createProduct = async (
  productData: IProduct
): Promise<IProduct> => {
  const product = new Product(productData);
  return await product.save();
};

export const getProducts = async (): Promise<IProduct[]> => {
  return await Product.find();
};
