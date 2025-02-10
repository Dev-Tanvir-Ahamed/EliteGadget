import express from "express";

import { createProductHandler } from "../controllers/productController";
import { authMiddleware } from "../middleware/auth";
import { getProducts } from "../services/productServices";

const router = express.Router();

// Protected route: Get all products (requires authentication)
router.get("/products", authMiddleware, async (req, res) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
});

// ✅ Admin-only route: Add a new product (requires admin role & image upload)
router.post(
  "/products",
  // upload.array("images", 2), // Handle multiple image uploads
  createProductHandler
);

export default router;
