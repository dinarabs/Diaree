import { Request, Response } from 'express'
import Tag from '../models/tag'

async function getAllTags(req: Request, res: Response) {
  try {
    const tags = await Tag.find()
    res.status(200).json(tags)
  } catch (error) {
    console.error('Error fetching tags:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

async function addTag(req: Request, res: Response) {
  try {
    const { name } = req.body
    const newTag = await Tag.create(name)
    res.status(201).json(newTag)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

async function deleteTag(req: Request, res: Response) {
  try {
    const { id } = req.params
    const deletedTag = await Tag.findByIdAndDelete(id)

    if (!deletedTag) {
      return res.status(404).json({ message: 'Tag not found' })
    }

    res.status(200).json({ message: 'Tag deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export { addTag, deleteTag, getAllTags }
