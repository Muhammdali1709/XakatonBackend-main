import { get} from "./query.js";
import { fetchAll } from "../../lib/postgres.js";
const getSubcategories=async()=>{
    try {
        return await fetchAll(get)
    } catch (error) {
        return error;
    }
}
export{
    getSubcategories
}