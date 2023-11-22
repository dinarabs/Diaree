import { Schema, model } from 'mongoose'

export interface IDiaryEntry {
  id: string
  title: string
  text: string
  imageUrl: string
  tags: string[]
}

const diaryEntrySchema = new Schema<IDiaryEntry>(
  {
    id: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    tags: {
      type: [String],
      validate: {
        validator: (v: any) => v.every((tag: any) => typeof tag === 'string'),
        message: 'Tags must be strings.',
      },
    },
  },
  {
    timestamps: {
      currentTime: () => new Date(Date.now() + 60 * 60 * 1000),
    },
  }
)

const DiaryEntry = model<IDiaryEntry>('Diary', diaryEntrySchema)

export default DiaryEntry
