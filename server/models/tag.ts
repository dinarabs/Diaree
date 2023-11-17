import mongoose, { model } from 'mongoose'
// 1. Create an interface representing a document in MongoDB.
interface ITag {
  name: string
}

// 2. Create a Schema corresponding to the document interface.
const tagSchema = new mongoose.Schema<ITag>({
  name: {
    type: String,
    required: false,
    unique: true,
  },
})

// 3. Create a Model.
const Tag = model<ITag>('Tag', tagSchema)

export default Tag
