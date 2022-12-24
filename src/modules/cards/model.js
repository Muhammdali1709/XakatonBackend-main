import { fetchAll } from "../../lib/postgres.js"
import { GET_CARDS, POST_CARDS,DELETE_CARDS,UPDATE_CARDS } from "./query.js"
const get = async () => {
  try {
    return await fetchAll(GET_CARDS)
  } catch (error) {
    return error
  }
}
const post = async ({ title, description, text, date, turi, youtube, subcategory_id, user_id }, { filename }) => {
  let x=new Date().toLocaleTimeString()
  try {
    return await fetchAll(POST_CARDS, [title, description, text, date, x, turi, youtube, filename, subcategory_id, user_id,])
  } catch (error) {
    return error
  }
}
const put = async ({ id }) => {
  try {
    return await fetchAll(UPDATE_CARDS,[id])
  } catch (error) {
    return error
  }
}
const deleted = async ({ id }) => {
  console.log(id);
  try {
    return await fetchAll(DELETE_CARDS,[id])
  } catch (error) {
    return error
  }
}
export {
  get,
  post,
  deleted,
  put
}