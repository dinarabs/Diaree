
import express, { Express } from 'express'
import cors from 'cors'
import router from './router'
import connectToDatabase from './models/db'

const app: Express = express()
const PORT = process.env.PORT || 3000
const HOST = 'localhost'


app.use(cors())
app.use(express.json())
app.use(router)

connectToDatabase()

app.listen(PORT, () => {
  console.log(`⚡️Server running @ http://${HOST}:${PORT}⚡️`)
})
