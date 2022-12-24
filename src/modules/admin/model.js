import { fetchAll } from "../../lib/postgres.js"
import { LOGIN } from "./query.js"
import sha256 from "sha256"
const adminPost = async ({ username, password }) => {
 try {
    return await fetchAll(LOGIN, [username,sha256(password)])
  } catch (error) {
    return error
  }
}
export {
  adminPost
}