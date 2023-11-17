import { Router } from "express"
import  multer from "multer"

const router = Router()
const upload = multer({ dest: "uploads/" })

import {
  getRecentDiaryEntries,
  getAllDiaryEntries,
  getOneDiaryEntry,
  getDiaryEntryByDate,
  addDiaryEntry,
  uploadImage,
  editDiaryEntry,
  deleteDiaryEntry}
 from "./controllers/diaryController"

import {
  getAllTags,
  addTag,
  deleteTag,
} from "./controllers/tagController"

router.get("/diary/all", getAllDiaryEntries)
router.get("/diary/recent", getRecentDiaryEntries)
router.get("/diary/:id", getOneDiaryEntry)
router.post("/diary/add", addDiaryEntry)

router.get("/diary/date/:date", getDiaryEntryByDate)
router.post("/diary/upload-image", upload.single("image"), uploadImage)
router.put("/diary/edit/:id", editDiaryEntry)
router.delete("/diary/delete/:id", deleteDiaryEntry)


router.get("/tags", getAllTags)
router.post("/tags", addTag)
router.delete("/tags/:id", deleteTag)


export default router
