import { Router } from "express";
import UserController from "./controllers/UserController";

const router = Router()

router.get("/users", UserController.index )
router.get('/users/create', UserController.index)

export default router