import Router from 'express'
import multer from 'multer'

const router = Router()

import { addTag, deleteTag, getAllTags } from './controllers/tagController'

const upload = multer({ dest: 'uploads/' })

const {
  getRecentDiaryEntries,
  getAllDiaryEntries,
  getOneDiaryEntry,
  getDiaryEntryByDate,
  addDiaryEntry,
  uploadImage,
  editDiaryEntry,
  deleteDiaryEntry,
} = require('./controllers/diaryController')

// get/post -> /movements getbyID -> /movements/:id
router.get('/all', getAllDiaryEntries) //-> /diary/all
router.get('/recent', getRecentDiaryEntries) //-> /diary/recent
router.post('/add', addDiaryEntry) // /diary/add
router.get('/:id', getOneDiaryEntry) // /diary/:id
router.get('/date/:date', getDiaryEntryByDate) // /diary/date/:date
router.put('/edit/:id', editDiaryEntry) // /diary/edit/:id
router.delete('/delete/:id', deleteDiaryEntry) // diary/delete/:id
router.post('/upload-image', upload.single('image'), uploadImage) // /diary/uploadImage

router.get('/tags', getAllTags)
router.post('/tags', addTag)
router.delete('/tags/:id', deleteTag)

export default router
