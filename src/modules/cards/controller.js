import { customError } from "../../exceptions/customErrorClass.js"
import { deleted, get, post, put } from "./model.js"
import path from "path"
const host="http://localhost:8080/"
const getImage = (req,res,next) => {
  try {
    const { image } = req.params
    res.sendFile(path.join(process.cwd(),'uploads',image))
  } catch (error) {
    next(new customError(400,error.message))
  }
}
const getCards = async (req, res, next) => {
  try {
    let cards = await get()
    cards.map(item=>item.image=`${host}${item.image}`)
    if (cards) {
      res.status(200).json({
        totalCount: cards.length,
        message: "all posts",
        data: cards
      })
    }
    else {
      res.status(404).json({
        totalCount: cards.length,
        message: "cards not found",
        data: []
      })
    }
  } catch (error) {
    next(new customError(500, error.message))
  }
}
const postCards = async (req, res, next) => {
  try {
    const cards = await post(req.body, req.file)
    console.log(cards);
        res.status(201).json({
          message: "post added",
          data: cards
        })
  } catch (error) {
    next(new customError(400, error.message))
  }
}
const updateCards = async (req, res, next) => {
  try {
    const cards = await put(req.params)
        res.status(201).json({
          message: "post activated",
          data: cards
        })
  } catch (error) {
    next(new customError(400, error.message))
  }
}
const deleteCards = async (req, res, next) => {
  try {
    const cards = await deleted(req.params)
    console.log(cards);
        res.status(201).json({
          message: "post ignored",
          data: cards
        })
  } catch (error) {
    next(new customError(400, error.message))
  }
}
export {
  getCards,
  getImage,
  postCards,
  deleteCards,
  updateCards
}
