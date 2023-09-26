import { Router } from "express";
import { userController } from "./user.controller.js";
import { registerBodyValidator } from "./middlewares/register.middleware.js";
import { loginBodyValidator } from "./middlewares/login.middleware.js";

const router = Router();

router.post("/register", registerBodyValidator, userController.register);
router.post("/login", loginBodyValidator, userController.login);

export default router;