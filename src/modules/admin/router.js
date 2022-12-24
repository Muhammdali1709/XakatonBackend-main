import { Router } from "express";
import { checkAdminMiddleware, checkUserMiddleware } from "../../middlewares/validation.middleware.js";
import { login } from "./controller.js";

const route = Router()
route.post("/login", checkAdminMiddleware, login)
export default route