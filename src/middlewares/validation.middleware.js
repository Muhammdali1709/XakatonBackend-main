import { customError } from "../exceptions/customErrorClass.js"
import { checkCategories, checkCards,checkParams, checkUser, checkAdmin,checkUserCompany } from "../validation/validate.js"

const checkAdminMiddleware = (req, res, next) => {
  const { error, value } = checkAdmin.validate(req.body)
  if (error) next(new customError(400, error.message.replaceAll("\"", "")))
  req.filteredValue = value
  next()
}
const checkUserMiddleware = (req, res, next) => {
  const { error, value } = checkUser.validate(req.body)
  if (error) next(new customError(400, error.message.replaceAll("\"", "")))
  req.filteredValue = value
  next()
}
const checkUserCompanyMiddleware = (req, res, next) => {
  const { error, value } = checkUserCompany.validate(req.body)
  if (error) next(new customError(400, error.message.replaceAll("\"", "")))
  req.filteredValue = value
  next()
}
const checkParamsMiddleware = (req, res, next) => {
  const { error, value } = checkParams.validate(req.params)
  if (error) next(new customError(400, error.message.replaceAll("\"", "")))
  req.filteredParams = value
  next()
}
const checkCategoryMiddleware = (req, res, next) => {
  const { error, value } = checkCategories(req.method).validate(req.body)
  if (error) next(new customError(400, error.message.replaceAll("\"", "")))
  req.filteredValue = value
  next()
}
const checkCardsMiddleware = (req, res, next) => {
  console.log(req.body);
  console.log(req.file);
  const { error, value } = checkCards(req.method).validate(req.body)
  if (error) next(new customError(400, error.message.replaceAll("\"", "")))
  req.filteredValue = value
  next()
}
export {
  checkAdminMiddleware,
  checkUserMiddleware,
  checkUserCompanyMiddleware,
  checkParamsMiddleware,
  checkCategoryMiddleware,
  checkCardsMiddleware
}