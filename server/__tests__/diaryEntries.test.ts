import request from 'supertest'
const mockingoose = require('mockingoose')
import { createServer } from '../server'
import { entries } from './__fixtures__/entries'
import diaryEntryModel from '../models/diaryEntry'

const app = createServer()

// TODO assert for the order of the entries
describe('GET /entries/asc', () => {
  describe('given diary entries found', () => {
    beforeEach(() => {
      mockingoose.resetAll()
      mockingoose(diaryEntryModel).toReturn(entries, 'find')
    })

    it('should return all entries in asc order', async () => {
      const res = await request(app).get('/entries/asc')
      expect(res.body[0].title).toBe(entries[0].title)
      expect(res.body[1].tags).toEqual(entries[1].tags)
      expect(res.body[0].text).toBe(entries[0].text)
      expect(res.body[1].imageUrl).toBe(entries[1].imageUrl)
    })

    it('should respond with 200 status code', async () => {
      const res = await request(app).get('/entries/asc')
      expect(res.statusCode).toBe(200)
    })

    it('should specify json in the content type header', async () => {
      const res = await request(app).get('/entries/asc')
      expect(res.headers['content-type']).toEqual(
        expect.stringContaining('json')
      )
    })
  })
  describe('given no entries found', () => {
    it('should respond with 404 code and error message', async () => {
      mockingoose(diaryEntryModel).toReturn([], 'find')

      const res = await request(app).get('/entries/asc')
      expect(res.statusCode).toBe(404)
      expect(res.body).toEqual({ message: 'No diary entries found' })
    })
  })
})

// TODO assert for the order of the entries
describe('GET /entries/desc', () => {
  describe('given diary entries found', () => {
    beforeEach(() => {
      mockingoose.resetAll()
      mockingoose(diaryEntryModel).toReturn(entries, 'find')
    })

    it('should return all entries in desc order', async () => {
      const res = await request(app).get('/entries/desc')

      expect(res.body[0].title).toBe(entries[0].title)
      expect(res.body[1].tags).toEqual(entries[1].tags)
      expect(res.body[0].text).toBe(entries[0].text)
      expect(res.body[1].imageUrl).toBe(entries[1].imageUrl)
    })

    it('should respond with 200 status code', async () => {
      const res = await request(app).get('/entries/desc')
      expect(res.statusCode).toBe(200)
    })

    it('should specify json in the content type header', async () => {
      const res = await request(app).get('/entries/desc')
      expect(res.headers['content-type']).toEqual(
        expect.stringContaining('json')
      )
    })
  })
  describe('given no entries found', () => {
    it('should respond with 404 code and error message', async () => {
      mockingoose(diaryEntryModel).toReturn([], 'find')

      const res = await request(app).get('/entries/desc')
      expect(res.statusCode).toBe(404)
      expect(res.body).toEqual({ message: 'No diary entries found' })
    })
  })
})

describe('GET /entries/:id', () => {
  const id = entries[0]._id
  describe('given diary entry found', () => {
    beforeEach(() => {
      mockingoose.resetAll()
      mockingoose(diaryEntryModel).toReturn(entries[0], 'findOne')
    })

    it('should return the entry', async () => {
      const res = await request(app).get(`/entries/${id}`)
      expect(res.body._id).toBe(entries[0]._id)
      expect(res.body.title).toBe(entries[0].title)
      expect(res.body.tags).toEqual(entries[0].tags)
      expect(res.body.text).toBe(entries[0].text)
      expect(res.body.imageUrl).toBe(entries[0].imageUrl)
    })

    it('should respond with 200 status code', async () => {
      const res = await request(app).get(`/entries/${id}`)
      expect(res.statusCode).toBe(200)
    })

    it('should specify json in the content type header', async () => {
      const res = await request(app).get(`/entries/${id}`)
      expect(res.headers['content-type']).toEqual(
        expect.stringContaining('json')
      )
    })
  })
  describe('given no entries found', () => {
    it('should respond with 404 code and error message', async () => {
      mockingoose(diaryEntryModel).toReturn(null, 'findOne')

      const res = await request(app).get(`/entries/${id}`)
      expect(res.statusCode).toBe(404)
      expect(res.body).toEqual({ message: 'Diary entry not found' })
    })
  })
})

