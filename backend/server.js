import express from "express";
import "dotenv/config.js";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/product.router.js";

const app = express();

app.use(express.json());
app.use("/api/products", productRouter);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
