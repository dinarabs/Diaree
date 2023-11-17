'use strict'

import mongoose from 'mongoose'
const DB_URI = 'mongodb://localhost:27017/diary'

async function connectToDatabase() {
  try {
    await mongoose.connect(DB_URI)
    console.log(`📚 Database is successfully connected @ ${DB_URI}!`)
  } catch (error) {
    console.error('🐞Database connection error:', error)
  }
}

connectToDatabase()

export default mongoose
