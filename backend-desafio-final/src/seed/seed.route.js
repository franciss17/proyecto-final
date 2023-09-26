import { Router } from "express";
import { seeder } from "./seed.controller.js";

const router = Router();

router.get("/", seeder);

export default router;