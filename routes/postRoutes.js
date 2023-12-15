import { Router } from "express";
import {
  DeletePost,
  createPost,
  fetchPosts,
  showPost,
} from "../Controller/PostController.js";
const router = Router();

router.get("/", fetchPosts);
router.get("/:id", showPost);
router.post("/", createPost);
// router.put("/:id", )
router.delete("/:id", DeletePost);

export default router;
