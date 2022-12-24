import { fetchAll } from "../../lib/postgres.js"
import { GET_CATEGORY, POST_CATEGORY, PUT_CATEGORY, DELETE_CATEGORY } from "./query.js"
const get = async () => {
    return await fetchAll(GET_CATEGORY)
}
const post = async (category_title) => {
    return await fetchAll(POST_CATEGORY, [category_title])
}
const put = async (id, category_title) => {
    return await fetchAll(PUT_CATEGORY, [id, category_title])
}
const del = async (id) => {
    return await fetchAll(DELETE_CATEGORY, [id])
}

export {
    get,
    post,
    put,
    del
}