describe('GET /entries/date/:date', () => {
  describe('given diary entries found', () => {
    beforeEach(() => {
      mockingoose.resetAll()
      mockingoose(diaryEntryModel).toReturn(entries, 'find')
    })

    it('should return all entries for the date', async () => {
      const res = await request(app).get('/entries/date/2020-10-31')

      expect(res.body[0].title).toBe(entries[0].title)
      expect(res.body[1].tags).toEqual(entries[1].tags)
      expect(res.body[0].text).toBe(entries[0].text)
      expect(res.body[1].imageUrl).toBe(entries[1].imageUrl)
    })

    it('should respond with 200 status code', async () => {
      const res = await request(app).get('/entries/date/2020-10-31')
      expect(res.statusCode).toBe(200)
    })

    it('should specify json in the content type header', async () => {
      const res = await request(app).get('/entries/date/2020-10-31')
      expect(res.headers['content-type']).toEqual(
        expect.stringContaining('json')
      )
    })
  })
})

describe('POST /entries/add', () => {
  describe('given diary entry is valid', () => {
    beforeEach(() => {
      mockingoose.resetAll()
      mockingoose(diaryEntryModel).toReturn(entries[0], 'save')
    })

    it('should return the entry if added', async () => {
      const res = await request(app).post('/entries/add').send(entries[0])
      expect(res.body.title).toBe(entries[0].title)
      expect(res.body.tags).toEqual(entries[0].tags)
      expect(res.body.text).toBe(entries[0].text)
      expect(res.body.imageUrl).toBe(entries[0].imageUrl)
    })

    it('should respond with 201 status code', async () => {
      const res = await request(app).post('/entries/add').send(entries[0])
      expect(res.statusCode).toBe(201)
    })

    it('should specify json in the content type header', async () => {
      const res = await request(app).post('/entries/add').send(entries[0])
      expect(res.headers['content-type']).toEqual(
        expect.stringContaining('json')
      )
    })
  })
})

//TODO test for image upload on cloudinary
describe('POST /entries/upload-image', () => {})

describe('PUT /entries/edit/:id', () => {
  const id = entries[2]._id

  describe('given diary entry exist', () => {
    beforeEach(() => {
      mockingoose.resetAll()
      mockingoose(diaryEntryModel).toReturn(entries[2], 'findOneAndUpdate')
    })

    it('should return the entry if edited', async () => {
      const res = await request(app).put(`/entries/edit/${id}`).send(entries[2])
      expect(res.body.title).toBe(entries[2].title)
      expect(res.body.tags).toEqual(entries[2].tags)
      expect(res.body.text).toBe(entries[2].text)
      expect(res.body.imageUrl).toBe(entries[2].imageUrl)
    })

    it('should respond with 200 status code', async () => {
      const res = await request(app).put(`/entries/edit/${id}`).send(entries[2])
      expect(res.statusCode).toBe(200)
    })

    it('should specify json in the content type header', async () => {
      const res = await request(app).put(`/entries/edit/${id}`).send(entries[2])
      expect(res.headers['content-type']).toEqual(
        expect.stringContaining('json')
      )
    })
  })

  describe('given no diary entry found', () => {
    it('should respond with 404 code and error message', async () => {
      mockingoose(diaryEntryModel).toReturn(null, 'findOneAndUpdate')

      const res = await request(app).get('/entries/2')
      expect(res.statusCode).toBe(404)
      expect(res.body).toEqual({ message: 'Diary entry not found' })
    })
  })
})

describe('DELETE /entries/delete/:id', () => {
  const id = entries[1]._id

  describe('given diary entry successfully is deleted', () => {
    beforeEach(() => {
      mockingoose.resetAll()
      mockingoose(diaryEntryModel).toReturn(entries[1], 'findOneAndDelete')
    })

    it('should respond with 200 status code', async () => {
      const res = await request(app).delete(`/entries/delete/${id}`)
      expect(res.statusCode).toBe(200)
      expect(res.body).toEqual({ message: 'Diary entry deleted successfully' })
    })

    it('should specify json in the content type header', async () => {
      const res = await request(app).delete(`/entries/delete/${id}`)
      expect(res.headers['content-type']).toEqual(
        expect.stringContaining('json')
      )
    })
  })
})
