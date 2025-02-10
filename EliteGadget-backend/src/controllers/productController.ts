import { NextFunction, Request, Response } from "express";
import { createProduct } from "../services/productServices";

export const createProductHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // console.log("Request Files:", req.files); // Add this line to log files
    // Ensure files are uploaded
    // if (!req.files || !(req.files as Express.Multer.File[]).length) {
    //   res.status(400).json({ message: "At least one image is required." });
    //   return;
    // }

    // Ensure req.files is an array
    // const files = req.files as Express.Multer.File[];
    // if (!Array.isArray(files)) {
    //   res.status(400).json({ message: "Invalid file upload." });
    //   return;
    // }

    // Extract file paths
    // const imageUrls = files.map((file) => file.path); // This should now work without error

    // Merge images with product data
    const productData = req.body;

    const product = await createProduct(productData);
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Internal server error" });
    next(error);
  }
};
