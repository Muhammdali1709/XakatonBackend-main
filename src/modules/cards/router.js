import { Router } from "express";
import { upload } from "../../middlewares/fileUpload.middleware.js";
import { checkCardsMiddleware, checkParamsMiddleware } from "../../middlewares/validation.middleware.js";
import { deleteCards, getCards, postCards,updateCards,getImage } from "./controller.js";
const route = Router()
route.get("/cards", getCards)
route.get("/:image", getImage)
route.post("/cards/post",upload.single('postImage'), checkCardsMiddleware,postCards)
route.put("/cards/put/:id", checkCardsMiddleware,updateCards)
route.delete("/cards/delete/:id",checkParamsMiddleware,deleteCards)
export default route