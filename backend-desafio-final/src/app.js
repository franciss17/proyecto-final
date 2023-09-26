import cors from "cors";
import express from "express";
import productsRouter from "./products/products.route.js";
import seedRouter from "./seed/seed.route.js";
import userRouter from "./user/user.route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/seed", seedRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/products", productsRouter);

export { app };