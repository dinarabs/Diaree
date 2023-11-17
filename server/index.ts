import { v2 as cloudinary } from 'cloudinary'
import cors from 'cors'
import dotenv from 'dotenv'
import express, { Express } from 'express'
import db from './models/db.js'
// import router from './router'

dotenv.config()

const app: Express = express()
const PORT = 3000
const HOST = 'localhost'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

app.use(cors())
app.use(express.json())
// app.use(router)

db().catch((error) => console.log(error))

app.listen(PORT, () => {
  console.log(`⚡️Server running @ http://${HOST}:${PORT}⚡️`)
})
