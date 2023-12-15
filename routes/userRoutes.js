import { Router } from "express";
import {
  DeleteUser,
  createUser,
  getManyUsers,
  getUser,
} from "../Controller/UserController.js";
import { updateUser } from "../Controller/UserController.js";
const router = Router();

router.post("/", createUser);
router.put("/:id", updateUser);
router.get("/:id", getUser);
router.delete("/:id", DeleteUser);

//Fetch many users
router.get("/", getManyUsers);

export default router;
