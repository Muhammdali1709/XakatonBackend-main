import { customError } from "../../exceptions/customErrorClass.js"
import { verify } from "../../utils/jwt.js";
import { get, post, put, del } from "./model.js"
import { getSubcategories } from "../subcategories/model.js"
const getCategory = async (_, res, next) => {
    try {
        let category = await get()
        let subcategory = await getSubcategories()
        if (category.length>0 && subcategory.length>0) {
            category.map(item => {
                let newSubcategory=subcategory.filter(subcategory => subcategory.categoryid == item.category_id).filter(item=> delete item.categoryid)
                item.subcategories=newSubcategory
                return item
            })
            res.status(200).json({
                totalCount: category.length,
                message: "all categories",
                data: category
            })
        }
        else if (category.length>1) {
            res.status(200).json({
                totalCount: category.length,
                message: "all categories",
                data: category
            })
        }
        else {
            res.status(404).json({
                totalCount: category.length,
                message: "categories not found",
                data: []
            })
        }
    }
    catch (error) {
        next(new customError(500, error.message))
    }
}
const postCategory = async (req, res, next) => {
    try {
        const { token } = req.headers
        if (token) {
            const decode = await verify(token)
            if (decode) {
                const { category_title } = req.body
                const categories = await post(category_title)
                res.status(201).json({
                    message: "category added",
                    data: categories
                })
            }
            else {
                res.status(401).json({
                    message: "unauthorized",
                    data: []
                })
            }
        }
        else {
            res.status(401).json({
                message: "provide with token",
                data: []
            })
        }
    } catch (error) {
        next(new customError(400, error.message))
    }
}
const putCategory = async (req, res, next) => {
    try {
        const { token } = req.headers
        const { category_title } = req.filteredValue
        const { id } = req.filteredParams
        if (token) {
            const decode = await verify(token)
            if (decode) {
                const categories = await put(id, category_title)
                console.log(categories);
                res.status(categories.length > 0 ? 201 : 404).json({
                    message: categories.length > 0 ? "categories item updated" : "categories item not found",
                    data: categories
                })
            }
            else {
                res.status(401).json({
                    message: "unauthorized",
                    data: []
                })
            }
        }
        else {
            res.status(401).json({
                message: "provide with token",
                data: []
            })
        }
    } catch (error) {
        next(new customError(400, error.message))
    }
}
const deleteCategory = async (req, res, next) => {
    try {
        const { token } = req.headers
        const { id } = req.filteredParams
        if (token) {
            const decode = await verify(token)
            if (decode) {
                const categories = await del(id)
                res.status(categories.length > 0 ? 201 : 404).json({
                    message: categories.length > 0 ? "category item deleted" : "category item not found",
                    data: categories
                })
            }
            else {
                res.status(401).json({
                    message: "unauthorized",
                    data: []
                })
            }
        }
        else {
            res.status(401).json({
                message: "provide with token",
                data: []
            })
        }
    } catch (error) {
        next(new customError(400, error.message))
    }
}

export {
    getCategory,
    postCategory,
    putCategory,
    deleteCategory
}