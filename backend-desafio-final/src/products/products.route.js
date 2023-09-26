import { Router } from "express";
import { productsController } from "./products.controller.js";
import { createBodyValidator } from "./middlewares/create.middleware.js";
import { authMiddleware } from "../user/middlewares/auth.middleware.js";
import { removeParamsValidator } from "./middlewares/remove.middleware.js";

const router = Router();

router.post("/", authMiddleware, createBodyValidator, productsController.create);
router.delete(
    "/:id",
    authMiddleware,
    removeParamsValidator,
    productsController.remove
);

export default router;