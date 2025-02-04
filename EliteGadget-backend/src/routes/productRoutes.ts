import express from "express";
import { authMiddleware, roleMiddleware } from "../middleware/auth";
import { createProduct, getProducts } from "../services/productServices";

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

// Admin-only route: Add a new product (requires admin role)
router.post(
  "/products",
  authMiddleware,
  roleMiddleware("admin"),
  async (req, res) => {
    try {
      const product = await createProduct(req.body);
      res.status(201).json(product);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred" });
      }
    }
  }
);

export default router;
