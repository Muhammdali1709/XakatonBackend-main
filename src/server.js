import express from "express"
import { PORT } from "./config/config.js"
import { errorHandlerMiddleware } from "./middlewares/errorHandler.middleware.js"
import dotenv from "dotenv"
import allData from "./modules/index.js"
import cors from "cors"
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors(
  {
    origin:'*'
  }
))
app.use(allData)
app.use(errorHandlerMiddleware)
app.listen(PORT, console.log("hello from the server"))