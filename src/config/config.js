import dotenv from "dotenv/config"

const PORT = process.env.PORT || 8080;
const pgConfig = {
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD
}
export {
    PORT,
    pgConfig
}