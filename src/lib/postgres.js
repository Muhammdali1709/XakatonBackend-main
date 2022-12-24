import pg from "pg"
import { pgConfig } from "../config/config.js"

const pool = new pg.Pool(pgConfig)

async function fetchAll(SQL, params = []) {
    const client = await pool.connect();
    try {
        let { rows } = await client.query(SQL, params)
        return rows
    } catch (error) {
        return error
    }
    finally {
        client.release()
    }
}
export {
    fetchAll
}
