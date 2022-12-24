import { customError } from "../../exceptions/customErrorClass.js"
import { get, post, postCompany } from "./model.js"
 
const getUser = async (req, res, next) => {
  try {
    let users = await get()
    if (users.length>0) {
      res.status(200).json({
        totalCount: users.length,
        message: "all users",
        data: users
      })
    }
    else {
      res.status(404).json({
        totalCount: users.length,
        message: "users not found",
        data: []
      })
    }
  } catch (error) {
    next(new customError(500, error.message))
  }
}
const postUser = async (req, res, next) => {
  try {
    const user = await post(req.body)
        res.status(201).json({
          message: "user added",
          data: user
        })
  } catch (error) {
    next(new customError(400, error.message))
  }
}
const postUserCompany = async(req,res,next) => {
  try {
    const user = await postCompany(req.body)
        res.status(201).json({
          message: "user added",
          data: user
        })
  } catch (error) {
    next(new customError(400, error.message))
  }
}
export {
  getUser,
  postUser,
  postUserCompany
}
