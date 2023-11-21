import { Router } from 'express'
import multer from 'multer'

const router = Router()
const upload = multer({ dest: 'uploads/' })

import {
  getDiaryEntriesAsc,
  getDiaryEntriesDesc,
  getOneDiaryEntry,
  getDiaryEntriesByDate,
  addDiaryEntry,
  uploadImage,
  editDiaryEntry,
  deleteDiaryEntry,
} from './controllers/diaryEntryController'

import { getAllTags, addTag, deleteTag } from './controllers/tagController'

router.get('/entries/asc', getDiaryEntriesAsc)
router.get('/entries/desc', getDiaryEntriesDesc)
router.get('/entries/:id', getOneDiaryEntry)
router.post('/entries/add', addDiaryEntry)

router.get('/entries/date/:date', getDiaryEntriesByDate)
router.post('/entries/upload-image', upload.single('image'), uploadImage)
router.put('/entries/edit/:id', editDiaryEntry)
router.delete('/entries/delete/:id', deleteDiaryEntry)

router.get('/tags', getAllTags)
router.post('/tags', addTag)
router.delete('/tags/:id', deleteTag)

export default router
