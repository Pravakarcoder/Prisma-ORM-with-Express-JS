import { Router } from "express";
const router = Router();

import PostRoutes from "./postRoutes.js";

import UserRoutes from "./userRoutes.js";
router.use("/api/user", UserRoutes);

// FOR POST
router.use("/api/post", PostRoutes);

export default router;
