
import express, { Express } from 'express'
import cors from 'cors'
import router from './router'

const app: Express = express()
const PORT = 3000
const HOST = 'localhost'


app.use(cors())
app.use(express.json())
app.use(router)


app.listen(PORT, () => {
  console.log(`⚡️Server running @ http://${HOST}:${PORT}⚡️`)
})
