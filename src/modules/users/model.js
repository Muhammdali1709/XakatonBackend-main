import { fetchAll } from "../../lib/postgres.js"
import { GET_USER, POST_USER,POST_USER_COMPANY} from "./query.js"
const get = async () => {
    return await fetchAll(GET_USER)
}
const post = async ({speaker,profession,type}) => {
    return await fetchAll(POST_USER, [speaker,profession,type])
}
const postCompany = async ({speaker,profession,type,company}) => {
    return await fetchAll(POST_USER_COMPANY, [speaker,profession,type,company])
}

export {
    get,
    post,
    postCompany
}