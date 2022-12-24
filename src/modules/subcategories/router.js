import { Router } from "express";
import { getSubcategory} from "./controller.js";

const route = Router();
route.get("/subcategories", getSubcategory)
export default route