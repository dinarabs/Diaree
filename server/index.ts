import connectToDatabase from './models/db'
import { createServer } from './server'

const PORT = process.env.PORT || 3000
const HOST = 'localhost'

const app = createServer()

connectToDatabase()

app.listen(PORT, () => {
  console.log(`⚡️Server running @ http://${HOST}:${PORT}⚡️`)
})
