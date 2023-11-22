import mongoose from 'mongoose'
import connectToDatabase from '../models/db'
import * as fs from 'fs'
import DiaryEntry from '../models/diaryEntry'
import Tag from '../models/tag' // Assuming you have a Tag model

connectToDatabase()

fs.readFile('./sampleEntries.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading DiaryEntries file:', err)
    return
  }
  const diaryData = JSON.parse(data)

  DiaryEntry.insertMany(diaryData)
    .then(() => {
      console.log('DiaryEntries seeded successfully✨')
    })
    .catch((error: Error) => {
      console.error('Error seeding DiaryEntries:', error)
    })
})

fs.readFile('./sampleTags.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading Tags file:', err)
    return
  }
  const tagData = JSON.parse(data)

  Tag.insertMany(tagData)
    .then(() => {
      console.log('Tags seeded successfully✨')
      mongoose.connection.close()
    })
    .catch((error: Error) => {
      console.error('Error seeding Tags:', error)
      mongoose.connection.close()
    })
})
