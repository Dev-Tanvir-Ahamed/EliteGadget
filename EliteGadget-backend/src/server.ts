import cors from "cors";
import express from "express";
import connectDB from "./config/db";
import { PORT } from "./config/env";
import routes from "./routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use combined routes
app.use(routes);

// Connect to MongoDB
connectDB();

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
