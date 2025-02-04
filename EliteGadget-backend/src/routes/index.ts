import express from "express";
import authRoutes from "./authRoutes";
import productRoutes from "./productRoutes";

const router = express.Router();

// Use auth routes
router.use("/api/auth", authRoutes);

// Use product routes
router.use("/api/v1", productRoutes);

export default router;
