import { Router } from "express";
import {checkUserMiddleware,checkUserCompanyMiddleware } from "../../middlewares/validation.middleware.js";
import {getUser, postUser,postUserCompany } from "./controller.js";

const route = Router()
route.get("/users/get", getUser)
route.post("/users/post", checkUserMiddleware, postUser)
route.post("/users/post/company", checkUserCompanyMiddleware, postUserCompany)

export default route