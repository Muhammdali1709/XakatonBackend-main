import { customError } from "../../exceptions/customErrorClass.js"
import { getSubcategories} from "./model.js"
const getSubcategory = async (_, res, next) => {
    try {
        const subcategory = await getSubcategories()
        if (subcategory.length > 0) {
            res.status(200).json({
                totalCount: subcategory.length,
                message: "subcategory items",
                data: subcategory
            })
        }
        else {
            res.status(404).json({
                totalCount: subcategory.length,
                message: "subcategory items not found",
                data: subcategory
            })
        }
        return subcategory
    } catch (error) {
        next(new customError(500, error.message))
    }
}

export {
    getSubcategory
}